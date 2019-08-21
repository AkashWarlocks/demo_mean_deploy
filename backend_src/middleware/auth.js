const jwt = require('jsonwebtoken')
const User = require('../model/user')
const hObj = {}
hObj.auth = async (req,res,next)=>{
    try {
        
        const token = await req.header('Authorization').replace('Bearer ','')
        const decoded = await jwt.verify(token,'thedancingsoul')
        console.log('decodedid: ',decoded._id)
        const user = await User.findOne({_id:decoded._id,'tokens.token': token})
        
        if(!user){
            throw new Error()
        }
        console.log(user)
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({error:"Please Authenticate " + error})
    }
}
hObj.forgetPasswordToken = async(req)=>{
    const token = jwt.sign({"email": req.data.email.toString() },"resetPasswordToken")
    return token
    
}

hObj.verifyResetPassword = async(req,res,next)=>{
    try {
        const token = await req.header('Authorization').replace('Bearer ','')
        const decoded = await jwt.verify(token,'resetPasswordToken')
        console.log('decodedid: ',decoded.email)
        const user = await User.findOne({token,resetPasswordToken:token})
        
        if(!user){
            throw new Error()
        }
        
        return decoded.email
    } catch (error) {
        res.status(401).send({error:"Please Authenticate " + error})
        
    }
    
}

module.exports = hObj