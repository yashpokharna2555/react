import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [complete, setComplete] = useState(0);

  const onAddHandler = (content) => {
    setTask([...task,content]);
  }

  return (
    <>
      <div className="container">
        <h1>TO-DO List</h1>


        <div class="task-summary">
          <p>Total Tasks: <span id="total-tasks">0</span></p>
          <p>Completed: <span id="completed-tasks">0</span></p>
        </div>


        <div class="task">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <input type="checkbox" />
          <button>Delete Task</button>
        </div>


        <button class="add-task-btn" onClick={()=>onAddHandler}>Add Task</button>
      </div>

    </>
  )
}

export default App
