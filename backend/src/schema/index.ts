import { mergeTypeDefs } from "@graphql-tools/merge"
import { timesheetsGQLSchema } from "./timesheets"
import { userGQLSchema } from "./user"
import { timesheetCompanyGQLSchema } from "./timesheetCompany"


export const mergedGQLSchema = mergeTypeDefs([timesheetsGQLSchema, userGQLSchema, timesheetCompanyGQLSchema])