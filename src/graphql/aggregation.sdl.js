export const schema = gql`
  type Aggregation {
    id: String!
    type: String!
    name: String!
    state: JSON!
    data: JSON!
    handler: String!
  }

  type Query {
    aggregations: [Aggregation!]!
    aggregation(name: String!): Aggregation!
  }

  input CreateAggregationInput {
    name: String!
    state: JSON!
    data: JSON!
    handler: String!
  }

  type Mutation {
    createAggregation(input: CreateAggregationInput!): Aggregation!
  }
`
