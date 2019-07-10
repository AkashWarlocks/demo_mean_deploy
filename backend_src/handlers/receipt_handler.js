let hObj = {}
const Receipt = require('../model/receipt')

hObj.addReceipt = async(req,res)=>{
    try {
        const receipt = new Receipt(req.body.data)
        await receipt.save()
        res.status(200).send(receipt)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}
hObj.getReceipt = async(req,res)=>{
    try {
        const receipt = await Receipt.findById(req.body.data._id)
        res.status(200).send(receipt)
        
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}
hObj.getReceipts = async(req,res)=>{
    try {
        const receipt = await Receipt.find()
        res.status(200).send(receipt)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

hObj.deleteReceipt = async(req,res)=>{
    try {
        const receipt = Receipt.findByIdAndDelete(req.body.data._id)   
        res.status(200).send(receipt)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)    
    }
}

module.exports = hObj