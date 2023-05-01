import config from "./../config/config"
import app from "./express"
import mongoose from "mongoose"
const port = config.port;
const mongoUri=config.mongoUri
mongoose.connect(mongoUri);
mongoose.connection.on('error',()=> {throw new Error('unable to connect to database')})
app.listen(port, (err) => err ? console.log(err) : console.log(`server run on port ${port}`))
