import { useState } from 'react'
import './App.css'

function App() {
  const[num, setNum] = useState(0)
  const count = () => {
    setNum(num + 1)
  }
  return(
    <>
      <button onClick={count}>add</button>
      <p>{num}</p>
    </>
  )  
}

export default App
