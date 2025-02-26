import React from "react";

import { useState } from 'react'

import './App.css'

function App() {
  const initialBoard = () => {
    return Array(9).fill(null);
  };

  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true)
  const reset = () => {
    setBoard(initialBoard());
  }
  const handleClick = (id) => {
    console.log(id);
    const newArr = [...board];
    newArr[id] = isXNext ? 'X' : 'O'
    setBoard(newArr)
    setIsXNext(!isXNext)

  }
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
          <div className="text-3xl font-bold text-gray-700 mb-4">
            Player {isXNext ? 'X' : 'O'} turn

          </div>
          <div className="grid grid-cols-3 gap-2 bg-black p-3 rounded-lg">
            {
              board.map((item, idx) => {
                return (
                  <button onClick={() => handleClick(idx)} className="w-24 h-24 text-4xl font-bold text-gray-800 bg-white flex justify-center items-center border border-gray-400 rounded-lg hover:bg-gray-100 transition" key={idx}>
                    {item}
                  </button>
                )
              })
            }
          </div>
          <button
            onClick={reset}
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Reset Game
          </button>
        </div>
      </div>
    </>
  )
}

export default App
