const express = require("express");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolver");

const app = express();
const PORT = 9999;

app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
