const jwt = require('jsonwebtoken')

const authenticateToken = async(req,res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err,decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: "Invalid token" });
        }
        req.user = decoded
        next()
    })
}

module.exports = authenticateToken