export const schema = gql`
  type Stream {
    type: String!
    name: String!
  }

  type Query {
    streams: [Stream!]!
  }

  input CreateStreamInput {
    name: String!
  }

  type Mutation {
    createStream(input: CreateStreamInput!): Stream!
  }
`
