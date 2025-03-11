import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import axios from "axios";
// import Logout from '../pages/Logout';



const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout');
      localStorage.removeItem("token");
      navigate('/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  return (
    <div>
      {/* ✅ Add Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {
            !token ? (
              <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )
          }

        </ul>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </div>
  );
};

export default Navbar;
