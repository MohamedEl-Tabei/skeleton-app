import cookieParser from "cookie-parser"
import helmet from "helmet"
import compression from "compression"
import cors from "cors"
import userRoute from "./routes/user.route"
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded()) 
app.use(cookieParser())
app.use(helmet())
app.use(compression())   
app.use(cors()) 
app.use("/",userRoute)
import Tem from "../template.html"
app.get('/',(req,res)=>{res.send(Tem())})

export default app; 