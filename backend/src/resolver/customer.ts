import { Customer } from "../model/Customer";

interface Args {
  id: string;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
}

export const CustomerResolver = {
  Query: {
    customers: async (_: any, args: Args, context: any) => {
      try {
        const customers = await Customer.find({});
        if (!customers) throw new Error("No customers found");
        return {
          success: true,
          total: customers.length,
          customers,
        };
      } catch (e) {
        throw e;
      }
    },
    customer: async (_: any, args: Args) => {
      try {
        const customer = await Customer.findById(args.id);
        if (!customer)
          throw new Error(`Customer with ID ${args.id} not found.`);
        return {
          success: true,
          customer,
        };
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    addCustomer: async (_: any, args: Args) => {
      try {
        const findCustomer = await Customer.findOne({
          customerName: args.customerName,
        });
        if (findCustomer) throw new Error("Customer already exists.");
        const newCustomer = await Customer.create({
          customerName: args.customerName,
          customerEmail: args.customerEmail,
          customerAddress: args.customerAddress,
        });

        return {
          success: true,
          message: `Customer created succesfully.`,
          id: newCustomer?._id,
        };
      } catch (e) {
        throw e;
      }
    },
    updateCustomer: async (_: any, args: Args) => {
      try {
        const findCustomer = await Customer.findOneAndUpdate(
          { _id: args.id },
          {
            customerName: args.customerName,
            customerEmail: args.customerEmail,
            customerAddress: args.customerAddress,
          }
        );
        if (!findCustomer) throw new Error("No customer with that ID found.");
        return {
          success: true,
          message: `Customer ${findCustomer?.customerName} updated!`,
          id: findCustomer?._id,
        };
      } catch (e) {
        throw e;
      }
    },
    deleteCustomer: async (_: any, args: Args) => {
      try {
        const findCustomer = await Customer.findOneAndDelete({ _id: args.id });
        if (!findCustomer) throw new Error("No customer with that ID found.");
        return {
          success: true,
          message: `Customer ${findCustomer.customerName} deleted from the database.`,
          id: findCustomer._id,
        };
      } catch (e) {
        throw e;
      }
    },
  },
};
