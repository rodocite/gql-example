import dynamo from 'src/lib/dynamo'

export const event = ({ id, stream }) => {
  return dynamo.getEventByStream({ pk: `stream#${stream}`, sk: `event#${id}` })
}

export const events = ({ stream }) => {
  if (stream === 'all') {
    return dynamo.getAllEvents()
  }

  return dynamo.getEventsByStream({ pk: `stream#${stream}` })
}

export const createEvent = ({ input }) => {
  return dynamo.createEvent(input)
}

export const shareEvent = (input) => {
  return dynamo.shareEvent(input)
}

export const unShareEvent = (input) => {
  return dynamo.unShareEvent(input)
}