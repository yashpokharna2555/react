const mongoose = require('mongoose');

// MongoDB connection string (you should replace this with your own database URI)
const DB_URI = process.env.DATABASE_URI; // Example: 'mongodb://localhost:27017/mydb'

const connectDB = async () => {
  try {
    // Connecting to MongoDB
    await mongoose.connect(DB_URI, {
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Export the connectDB function
module.exports = connectDB;