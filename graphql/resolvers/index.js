const userResolvers = require('./users')

const { User } = require('../../models')

module.exports = {
 
  User: {
    createdAt: (parent) => parent.createdAt.toISOString(),
  },
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation
  },

}
