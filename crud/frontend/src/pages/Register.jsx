import React, { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        
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
