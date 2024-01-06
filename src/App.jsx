import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'
import AddTask from './components/AddTask'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AddTask></AddTask>
        <AddTaskModal/>
      </div>
      <div>
        <button className='bg-yellow-500 rounded-lg font-normal hover:shadow-lg hover:shadow-third text-gray-600 py-2 px-6 my-10' type="button">Add Task</button>
      </div>
      <TaskCard></TaskCard>
    </>
  )
}

export default App
