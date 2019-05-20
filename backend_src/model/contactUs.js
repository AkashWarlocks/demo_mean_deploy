const mongoose = require('mongoose')
const validator = require('validator')
const contactSchema = new mongoose.Schema({
    contactName:{
        type:String,
        required:true
    },
    contactEmail:{
        type:String,
        required:true
    },
    contactPhone:{
        type:String,
        required:true
    },
    contactDescription:{
        type:String,
        required:true
    }
})
const Contact = mongoose.model('ContactUs',contactSchema)

module.exports = Contact