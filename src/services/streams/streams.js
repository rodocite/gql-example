import dynamo from 'src/lib/dynamo'

export const streams = () => {
  return dynamo.getStreams()
}

export const createStream = ({ input }) => {
  return dynamo.createStream(input)
}
