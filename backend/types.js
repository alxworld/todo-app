const zod = require('zod')

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  // done: zod.boolean(),
})

const updateTodoSchema = zod.object({
  id: zod.string(),
})
module.exports = { todoSchema, updateTodoSchema }
// What will be the output of the following code?
//  todoSchema.parse({ title: 'string', description: 'string', done: true })
//  updateTodoSchema.parse({ id: 'string' })
