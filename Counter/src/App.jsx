import React from "react";
import { useState } from 'react'
import './App.css'
import './index.css';


function App() {
  const [count, setCount] = useState(0)
  const onInsertHandler = (count) => {
    if(count <1){
      alert('No negative')
    }
    setCount((prev) => prev-1);
  }
  const onInsert2Handler = (count) => {
    setCount((prev) => prev+1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="flex items-center justify-center">
        <span onClick={() => onInsertHandler()}>◀️</span>
        <div>Counter: {count}</div>
        <span onClick={() => onInsert2Handler()}>▶️</span>
      </div>

    </>
  )
}

export default App
