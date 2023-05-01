import User from "../models/user.model"
import errHandeler from "../../helpers/util/errorHandler"
const insensitiveFields = "Fname Lname Email Created_time Updated_time"
const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(200).json({ message: "Signed up successfully" })
    } catch (error) {
        return res.status(400).json({ message: errHandeler.getErrorMessage(error) })
    }
}
const listUsers = async (req, res) => {
    try {
        const users = await User.find().select(insensitiveFields)
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: errHandeler.getErrorMessage(error) })
    }
}
const readUser=(req,res)=>{
    req.user.Hashed_password= undefined
    res.status(200).json(req.user)
}
const updateUser= async(req,res)=>{
    try {
        req.user.Updated_time=Date.now()
        let user=Object.assign(req.user,req.body)
        await user.save()
        user.Hashed_password=undefined
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message:errHandeler.getErrorMessage(error)})
    }
}
const deleteUser=async (req,res)=>{
    const user=req.user
    const deletedUser=await user.deleteOne()
    res.status(200).json({message:`${deletedUser.Fname} ${deletedUser.Lname}'s profile deleted`})
}
export default { createUser, listUsers ,readUser,updateUser ,deleteUser}