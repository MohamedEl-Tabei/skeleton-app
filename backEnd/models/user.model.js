const userSchema = {
    Fname: {
        type: String,
        trim: true,
        required:true
    },
    Lname: {
        type: String,
        trim: true,
        required:true

    },
    Email: {
        type: String,
        trim: true,
        required:true,
        index:{unique:true,background:true},
    },
    Created_time: {
        type: Date,
        default: Date.now()
    },
    Updated_time: {
        type: Date
    },
    Hashed_password: {
        type: String,
    },
}
import mongoose from "mongoose";
import userMiddleware from "../middlewares/user.middleware";
const UserSchema = new mongoose.Schema(userSchema)
UserSchema.virtual("Password")
UserSchema.pre("save",userMiddleware.dataHandlerMiddleware)
export default mongoose.model("User", UserSchema)
