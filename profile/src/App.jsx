import { useState } from 'react'
import './index.css'; // ✅ Ensure this is imported
import './App.css';
import Profile from './components/Profile';


function App() {
  const profileList = [
    {name: "Yash Pokharna", age: 30},
    {name: "Alex Johnson", age: 20}
  ]

  return (
    <>
      <div>
        {profileList.map((item,idx) =>(
          <Profile key={idx} {...item} />
        ))}
      </div>
      

    </>
  )
}

export default App
