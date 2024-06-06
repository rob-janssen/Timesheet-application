import { buildSchema } from "graphql";

export const userGQLSchema = buildSchema(`

    type User {
        name: String!
        email: String!
        password: String!
        company: String!
    }

    type Query {
        users: usersResponse!
        user(id: String!): User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!, company: String!): createResponse
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

    type usersResponse {
        success: Boolean!
        total: Int!
        users: [User!]!
    }
    type userResponse {
        success: Boolean!
        user: User!
    }
`);
