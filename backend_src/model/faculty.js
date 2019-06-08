const mongoose = require('mongoose')
const validator = require('validator')
const facultySchema = new mongoose.Schema({
    
    facultyName:{
        type:String,
        required:true
    },

    facultyDescription:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true
    },
    
    facultyPhone:{
        type:String,
        required:true,
        default:null
    },
    facultyBirthDate:{
        type:String,
        required:true
    },
    facultyStatus:{
        type:String,
        required:true
    }

})
const Faculty = mongoose.model('Faculties',facultySchema)

module.exports = Faculty