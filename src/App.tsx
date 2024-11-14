import { useState } from 'react'
import './App.css'
import { Task } from './task/Task'

// INTERFACE FOR TASK INFO (description & ID)
interface TaskType {
  desc: string ,
  id: string
}

function App() {

  const [inputValue , setInputValue] = useState<string>("")
  const [error , setError] = useState<string>("")
  const [tasks , setTasks] = useState<TaskType[]>([])

  // ADD TASK TO TASKLIST STATE
  const addTask = (taskDesc: string) => {

    const taskExists = tasks.find((element) => element.desc === taskDesc)

    if (taskExists === undefined) {
      setTasks([...tasks , {desc: taskDesc , id: taskDesc}])
      setError("")
      setInputValue("")
    } else {
      setError("Esta tarea ya existe en la lista 📑")
    }

  }

  // DELETE TASK FROM THE TASKLIST STATE
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app">
      <div className="task-container">
        <div className="title-container">
          <h1>To do list con TypeScript</h1>
        </div>
        <div className="input-container">
          <input type="text" placeholder='Escribe la tarea a agregar' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button onClick={() => addTask(inputValue)}>AGREGAR TAREA</button>  
        </div>
        <p className='error'>{error}</p>
        <div className="tasks-container">
          {tasks.map((taskItem) => {
            return <Task taskName={taskItem.desc} taskStatus={false} key={taskItem.desc} deleteTask={deleteTask}></Task>
          })} 
        </div>
      </div>
    </div>
  )
}

export default App
