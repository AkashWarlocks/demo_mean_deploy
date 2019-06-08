let hObj = {}
const Student = require('../model/student')
const User = require('../model/user')

hObj.getStudents = async (req,res)=>{
    console.log("in get students")
    try {
        const students = await Student.find()
        if(!students){
            res.send({
                "message":"No student Available"
            })
        }
        res.status(200).send(students)

    } catch (error) {
        res.status(400).send({
            "error":error
        })

    }
}

hObj.getStudent = async(req,res) =>{
    try {
        const student = await Student.findById(req.body._id)
        res.status(200).send(student)

    } catch (error) {
        res.status(401).send(error)
    }
}

hObj.changeStatus = async(req,res)=>{
    try {
        const student = await Student.findById(req.body.data._id,{status:req.body.data.status})
        req.status(200).send(student)
    } catch (error) {
        req.status(401).send(error)        
    }
}

hObj.addStudent = async(req,res)=>{
    try {
        const student = new Student(req.body.data)
        const user = new User({
            "email":req.body.data.email,
            "password":req.body.data.phone,
            "userType":"student"
        })
        await student.save()
        await user.save()
        res.status(200).send(student)   
    } catch (error) {
        res.status(401).send(error)
    }
}

hObj.editStudent = async(req,res)=>{
    try {
        const student = await Student.findByIdAndUpdate(req.body.data._id,req.body.data)
        res.status(200).send(student)
    } catch (error) {
        res.status(401).send(error)
    }
}
module.exports = hObj