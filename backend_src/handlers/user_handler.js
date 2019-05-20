let hObj = {}
require('../db/mongoose')
const User = require('../model/user')
hObj.loginUsers = async (req,res) =>{
    try {
        const user = await User.findByCredentials(req.body.userId, req.body.password)
        res.send(user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}
hObj.changePassword = async(req,res)=>{

}
hObj.resetPassword = async(req,res)=>{
    
}

module.exports = hObj