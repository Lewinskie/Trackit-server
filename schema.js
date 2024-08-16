const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { Asset } = require('./models');

const AssetType = new GraphQLObjectType({
  name: 'Asset',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    assets: {
      type: new GraphQLList(AssetType),
      resolve(parent, args) {
        return Asset.findAll();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAsset: {
      type: AssetType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Asset.create({
          name: args.name,
          description: args.description
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
