import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl'>Hi from home</h1>
      <TaskCard></TaskCard>
    </>
  )
}

export default App
