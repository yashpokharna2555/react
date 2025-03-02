const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user', {
            
            
        })
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}
module.exports = connectDB;