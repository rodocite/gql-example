import AWS from 'aws-sdk'
const eventBridge = new AWS()
const eventBridge = new AWS.EventBridge()
const lambda = new AWS.Lambda()

const serviceMap = {
  // Service configuration mapping
}

// Cleanup
const getAggregation = (aggregationName) => {}
const createRule = ({ input: { name, pattern, service } }) => {}

export default {
  createRule,
  getAggregation
}
