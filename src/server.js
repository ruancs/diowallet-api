import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js"
import { connectDb } from "./config/database.js";


const app = express();

connectDb();
app.use(json())
app.use(authRouter)
app.use(transactionRouter)

const port  = process.env.PORT
app.listen(port, ()=> 
    console.log(`serve ON FIRE 🔥 in port ${port}`)
);