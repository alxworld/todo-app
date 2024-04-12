const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://100xadmin:lhl1aQJZA9s8ZGTs@cluster0.oyo5hpj.mongodb.net/todo-app')

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
})
const Todo = mongoose.model('todos', todoSchema)
module.exports = { Todo }
