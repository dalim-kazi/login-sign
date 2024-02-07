const express = require("express")
 
const { API } = require("../../Utlis/contants")
const { signUpController, SignInController } = require("../../controller/AuthController")
const authRouter = express.Router()


// post
authRouter.post( API.API_CONTEXT + "signUp",
   signUpController
)
// get 
authRouter.get(
  API.API_CONTEXT + "signIn",
  SignInController
)



const AuthConfigure = (app) => {
  app.use("/",authRouter)
}

module.exports =AuthConfigure