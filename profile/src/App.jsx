import { useState } from 'react'
import './index.css'; // ✅ Ensure this is imported
import './App.css';
import Profile from './components/Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />

    </>
  )
}

export default App
