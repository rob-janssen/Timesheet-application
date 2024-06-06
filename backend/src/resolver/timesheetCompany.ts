import { TimesheetCompany } from "../model/TimesheetCompany";

interface Args {
  id: string;
  name: string;
  users: string[];
  customers: { customerName: string }[];
}

export const timesheetCompanyResolver = {
  Query: {
    timesheetCompanies: async () => {
      try {
        const getTimesheetCompanies = await TimesheetCompany.find();
        if (!getTimesheetCompanies)
          throw new Error("No timesheet companies found.");
        return {
          success: true,
          total: getTimesheetCompanies.length,
          timesheetCompanies: getTimesheetCompanies,
        };
      } catch (e) {
        throw e;
      }
    },
    timesheetCompany: async (_: any, args: Args) => {
      try {
        const timesheetCompany = await TimesheetCompany.findById(args.id);
        if (!timesheetCompany)
          throw new Error(`Timesheet company with id ${args.id} not found!`);
        return {
          success: true,
          timesheetCompany,
        };
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    addTimesheetCompany: async (_: any, args: Args) => {
      try {
        const newTimesheetCompany = await TimesheetCompany.create({
          name: args.name,
          users: args.users,
          customers: args.customers,
        });

        return {
          success: true,
          message: `Timesheet company ${args.name} created.`,
          id: newTimesheetCompany._id,
          timesheetCompany: newTimesheetCompany,
        };
      } catch (e) {
        throw e;
      }
    },
  },
};
