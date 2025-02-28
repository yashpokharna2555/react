import React, { useState } from "react";

function App() {
  const initializeBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initializeBoard());
  const[isXnext, setIsXNext] = useState(true);

  const winningCombination = []

  const handleSubmit = (id) => {
    // console.log(id);
    const newArr = [...board];
    newArr[id] = isXnext ? 'X' : 'O';
    setBoard(newArr)
    console.log(newArr);
    
    setIsXNext(!isXnext)
    
    
  }

  const reset = () => {
    setBoard(initializeBoard())
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gray-200 p-6">
      <div className="text-lg font-semibold mb-4">Player {isXnext ? 'X' : 'O'} turn</div>
      
      <div className="grid grid-cols-3 gap-2 bg-gray-300 p-4 rounded-lg">
        {board.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => handleSubmit(idx)}
            className="flex justify-center items-center w-16 h-16 text-2xl font-bold bg-white border border-gray-500 cursor-pointer hover:bg-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
      
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Reset Game
      </button>
    </div>
  );
}

export default App;
