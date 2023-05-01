import bcrypt from "bcrypt"
const hash=async(data)=>{
    const saltRounds=10
    const salt=await bcrypt.genSalt(saltRounds)
    const hashedData=await bcrypt.hash(data,salt)
    return hashedData
}



export {hash}