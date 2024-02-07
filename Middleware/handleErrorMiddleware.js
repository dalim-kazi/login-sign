const { GeneralError } = require("../Utlis/Error");

const handleError = (err, req, res, next) => {
     if (err instanceof GeneralError) {
        return res.status(err.code).json(err.toJSON())
    }
     else {
        res.status(500).json({
            error: {
            name: 'Internal server Error',
            message: 'Something went wrong on the server.',
            code: 500,
            },
          })
    }

}


module.exports =handleError