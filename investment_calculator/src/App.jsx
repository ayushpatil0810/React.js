import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <main className="center">
        <Header />
        <UserInput onChange={handleChange} userInput={userInput} />
        {userInput.duration < 1 ? <p>Please enter a duration greater than 0.</p> : <Result input={userInput} />}
      </main>
    </>
  )
}

export default App
