const getEventByStream = async ({ pk, sk }) => {}
const getEventsByStream = async ({ pk }) => {}
const getAllEvents = async () => {}
const getStreams = async () => {}
const createEvent = async (attributes) => {}
const createStream = async (attributes) => {}
const createAggregation = async (attributes) => {}
const getAggregation = async (aggregationName) => {}
const getAggregations = async () => {}

export default {
  createAggregation,
  createEvent,
  createStream,
  getAggregation,
  getAggregations,
  getAllEvents,
  getEventByStream,
  getEventsByStream,
  getStreams,
}
