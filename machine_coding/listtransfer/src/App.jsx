import React from "react";
import { useState } from 'react'

import './App.css'

function App() {
  const [leftList, setLeftList] = useState(["React", "Javascript", "Angular", "Vue"])
  const [rightList, setRightList] = useState(["C++", "Java", "Python", "C"])
  const [checkedItems, setCheckedItems] = useState({
    "React": false,
    "Javascript": false,
    "Angular": false,
    "Vue": false,
    "C++": false,
    "Java": false,
    "Python": false,
    "C": false
  })
  function handleLeft(){
    setLeftList([...leftList,...rightList])
    setRightList([]);
  }
  function handleRight(){
    setRightList([...rightList,...leftList])
    setLeftList([])
  }
  return (
    <>
      <div>
        <center><h2>List Transfer</h2></center>
        <div className="container" >
          <div className="left-container">
            {
              leftList.map((list, idx) => (
                <div key={idx}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{list}</label>
                </div>
              ))
            }
          </div>
          <div className="button-list">
            <div>
              <p onClick={handleRight}>➡️</p>
              <p>▶️</p>
              
              <p>◀️</p>
              <p onClick={handleLeft}>⬅️</p>
            </div>
          </div>
          <div className="right-container">
            {
              rightList.map((list, idx) => (
                <div key={idx}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{list}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
