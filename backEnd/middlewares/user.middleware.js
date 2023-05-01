import { hash } from "../../helpers/util/encryptAndDecryptData"
import validator from "../../helpers/validator/user.validator"
import mongoose from "mongoose"
import errorHandler from "../../helpers/util/errorHandler"
const dataHandlerMiddleware = async function () {
    const user = await this
    validator.emailValidation(user.Email)
    validator.nameValidation(user.Fname, "First name")
    validator.nameValidation(user.Lname, "Last name")
    user.Email = user.Email.toLowerCase()
    user.Fname = user.Fname.toLowerCase()
    user.Lname = user.Lname.toLowerCase()
    const userWithSameEmail=await mongoose.model("User").findOne({ Email: user.Email })
    if (user.isNew && userWithSameEmail) {
        throw new Error(`${user.Email} is used`)
    }
    if (user.isModified && userWithSameEmail && userWithSameEmail._id!=user.id) {
        throw new Error(`${user.Email} is used`)
    }
    if(user.isNew || user.Password!=undefined){
        validator.passwordValidation(user.Password)
        user.Hashed_password = await hash(user.Password)
    }
}
const userByIdParam = async (req, res, nxt, id) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            throw new Error("Looks like you've followed a broken link")
        }
        const user= await mongoose.model("User").findById(id)
        if(!user)
        {
            throw new Error("User not found")
        }
        
        req.user=user
        await nxt()
    } catch (error) {
        res.status(404).json({message:errorHandler.getErrorMessage(error)})        
    }
}

export default { dataHandlerMiddleware, userByIdParam }