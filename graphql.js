const { ApolloServer, gql } = require("apollo-server-lambda")

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloSersver({
    typeDefs,
    resolvers,
    cors: {
        origin: '*',
        credientials: true,
    }
  });

exports.handler = server.createHandler();