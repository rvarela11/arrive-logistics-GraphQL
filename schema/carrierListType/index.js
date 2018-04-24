const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = graphql;

const LocationsType = new GraphQLObjectType({
  name: 'LocationsType',
  fields: {
    City: { type: GraphQLString },
    State: { type: GraphQLString }
  }
})

const CarrierListType = new GraphQLObjectType({
    name: 'CarrierListType',
    fields: {
        Id: { type: GraphQLInt },
        Name: { type: GraphQLString },
        Locations: {type: new GraphQLList(LocationsType)}
    }
});

module.exports = {
    CarrierListType
};
