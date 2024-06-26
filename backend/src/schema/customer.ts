import { buildSchema } from "graphql";

export const customersGQLSchema = buildSchema(`
    type customersInfoResponse {
        success: Boolean!
        total: Int!
        customers: [Customer!]!
    }
        
    type Query {
        customers: customersInfoResponse!
        customer(id: String!): customerResponse
    }
    
    type Mutation {
        addCustomer(customerName: String!, customerEmail: String!, customerAddress: String): createResponse
        updateCustomer(id: String!, customerName: String, customerEmail: String, customerAddress: String): updateResponse
        deleteCustomer(id: String!): deleteResponse
    }

    type Customer {
        customerName: String!
        customerEmail: String!
        customerAddress: String
    }

    type customerResponse {
        success: Boolean!
        customer: Customer!
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
    }
`);
