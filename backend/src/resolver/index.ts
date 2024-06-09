import { TimesheetResolver } from "../resolver/timesheets";
import { UserResolver } from "./user";
import { CustomerResolver } from "./customer";

export const resolvers = [TimesheetResolver, UserResolver, CustomerResolver];
