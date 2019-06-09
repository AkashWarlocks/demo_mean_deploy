let hObj = {}
const auth = require('../middleware/auth')
require('../db/mongoose')
const User = require('../model/user')

hObj.loginUsers = async (req,res) =>{
    console.log(req.body.data)
    try {
        const user = await User.findByCredentials(req.body.data.email, req.body.data.password)
        const token = await user.generateAuthToken()
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

}
hObj.resetPassword = async(req,res)=>{
    
}

hObj.addUsers = async(req,res)=>{
    try {
        const user = new User({
            "email":req.body.data.email,
            "password":req.body.data.phone,
            "userType":"student"
        })
        await user.save()
        res.status(200).send(user)

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = hObj