import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'
import AddTask from './components/AddTask'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const tasks = JSON.parse(localStorage.getItem("task"));
  console.log(tasks)
  return (
    <>
      <div>
        <button
          className='hover:bg-yellow-500 bg-yellow-600 text-gray-300 rounded-lg font-normal hover:shadow-lg hover:shadow-third hover:text-sky-600 py-2 px-6 my-10'
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Task
        </button>
      </div>
      <div>
        {
          tasks?.map(task=>{
            return <TaskCard key={task?.id} data={task}/>
          })
        }
        
      </div>

      {
        showModal && (
          <AddTask modalTitle={"Add Task"} setShowModal={setShowModal} />
        )
      }
    </>
  )
}

export default App
