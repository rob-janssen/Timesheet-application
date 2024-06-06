import { User } from '../model/User'

interface Args {
  id: string;
  name: string;
  email: string;
  password: string;
  company: string;
}

export const UserResolver = {
  Query: {
    users: async () => {
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
        const user = await User.findById(args.id);
        if (!user)
          throw new Error(`User with ID ${args.id} not found.`);
        return {
          success: true,
          user,
        }
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    addUser: async (_: any, args: Args) => {
      try {
        const userMail = await User.findOne({email: args.email})
        if(userMail) throw new Error('User already exists.')
        const newUser = await User.create({
          name: args.name,
          email: args.email,
          password: args.password,
          company: args.company,
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
  },
};
