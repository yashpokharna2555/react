import React from "react";
import { useState } from 'react'

import './App.css'

function App() {
  const [leftList, setLeftList] = useState(["React", "Javascript", "Angular", "Vue"])
  const [rightList, setRightList] = useState(["C++", "Java", "Python", "C"])
  const [checkedItems, setCheckedItems] = useState({

  })
  const handleChange = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }))
  }
  function handleLeft() {
    setLeftList([...leftList, ...rightList])
    setRightList([]);
  }
  function handleRight() {
    setRightList([...rightList, ...leftList])
    setLeftList([])
  }

  const moveToLeft = () => {
    const selectedItems = rightList.filter((item)=> checkedItems[item]);
    setLeftList([...leftList,...selectedItems]);
    setRightList(rightList.filter((item)=> !checkedItems[item]))

    setCheckedItems((prev) => {
      const updated = {...prev}
      selectedItems.forEach((item)=>(
        updated[item] = false
      ))
      return updated
    })
  }
  const moveToRight = () => {
    const selectedItems = leftList.filter((item) => checkedItems[item]);
    setRightList([...rightList,...selectedItems])
    setLeftList(leftList.filter((item) => !checkedItems[item]))

    setCheckedItems((prev) => {
      const updated = {...prev};
      selectedItems.forEach((item)=>(
        updated[item] = false
        
      ))
      return updated
    })
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
                  <input type="checkbox" name="" id="" checked={checkedItems[list] || false} onChange={() => handleChange(list)} />
                  <label htmlFor="">{list}</label>
                </div>
              ))
            }
          </div>
          <div className="button-list">
            <div>
              <p onClick={handleRight}>➡️</p>
              {
                Object.keys(checkedItems).some(key => checkedItems[key]) ? (
                  <p onClick={moveToRight}>▶️</p>
                ) : (
                  <p></p>
                )
              }
              {
                Object.keys(checkedItems).some(key => checkedItems[key]) ? (
                  <p onClick={moveToLeft}>◀️</p>
                ) : (
                  <p></p>
                )
              }
              <p onClick={handleLeft}>⬅️</p>
            </div>
          </div>
          <div className="right-container">
            {
              rightList.map((list, idx) => (
                <div key={idx}>
                  <input type="checkbox" name="" id="" checked={checkedItems[list] || false} onChange={() => handleChange(list)} />
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
