const User = require('../model/user.model.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const test = (req, res) => {
    res.send('Test route works!');
};

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) {
            return res.json({ success: false, message: 'Name not defined' });
        }
        const checkEmail = await User.findOne({ email })
        if (checkEmail) {
            return res.json({ success: false, message: 'Email already present' });
        }

        if (password.length < 7) {
            return res.json({ success: false, message: 'Password should be greater then 6 characters' })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return res.json({ success: true, message: "Successfully registered" })





    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const checkEmail = await User.findOne({email});
        if(!checkEmail){
            return res.json({success: false, message: "User not found"})
        }
        // console.log("Check email: ", checkEmail);
        
        
        const passwordCompare = await bcrypt.compare(password, checkEmail.password)
        if(!passwordCompare){
            return res.json({success: false, message: "Password not match"})
        }
        const token = jwt.sign(
            { id: checkEmail._id, checkEmail: user.email, checkEmail: user.name },
            process.env.SECRET_KEY,
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        res.cookie("token", token, { httpOnly: true, secure: false });
        return res.json({success: true, message: "Login successful", user: checkEmail})

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
module.exports = {
    test,
    register,
    login
};
