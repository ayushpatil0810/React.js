import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0)
  // let counter = 0

  const addValue = () => {
    // counter += 1
    // console.log(counter);
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Course With Ayush</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value: </button>
      <button onClick={reduceValue}>Reduce Value: </button>
      <p>Footer: </p>
    </>
  )
}

export default App
