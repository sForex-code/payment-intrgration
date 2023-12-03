import { app } from "./app.js";
import Razorpay from "razorpay"
import { config } from "dotenv";
import razorpay from "razorpay";


config({
    path:"./config/config.env"
})



export const instance= new Razorpay({
    key_id: process.env.API_KEY,
    key_secret: process.env.SECRET_KRY,
})


app.listen(process.env.PORT,()=>console.log("server is workin on 4000"))