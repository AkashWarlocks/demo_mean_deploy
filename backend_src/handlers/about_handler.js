let hObj = {}
const About = require('../model/about')

hObj.getAbout = async(req,res)=>{
    try {
        const about = await About.find()
        res.status(200).send(about)
    } catch (error) {
        res.status(401).send(error)
    }   
}

hObj.editAbout = async(req,res)=>{
    console.log(req.body)
    try {
        const about =  await About.findByIdAndUpdate(req.body.data._id ,req.body.data)
        res.status(200).send(about)
    } catch (error) {
        res.status(401).send(error)
    }
}
module.exports = hObj