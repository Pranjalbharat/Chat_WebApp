import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app=express();
const PORT=process.env.PORT || 3000;

dotenv.config();

// app.get("/",(req,res)=>{
//     //root route //https://localhost:3000/
//     res.send("Hello World !!");
// });

app.use(express.json());

app.use("/api/auth",authRoutes);


app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});