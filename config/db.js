const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.localhost);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};


module.exports = connectionDB