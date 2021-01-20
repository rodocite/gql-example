import eventBridge from 'src/lib/eventbridge'

export const createRule = async ({ input: { name, pattern, service } }) => {
  return await eventBridge.createRule({name, pattern, service})
}
