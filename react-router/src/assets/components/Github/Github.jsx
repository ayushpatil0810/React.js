import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=> {
    //     fetch('https://api.github.com/users/ayushpatil0810')
    //     .then((res) => res.json())
    //     .then((data)=> setData(data))
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Name: {data.name}, 
        Github Followers: {data.followers}
        <img className='rounded-3xl' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ayushpatil0810')
    return response.json()
}