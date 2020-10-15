const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    fullname: String
  }

  type Query {
    users: [users]!
  }
`;

module.exports = typeDefs
