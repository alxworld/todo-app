import { useEffect, useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'

function App() {
  console.log('I am rendering.')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', description: 'Learn React' },
    { id: 2, title: 'Learn Vite', description: 'Learn Vite' },
    { id: 3, title: 'Build a React App with Vite', description: 'Build a React App with Vite' },
  ])

  return (
    <div>
      <Header>Alex ToDo Lists</Header>

      <Todo todos={todos} />
    </div>
  )
}

export default App
