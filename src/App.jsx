import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const apiKey = import.meta.env.VITE_API_KEY; // Vite


const API_URL = "https://www.themuse.com/api/public/jobs?page=1";
function App() {
  const [count, setCount] = useState(0)
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setJobs(data.results))
  },[])
  return (
    <>
     {jobs[0].contents}
    </>
  )
}

export default App
