const mongoose = require('mongoose')
const validator = require('validator')

const City = mongoose.model('City',{
    CityName:{
        type:String,
        required:true
    },
    CityState:{
        type:String,
        required:true
    },
    CityCountry:{
        type:String,
        required:true
    }
})

module.exports = City