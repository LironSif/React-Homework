import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Todo from './Components/Todo'
import TimeConverter from './Components/TimeConverter '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Todo/>
      <TimeConverter/>
    </>
  )
}

export default App
