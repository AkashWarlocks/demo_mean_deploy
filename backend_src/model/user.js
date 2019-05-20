const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
})

userSchema.statics.findByCredentials = async (userId, password) => {
    const user = await User.findOne({ userId })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


const User = mongoose.model('users',userSchema)

module.exports = User