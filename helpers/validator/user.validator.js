const passwordValidation=(password)=>{
    if(password==undefined)
        throw new Error("Password is required")
    if(!/^.{8,}$/.test(password))
        throw new Error("Password must be 8 character or more")
    if(!/(?=.*[a-z])/.test(password))
        throw new Error('Password must include a lowercase letter')
    if(!/(?=.*[A-Z])/.test(password))
        throw new Error('Password must include an uppercase letter')
    if(!/(?=.*[0-9])/.test(password))
        throw new Error('Password must include a number')
    if(!/(?=.*[!@#$%^&*-+=])/.test(password))
        throw new Error('Password must include a special character !@#$%^&*-+=')    
}
const emailValidation=(email)=>{
    if(email==undefined)
        throw new Error("Email is required")
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
        throw new Error("Enter a valid email like example@example.com")
}
const nameValidation=(name,nameStr)=>{
    if(name==undefined)
        throw new Error(`${nameStr} is required`)
    if(!/^.{2,}$/.test(name))
        throw new Error(`${nameStr} must be 2 characters or more`)
    if(!/^.[a-zA-Z]*$/.test(name))
        throw new Error(`${nameStr} must consist of letters only`)
}






export default  {passwordValidation,emailValidation,nameValidation}