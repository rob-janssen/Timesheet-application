require("dotenv").config();

import { connectDB } from "./db/connect";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { verifyAccessToken } from "./middleware/authenticate";

import { mergedGQLSchema } from "./schema";
import { resolvers } from "./resolver";

const PORT = parseInt(process.env.PORT as string) || 3000;

const server = new ApolloServer({
  typeDefs: mergedGQLSchema,
  resolvers: resolvers,
  introspection: true,
});

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI as string);
    await startStandaloneServer(server, {
      context: async ({ req }) => {
        //TODO: The block below is for context configuration in order to protect the GraphQL endpoints

        // const token = req.headers.authorization || "";
        // const user = verifyAccessToken(token);
        // if (!user) throw new Error("User is not authenticated");
        // return { user };
      },
      listen: { port: PORT },
    });
    console.log(`Server is running on port: ${PORT}`);
  } catch (e) {
    console.log(e);
  }
};

start();
