const express = require("express")
const morgan = require("morgan")
const  ip = require('ip');
const app = express()
const port = process.env.PORT || 5000
const dotenv = require("dotenv")
const body_parser =require("body-parser")
const connectionDB = require("./config/db")
const routesConfigure = require("./routes/routes")
const handleError = require("./Middleware/handleErrorMiddleware")
dotenv.config()
// app.use(express.json())
app.use(morgan("dev"))
app.use(body_parser.json())
app.get("/", (req, res) => {
    res.send("hello")
})

connectionDB()
routesConfigure(app)
app.use(handleError)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    const ipAddress = ip.address()
    console.log(`Server is running on http://${ipAddress}:${port}`);
})