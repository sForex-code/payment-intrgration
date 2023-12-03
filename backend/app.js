import express from "express";
import cors from "cors"
import paymentRouter from "./routes/payments.js"

export const app=express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api",paymentRouter)

