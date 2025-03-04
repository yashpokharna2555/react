const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require('./config/db.config')
const User = require('../backend/models/user.model')

connectDB()
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send("Welcome to teh srever")
    
})
app.post('/register', async(req,res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email});
        if(user) {
            res.send({success: false, message: "email already registered"});
        }

        
    } catch (error) {
        
    }
})
app.post('/login',(req,res) => {
    try {
        const {email, password} = req.body
        
    } catch (error) {
        
    }
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});