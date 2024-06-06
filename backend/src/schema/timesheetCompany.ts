import { buildSchema } from "graphql";

export const timesheetCompanyGQLSchema = buildSchema(`
    type User {
        id: ID!
    }

    type Customer {
        customerName: String!
    }

    type TimesheetCompany {
        id: ID!
        name: String!
        users: [User!]
        customers: [Customer!]
    }

    type Query {
        timesheetCompanies: TimesheetCompaniesResponse!
        timesheetCompany(id: ID!): TimesheetCompanyResponse
    }

    type Mutation {
        addTimesheetCompany(name: String!, users: [ID!], customers: [CustomerInput!] ): TimesheetCompanyResponse!
    }

    input CustomerInput {
        customerName: String!
    }

    type TimesheetCompaniesResponse {
        success: Boolean!
        total: Int!
        timesheetCompanies: [TimesheetCompany!]!
    }

    type TimesheetCompanyResponse {
        success: Boolean!
        timesheetCompany: TimesheetCompany
    }
`);