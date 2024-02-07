const { SUCCESS_CREATED, SUCCESS_GET } = require("../Utlis/contants")
const { signUpService, SignInService } = require("../service/authService/AuthService")

 
// signUp
const signUpController = async (req, res,next) => {
    try {
     const result = await signUpService(req.body) 
    if (result) {
    return res.status(SUCCESS_CREATED.STATUS_CODE).json({newUser:result, message:SUCCESS_CREATED.CONTENT})
     }
    }
    catch (error) {
    return  next(error,req,res)
    }
}


// login


const SignInController = async (req, res, next) => {
    try {
        const result = await SignInService(req.body)
        if (result) {
            return res.status(SUCCESS_GET.STATUS_CODE).json({user:result,message: SUCCESS_GET.CONTENT})
        }  
    }
    catch (error) {
        return next(error,req,res)
    }
}

module.exports = {
    signUpController,
    SignInController
}