import { TimesheetResolver } from "../resolver/timesheets";
import { UserResolver } from "./user";
import { timesheetCompanyResolver } from "../resolver/timesheetCompany";

export const resolvers = [TimesheetResolver, UserResolver, timesheetCompanyResolver];
