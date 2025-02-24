import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState(["Eat"])
  const [newTask, setNewTask] = useState("");
  function handleEventChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if(newTask.trim().length > 0){
      setTask([...task, newTask]);
      setNewTask("")
    }
    
  }

  function deleteTask(id) {
    console.log(id);
    const updateTask  = task.filter((item,idx) => idx!==id)
    setTask(updateTask)
    
  }

  function upTask(id) {
    if (id === 0) return; // Prevent moving the first task up

    let updatedTask = [...task]; // Copy the task array

    // Correct swap syntax
    [updatedTask[id], updatedTask[id - 1]] = [updatedTask[id - 1], updatedTask[id]];

    setTask(updatedTask); 
  }

  function downTask(id) {

  }

  return (
    <>
      <div className="container">
        <h1>TO-DO List</h1>
        <div>
          <input type="text" placeholder='Write something' value={newTask} onChange={handleEventChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div>
          <ol>
            {
              task.map((item,idx) => (
                <li key={idx}>
                  <span>{item}</span>
                  <button onClick={()=>deleteTask(idx)}>Delete</button>
                  <button onClick={()=>upTask(idx)}>⬆️</button>
                  <button onClick={()=>downTask(idx)}>⬇️</button>
                </li>
              ))
            }
          </ol>
        </div>

        
      </div>

    </>
  )
}

export default App
