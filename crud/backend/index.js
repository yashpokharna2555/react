const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require('./config/db.config')

connectDB()
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send("Welcome to teh srever")
    
})
app.post('/register', (req,res) => {
    try {
        
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