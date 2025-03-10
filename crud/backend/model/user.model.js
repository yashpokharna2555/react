const mongoose = require('mongoose');

// Define the schema for the User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensures that email is unique
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => {
        // Simple email validation regex
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Ensure password is at least 6 characters
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
