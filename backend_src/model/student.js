const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    birthDate:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    workPlace:{
        type:String,
        required:true
    }, 
    image:{
        type:String,
    }, 
    firstGuardianName:{
        type:String,
        required:true
    },
    firstGuardianRelation:{ 
        type:String,
        required:true
    }, 
    secondGuardianName:{
        type:String,
        required:true
    }
    , 
    secondGuardianRelation:{
        type:String,
        required:true
    }, 
    medicalHistory:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    address:{
        type:String,
        required:true
    }, 
    branch:{
        type:String,
        required:true
    }, 
    batch:{
        type:String,
        required:true
    },
     batchName:{
        type:String,
        required:true
    }, 
    status:{
        type:String,
        required:true
    }
})

const Student = mongoose.model('students',studentSchema)

module.exports = Student
