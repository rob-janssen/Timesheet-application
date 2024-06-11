import { buildSchema } from "graphql";

export const timesheetsGQLSchema = buildSchema(`
    input workingHoursType {
        day: String!
        hours: Float
        description: String
    }

    type workingHoursOutput {
        day: String!
        hours: Float
        description: String
    }

    type Timesheet {
        user: String!
        company: String!
        week: Float!
        year: Float!
        workingHours: [workingHoursOutput]!
    }

    type Query {
        timesheets: timesheetsInfoResponse!
        timesheet(id: String!): timesheetResponse
    }

    type Mutation {
        addTimesheet(user: String!, company: String!, week: Float!, year: Float!, workingHours: [workingHoursType]): createResponse
        updateTimesheet(id: String!): updateResponse
        deleteTimesheet(id: String!): deleteResponse
    }

    type createResponse {
        success: Boolean!
        message: String!
        id: String!
    }

    type updateResponse {
        success: Boolean!
        message: String!
        id: String!
    }

    type deleteResponse {
        success: Boolean!
        message: String!
        id: String!
    }

    type timesheetsInfoResponse {
        success: Boolean!
        total: Int!
        timesheets: [Timesheet!]!
    }
    type timesheetResponse {
        success: Boolean!
        timesheet: Timesheet!
    }
`);
