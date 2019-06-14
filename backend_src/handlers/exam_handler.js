let hObj = {}
const Exams = require('../model/exams')

hObj.getAllExams = async(req,res)=>{
    try {
        const exams = await Exams.find()
        res.status(200).send(exams)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

hObj.getSingleExams = async(req,res)=>{
    try {
        const exams = await Exams.findById(req.body.data._id)
        res.status(200).send(exams)
        
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

hObj.addExams = async(req,res)=>{
    console.log(req.body)
    try {
        const exams =new Exams(req.body.data)
        await exams.save()
        res.status(200).send(exams)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    }
}
hObj.editExams = async(req,res)=>{
    try {
        const exams = Exams.findByIdAndUpdate(req.body.data._id,req.body.data)
        res.status(200).send(exams)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    }
}
hObj.deleteExams = async(req,res)=>{
    
   try {
        const exams = Exams.findByIdAndDelete(req.body.data._id)   
        res.status(200).send(exams)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    } 
}

module.exports = hObj