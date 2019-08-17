const jwt = require('jsonwebtoken')
const User = require('../model/user')

const auth = async (req,res,next)=>{
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
const resetPasswordToken = async(req,res)=>{
    token = crypto.randomBytes(32).toString('hex')
    
}

module.exports = auth