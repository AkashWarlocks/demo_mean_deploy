require('../db/mongoose')
const Branch = require('../model/branches')
let hObj = {}
hObj.addBranch = async (req,res) => {
    console.log("add branch body ",req.body)

    const branch = new Branch(req.body)

    await branch.save().then((branchD)=>{
        
        res.status(200).send({
            "status":true,
            "msg":"branch added now  succesfully",
            "body":branchD
        
        })
    }).catch((error)=>{
        console.log('error: ',error)
        res.status(400).send({
            "status":false,
            "msg":"Operation not successful",
            "body":error

        })
    })

}

hObj.deleteBranch = async (req,res)=>{
    console.log(req.body)

    await Branch.findByIdAndDelete(req.body.id).then((data)=>{
        console.log(req.body)
        if(data == null){
           return res.status(200).send({
                "status":false,
                "data":"branch not found"
            })
        }
        res.status(200).send({
            "status":true,
            "data":data
        })
    }).catch((error)=>{
        res.status(400).send({
            "status":false,
            "error":error
        })
    })
    
}

hObj.editBranch = async (req,res) =>{
    await Branch.findByIdAndUpdate(req.body.id,req.body).then((data)=>{
        if(data == null){
            return res.status(200).send(data)
        }
        res.status(200).send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })
}
hObj.getBranch = async(req,res)=>{
    await Branch.findById(req.body.id).then((data)=>{
        return res.send(data)

    }).catch((error)=>{
        res.send(error)
    })
}
hObj.getBranches = async(req,res)=>{
    await Branch.find().then((data)=>{
        if(data == null) {
            return res.status(200).send({
                "status":false,
                "data":"branch not found"
            })
        }
        res.status(200).send(data)
    }).catch((e)=>{
        res.status(400).send({
            "status":false,
            "error":error
        })
    }) 
}

module.exports = hObj