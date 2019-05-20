require('../db/mongoose')

const Faculty = require('../model/faculty')
const User = require('../model/user')

let hObj = {}

hObj.addFaculty = async (req,res) =>{
    console.log(req.body)
    const faculty = new Faculty(req.body)
    const user = new User({
        "userId":req.body.facultyId,
        "password":req.body.facultyId,
        "userType":"faculty"
    })
    try {
        await faculty.save()   
        await user.save()
        res.status(200).send(user)  
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
   }

hObj.deleteFaculty = async (req,res)=>{
    
    console.log("DEl:",req.body.id)
    await Faculty.findByIdAndDelete(req.body.id).then((data)=>{
        if(data == null){
            return res.status(400).send({
                "status":false,
                "data":data,
                "reason":"Faculty Not Found"
            })    
        }
        res.status(200).send({
            "status":true,
            "data":data
        })
    }).catch((error)=>{
        res.send(error)
    })
}

hObj.editFaculty = async(req,res) =>{
    console.log(req.body)
    await Faculty.findByIdAndUpdate(req.body.id,req.body).then((data)=>{
        if(data == null){
            console.log("tp ",data)
            return res.status(200).send(data)
        }
        res.status(200).send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })
}

hObj.getFaculties = async (req,res)=>{
    await Faculty.find().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
}
module.exports = hObj;