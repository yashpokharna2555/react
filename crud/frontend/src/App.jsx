import React from 'react'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Update from './components/Update'
import Create from './components/Create'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Create />} />
      <Route path='/' element={<Update />} />
    </Routes>
  )
}

export default App
