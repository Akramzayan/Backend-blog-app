import mongoose from "mongoose";
import dotenv from "dotenv";
const ConnectDb = async() => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
}

export default ConnectDb;