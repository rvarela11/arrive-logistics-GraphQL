const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString
} = graphql;

const { CarrierListType } = require('./carrierListType');
const { citiesResolver } = require('./cities');
const { carrierListByCityResolver } = require('./carrierListByCity');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      Cities: {
          type: new GraphQLList(CarrierListType),
          resolve: citiesResolver
      },
      CarrierListByCity: {
          type: new GraphQLList(CarrierListType),
          args: {
              value: { type: GraphQLString }
          },
          resolve: carrierListByCityResolver
      }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
