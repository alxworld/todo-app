import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Todo } from './components/Todo'

function App() {
  const [exchdata, setExchdata] = useState({})
  const [bankdata, setBankdata] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setBankdata({ bank: 'Bank of America', rate: 0.5, returns: 100 })
    }, 3000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchdata({ currency: 'USD', rate: 1.0, returns: 300 })
    }, 5000)
  }, [])

  console.log('I am rendering.')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn Vite', completed: false },
    { id: 3, title: 'Build a React App with Vite', completed: false },
  ])

  return (
    <div>
      Hi there, your income tax returns is {exchdata.returns} from {exchdata.currency} exchange rate of {exchdata.rate} and your bank returns is {bankdata.returns} from {bankdata.bank} interest rate of {bankdata.rate}
      {/* <Header>Alex ToDo Lists</Header>
      <img src={reactLogo} alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
      <Todo todos={todos} /> */}
    </div>
  )
}

export default App
