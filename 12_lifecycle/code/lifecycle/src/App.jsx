import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import CountriesList from './components/CountriesList/CountriesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <CountriesList/>
       {/* <Box size="small" />
      <Box size="medium" />
      <Box size="large" /> */}
    </>
  )
}

export default App
