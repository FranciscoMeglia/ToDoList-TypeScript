import { useState } from 'react';
import './Task.css'

interface TaksProps {
    taskName: string ;
    taskStatus: boolean;
    deleteTask: Function;
}

export const Task: React.FC<TaksProps> = ({taskName , taskStatus , deleteTask}) => {

    const [status , setStatus] = useState<boolean>(taskStatus)

    const changeTaskStatus = () => {
        setStatus(true)
    }

  return (
    <div className="task">
        {status ? <p className='complete'>{taskName}</p> : <p>{taskName}</p>}
        <div className="icons-container">
            <p onClick={() => deleteTask(taskName)}>🗑️</p>
            <p onClick={() => changeTaskStatus()}>✅</p>
        </div>
    </div>
  )
}
