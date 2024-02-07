const AuthConfigure = require("./authRoutes/AuthRouter")

const routesConfigure = (app) => {
  AuthConfigure(app)
}

 module.exports= routesConfigure
