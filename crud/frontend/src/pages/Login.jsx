import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
            email: '',
            password: ''
        })
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            
        }
    return (
        <div>
            <center><h3>Login</h3></center>
            <form action="" onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
