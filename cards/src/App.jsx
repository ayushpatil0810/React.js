import { useEffect, useState } from 'react'
import './App.css'

function Card ({userid, title}) {
  return (
    <div className="card">
      <h2>{userid}</h2>
      <span>{title}</span>
    </div>
  )
}


function App() {

  const [data, setData] = useState([])

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error)=>{
      console.log("Error fetching API", error)
    })

  }, [])




  return (
    <>
      {data.map((obj) => <Card key={obj.id} userid={obj.userId} title={obj.title}/>)}
    </>
  )
}

export default App
