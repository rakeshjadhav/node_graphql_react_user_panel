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
  type Message {
    uuid: String!
    content: String!
    from: String!
    to: String!
    createdAt: String!
    reactions: [Reaction]
  }
  type Reaction {
    uuid: String!
    content: String!
    createdAt: String!
    message: Message!
    user: User!
  }
  type Query {
    getUsers: [User]!
    login(username: String!, password: String!): User!
    getMessages(from: String!): [Message]!
  }
  type Mutation {
    register(
      username: String!
      user_email: String!
      password: String!
      user_firstname: String!
      user_lastname: String!
    ): User!
    sendMessage(to: String!, content: String!): Message!
    reactToMessage(uuid: String!, content: String!): Reaction!
  }
  type Subscription {
    newMessage: Message!
    newReaction: Reaction!
  }
`
