import React, { useState } from 'react'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', data);
            if (response.data.success) {
                localStorage.setItem("token", response.data.token)
                console.log("Successful");
                toast.success(response.data.message)
                setData({  email: '', password: '' });
                navigate('/dashboard')
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }

    }
    return (
        <div>
            <center><h3>Login</h3></center>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
