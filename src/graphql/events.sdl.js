export const schema = gql`
  type Event {
    id: String!
    pk: String!
    sk: String!
    type: String!
    stream: String!
    name: String!
    data: JSON!
    date: String!
  }

  type Query {
    events(stream: String!): [Event!]!
    event(id: String!, stream: String!): Event!
  }

  input CreateEventInput {
    stream: String!
    name: String!
    data: JSON!
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event!
  }
`
