const User = require('../model/user.model.js')
const bcrypt = require('bcryptjs');
const test = (req, res) => {
    res.send('Test route works!');
};

const register = async(req,res) => {
    try {
        const {name, email, password} = req.body
        if (!name) {
            return res.json({ success: false, message: 'Name not defined' });
        }      
        const checkEmail = await User.findOne({email})
        if(checkEmail){
            return res.json({ success: false, message: 'Email already present' });
        }

        if(password.length < 7){
            return res.json({success: false, message: 'Password should be greater then 6 characters'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({name,email,password: hashedPassword});
        await newUser.save();

        return res.json({success: true, message: "Successfully registered"})





    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
        
    }
}
module.exports = {
    test,
    register
};
