export const schema = gql`
  type Rule {
    name: String!
    service: String!
    pattern: JSON!
  }

  input CreateRuleInput {
    name: String!
    service: String!
    pattern: JSON!
  }

  type Mutation {
    createRule(input: CreateRuleInput!): Rule!
  }
`
