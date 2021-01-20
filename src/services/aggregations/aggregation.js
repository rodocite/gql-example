import dynamo from 'src/lib/dynamo'

export const aggregations = () => {
  return dynamo.getAggregations()
}

export const aggregation = async ({ name }) => {
  return await dynamo.getAggregation(name)
}

export const createAggregation = ({ input }) => {
  return dynamo.createAggregation(input)
}
