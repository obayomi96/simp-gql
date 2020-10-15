const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { models, db } = require('./db')

// const typeDefs = gql`
//   type User {
//     id: ID!
//     username: String!
//     friends: [User]!
//   }

//   type Query {
//     user: User!
//   }
// `

// const resolvers = {
//   Query: {
//     user() {
//       return {
//         id: '1',
//         username: 'obayomi',
//         friends: []
//       }
//     }
//   }
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    // const user = db.get('user').value()
    // return { models, db, user }
    return { models, db }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`)
})
