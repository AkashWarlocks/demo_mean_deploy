const mongoose = require('mongoose')
//"mongodb+srv://userDB:user123@bingbot-3awwl.mongodb.net/test?retryWrites=true"
const uri = process.env.MONGODB_ATLAS||"mongodb+srv://userDB:user123@bingbot-3awwl.mongodb.net/test?retryWrites=true; 
const localhost = "mongodb://localhost:27017/dancing_soul"
mongoose.connect(uri, {
    dbName:"dancing_soul",
    useNewUrlParser:true,
    useCreateIndex:true,
    //useFindAndModify:false
})

const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose