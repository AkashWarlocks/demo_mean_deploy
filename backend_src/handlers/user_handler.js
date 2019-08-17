let hObj = {}
const auth = require('../middleware/auth')
require('../db/mongoose')
const User = require('../model/user')
const Student = require('../model/student')
const Faculty = require('../model/faculty')
const bcrypt = require('bcryptjs')


hObj.loginUsers = async (req,res) =>{
    console.log(req.body.data)
    try {
        const user = await User.findByCredentials(req.body.data.email, req.body.data.password)
        const token = await user.generateAuthToken()
        if(user.userType === 'student'){
            const student = await Student.findOne({email:user.email})
            return res.send({user, token, student})    
        } else if(user.userType === 'faculty'){
            const faculty = await Faculty.findOne({email:user.email})
            return res.send({user, token, faculty})    

        }
        res.send({user, token})

    } catch (e) {
        console.log('HI in catch')
        console.log(e)
        res.status(400).send(e)
    }
}
hObj.getUsers = auth, async(req,res)=>{
    try {
        const user = await User.find({})
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
}
hObj.changePassword = async(req,res)=>{
    const updates = Object.keys(req.body.data)
    const allowedUpdates = ['password']
    const isValid = updates.every((update)=>allowedUpdates.includes(updates))

    // if(!isValid) {
    //     return res.status(400).send({"error":"invalid updates"})
    // }
    
    console.log('in here')
    try {
        const user = await User.findByCredentials(req.body.data.email, req.body.data.password)
        console.log (user)
        if(!user){
            console.log('here')
            res.status(401).send({error:"error"})
        }

        user.password = req.body.data.newPassword
        user.save()

        
        res.status(200).send(user)       
    } catch (error) {
        res.status(401).send(error)
}
}
hObj.resetPassword = async(req,res)=>{


}

hObj.addUsers = async(req,res)=>{
    try {
        const user = new User({
            "email":req.body.data.email,
            "password":req.body.data.password,
            "userType":"admin"
        })
        await user.save()
        res.status(200).send(user)

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = hObj