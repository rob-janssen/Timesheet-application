import { mergeTypeDefs } from "@graphql-tools/merge";
import { timesheetsGQLSchema } from "./timesheets";
import { userGQLSchema } from "./user";
import { customersGQLSchema } from "./customer";

export const mergedGQLSchema = mergeTypeDefs([
  timesheetsGQLSchema,
  userGQLSchema,
  customersGQLSchema
]);
