const mongoose = require('mongoose')
const validator = require('validator')
const contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})
const Contact = mongoose.model('contactUs',contactSchema)

module.exports = Contact