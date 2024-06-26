// write backend code here
const express = require('express')
const cors = require('cors')
const app = express()

const todoSchema = require('./types').todoSchema
const updateTodoSchema = require('./types').updateTodoSchema

const Todo = require('./db').Todo

app.use(express.json())
app.use(cors())

// expected input from frontend
// {
//   title: 'string',
//   description: 'string',
//   done: 'boolean'
// }

// Home Page
app.get('/', (req, res) => {
  res.send('Hello World')
})

// create a new todo
app.post('/todo', async (req, res) => {
  const createPayload = todoSchema.parse(req.body)
  console.log(createPayload)
  if (!createPayload) {
    console.log('Payload not good')
    res.status(411).json({ msg: 'Invalid input' })
    return
  }
  console.log('Create a new todo')
  // create to do in mongodb
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    done: false,
  })

  res.send({ msg: 'Todo created' })
})

// list all todos
app.get('/todos', async (req, res) => {
  console.log('Get all todos')
  console.log(req.body)
  // to do: pull data from mongodb
  const todos = await Todo.find({})
  res.json(todos)
})

app.put('/todo/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
})

app.put('/completed', async (req, res) => {
  const updatePayload = updateTodoSchema.parse(req.body)
  console.log(updatePayload)
  if (!updatePayload) {
    res.status(411).json({ msg: 'Invalid input' })
    return
  }
  console.log('Update todo')
  // to do : update to do in mongodb
  await Todo.updateOne({ _id: updatePayload.id }, { done: true })
  res.send({ msg: 'Todo updated' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// Path: frontend/index.js
