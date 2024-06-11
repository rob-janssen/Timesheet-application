import { Timesheet } from "../model/Timesheet";

interface Args {
  id: string;
  user: string;
  company: string;
  week: number;
  year: number;
  workingHours: string[];
}

export const TimesheetResolver = {
  Query: {
    timesheets: async () => {
      try {
        const timesheets = await Timesheet.find({});
        if (!timesheets) throw new Error("No timesheets found");
        return {
          success: true,
          total: timesheets.length,
          timesheets,
        };
      } catch (e) {
        throw e;
      }
    },
    timesheet: async (_: any, args: Args) => {
      try {
        const timesheet = await Timesheet.findById(args.id);
        if (!timesheet)
          throw new Error(`Timesheet with ID ${args.id} not found.`);
        return {
          success: true,
          timesheet,
        };
      } catch (e) {
        throw e;
      }
    },
  },
  Mutation: {
    addTimesheet: async (_: any, args: Args) => {
      function getWeekDays(weekNumber: GLfloat, year: GLfloat) {
        let firstDayOfYear = new Date(Date.UTC(year, 0, 1));
        let dayOfWeek = firstDayOfYear.getUTCDay();

        if (dayOfWeek === 0) dayOfWeek = 7;
        let daysOffset = (weekNumber - 1) * 7 + (1 - dayOfWeek);
        let firstDayOfWeek = new Date(Date.UTC(year, 0, 1 + daysOffset));

        let weekDays = [];
        for (let i = 0; i < 7; i++) {
          let currentDay = new Date(firstDayOfWeek);
          currentDay.setUTCDate(firstDayOfWeek.getUTCDate() + i);
          weekDays.push({
            day: currentDay,
            hours: 0,
            description: "",
          });
        }
        return weekDays;
      }

      try {
        const definedWeek = getWeekDays(args.week, args.year);
        const newTimesheet = await Timesheet.create({
          user: args.user,
          company: args.company,
          year: args.year,
          week: args.week,
          workingHours: definedWeek,
        });

        return {
          success: true,
          message: `Timesheet for company ${newTimesheet.company}, week ${newTimesheet.week} is succesfully.`,
          id: newTimesheet?._id,
        };
      } catch (e) {
        throw e;
      }
    },
    updateTimesheet: async (_: any, args: Args) => {
      try {
        if (!args.id) throw new Error("No ID provided.");
        //TODO: finish the update timesheet (with re-calc of weekdays).
        //TODO: Consideration: is updating a timesheet relevant ?
        return {
          success: true,
          message: `Timesheet updated.`,
          id: "132",
        };
      } catch (e) {
        throw e;
      }
    },
    deleteTimesheet: async (_: any, args: Args) => {
      try {
        if (!args.id) throw new Error("No ID provided. Nothing deleted.");
        const findTimesheet = await Timesheet.findByIdAndDelete(args.id);
        if (!findTimesheet)
          throw new Error("Timesheet not found. Nothing deleted.");
        return {
          success: true,
          message: `Timesheet for week ${findTimesheet.week} and company ${findTimesheet.company} deleted.`,
          id: findTimesheet.id
        }
      } catch (e) {
        throw e;
      }
    },
  },
};
