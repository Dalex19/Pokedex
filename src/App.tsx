import { useState } from 'react'
import { PkmPage } from './app/pkm-page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <PkmPage/>  
  )
}

export default App
