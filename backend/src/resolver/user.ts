import { User } from "../model/User";


const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET;

interface Args {
  userId: string;
  name: string;
  email: string;
  password: string;
  company: string;
  customers: [string];
  role: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

export const UserResolver = {
  Query: {
    users: async (_: any, args: Args) => {
      try {
        const users = await User.find({});
        if (!users) throw new Error("No Users found");
        return {
          success: true,
          total: users.length,
          users,
        };
      } catch (e) {
        throw e;
      }
    },
    user: async (_: any, args: Args) => {
      try {
        const user = await User.findById(args.userId);
        if (!user) throw new Error(`User with ID ${args.userId} not found.`);
        return {
          success: true,
          user,
        };
      } catch (e) {
        throw e;
      }
    },
    loginUser: async (_: any, args: LoginArgs) => {
      try {
        if (!args.password || !args.email)
          throw new Error("No password or email provided.");

        const findUser = await User.findOne({ email: args.email });
        if (findUser === null) throw new Error("User not found.");
        const match = await bcrypt.compare(args.password, findUser?.password);
        if (match) {
          const userData = {
            userName: findUser.name,
            email: findUser.email,
            role: findUser.role
          }
          const token = jwt.sign(userData, JWT_SECRET, {expiresIn: '11d'} )
          return {
            success: true,
            message: 'Login success!',
            token: token
          }
        } else {
          return {
            success: false,
            message: 'Login failed. User or password is wrong.',
            token: ''
          }
        }
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    addUser: async (_: any, args: Args) => {
      try {
        const userMail = await User.findOne({ email: args.email });
        if (userMail) throw new Error("User already exists.");
        const newUser = await User.create({
          name: args.name,
          email: args.email,
          password: args.password,
          company: args.company,
          customers: args.customers,
          role: args.role,
        });

        return {
          success: true,
          message: `User created.`,
          id: newUser?._id,
        };
      } catch (e) {
        throw e;
      }
    },
    addCustomerToUser: async (_: any, args: Args) => {
      try {
        const newCustomers = args.customers;
        const findUser = await User.findOne({ _id: args.userId });
        if (!findUser)
          throw new Error(`User with ID ${args.userId} not found.`);
        if (!newCustomers) throw new Error(`No customers in request.`);

        const updatedUser = await User.findByIdAndUpdate(
          args.userId,
          { $addToSet: { customers: { $each: newCustomers } } },
          { new: true }
        );

        return {
          success: true,
          message: `User updated`,
          user: updatedUser,
        };
      } catch (e) {
        throw e;
      }
    },
  },
};
