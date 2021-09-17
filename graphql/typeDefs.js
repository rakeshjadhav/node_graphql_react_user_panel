const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    user_id :String
    username: String!
    user_email: String
    createdAt: String!
    token: String
    imageUrl: String
    user_firstname : String
    user_lastname : String

  }
  type Query {
    getUsers: [User]!
    login(username: String!, password: String!): User!
  }
  type Mutation {
    register(
      username: String!
      user_email: String!
      password: String!
      user_firstname: String!
      user_lastname: String!
    ): User!
  }
`
