import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Loader from './components/Realism'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>My First React Application</h1>
      <Card name = 'Ayush Patil' skill = 'Machine Learning'url='example.com'/>
      <Card name = 'Ayush' skill = 'Deep Learning'/>
      <Card name = 'Patil' skill = 'Web Development'/>
      <Card />
      <Loader/>
    </>
  )
}

export default App
