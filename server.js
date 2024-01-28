import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db";
import { errorResponseHandler, invalidRouteHandler } from "./middleware/errorHandler.js";
//Routes
import userRoutes from "./routes/userRoutes.js";    





dotenv.config();
connectDB();




const app = express();
app.use(express.json());


app.get("/",(req,res) => {
    res.send("Server is Running")
});
app.use('/api/users',userRoutes);
app.use(invalidRouteHandler);
app.use(errorResponseHandler)

app.listen(process.env.PORT,() => {
    console.log(`Server is Running On Port ${process.env.PORT}`);

})
