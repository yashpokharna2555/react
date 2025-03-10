import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8000/api/register', data)
            if(response.data.success){
                console.log("Successful");
                toast.success(response.data.message)
                setData({ name: '', email: '', password: '' });
                navigate('/login')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
        
        
    }
    return (
        <div>
            <center><h3>Register</h3></center>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                </div>
                <button  type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
