const userModels = require("../../Models/UserModel/UserModel")
const { NotFound, Unauthorized } = require("../../Utlis/Error")
const bcrypt =require("bcrypt")
const generateToken = require("../../Utlis/JwtTokenSign")
const signUpService = async (userData) => {
     const { name, email, password } = userData
     const bcryptPassword =await bcrypt.hash(password, 10)
     const newUser = await userModels.create({
          name,
          email,
          password: bcryptPassword
     })
     if (newUser) {
          const token = generateToken(newUser)
          return {newUser,token}
     }
     
     throw new NotFound("User creation failed")
}

// login

const SignInService = async (user) => {
     const { email, password } = user
     const userModel = await userModels.findOne({ email: email })
     if (userModel) {
          const isPasswordMatch = await bcrypt.compare(password, userModel.password)
          if (isPasswordMatch) {
               const token = generateToken(userModel)
               return {userModel,token}
          }
          else {
           throw new Unauthorized("Invalid credentials")
          }
          
     }
     else {
          throw new NotFound("User not found");
      }
}


module.exports = {
     signUpService,
     SignInService
}