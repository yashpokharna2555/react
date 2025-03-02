import React, { useEffect, useState } from "react";

function App() {
  const initializeBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initializeBoard());
  const[isXnext, setIsXNext] = useState(true);
  const [statusMessage, setStatusMessage] = useState("Player X turn")
  const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const calculateWinner = (board) => {
    for(let i = 0;i<winningCombination.length;i++){
      const [a,b,c] = winningCombination[i];
      if(board[a] && board[a] === board[b] && board[b] === board[c]){
        return board[a];
      }
      
    }
    return null;
  }
  const handleSubmit = (id) => {
    // console.log(id);
    const winner = calculateWinner(board);
    console.log(winner);
    
    if(winner || board[id])return;
    const newArr = [...board];
    newArr[id] = isXnext ? 'X' : 'O';
    setBoard(newArr)
    console.log(newArr);
    
    setIsXNext(!isXnext)
    
    
  }
  

  const reset = () => {
    setBoard(initializeBoard())
  }

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setStatusMessage(`Player ${winner} wins! 🎉`);
    } else if (!board.includes(null)) {
      setStatusMessage("It's a Draw! 🤝");
    } else {
      setStatusMessage(`Player ${isXnext ? 'X' : 'O'}'s turn`);
    }
  },[board, isXnext])

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gray-200 p-6">
      <div className="text-lg font-semibold mb-4">{statusMessage}</div>
      
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
