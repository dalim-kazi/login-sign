const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const generateToken = (user) => {
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.Jwt_Token, { expiresIn: '1h' })
    return token
}

module.exports =generateToken