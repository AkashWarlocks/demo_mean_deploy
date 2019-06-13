let hObj = {}
const News = require('../model/news')

hObj.getAllNews = async(req,res)=>{
    try {
        const news = await News.find()
        res.status(200).send(news)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

hObj.getSingleNews = async(req,res)=>{
    try {
        const news = await News.findById(req.body.data._id)
        res.status(200).send(news)
        
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

hObj.addNews = async(req,res)=>{
    try {
        const news =new News(req.body.data)
        res.status(200).send(news)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    }
}
hObj.editNews = async(req,res)=>{
    try {
        const news = News.findByIdAndUpdate(req.body.data._id,req.body.data)
        res.status(200).send(news)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    }
}
hObj.deleteNews = async(req,res)=>{
    
   try {
        const news = News.findByIdAndDelete(req.body.data._id)   
        res.status(200).send(news)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    } 
}

module.exports = hObj