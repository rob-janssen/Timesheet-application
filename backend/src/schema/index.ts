import { mergeTypeDefs } from "@graphql-tools/merge"
import { timesheetsGQLSchema } from "./timesheets"

export const mergedGQLSchema = mergeTypeDefs([timesheetsGQLSchema])