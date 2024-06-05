"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesheetsGQLSchema = void 0;
const graphql_1 = require("graphql");
exports.timesheetsGQLSchema = (0, graphql_1.buildSchema)(`
    type Timesheet {
        user: String!
        company: String!
        week: String!
        workingHours: [String!]!
    }

    type Query {
        timesheets: timesheetsInfoResponse!
        timesheet(id: String!): Timesheet!
    }

    type Mutation {
        addTimesheet(user: String!, company: String!, week: String!, workingHours: [String!]): createResponse
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
`);
