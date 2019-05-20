const express = require('../../node_modules/express')
router = express()

let branchHandler = require('../handlers/branch_handler')
let facultyHandler = require('../handlers/faculty_handler')
let contactUsHandler = require('../handlers/contactUs_handler')
let userHandler = require('../handlers/user_handler')

router.post('/addBranches', (req,res)=>{
    console.log("in add branch")
    branchHandler.addBranch(req,res);
})

router.post('/addFaculty', (req,res) => {
    facultyHandler.addFaculty(req,res)
})

router.post('/deleteBranch', (req,res)=>{
    branchHandler.deleteBranch(req,res)
})

router.post('/deleteFaculty', (req,res)=>{
    facultyHandler.deleteFaculty(req,res)
})

router.post('/editFaculty', (req,res)=>{
    console.log("inside route - edit faculty")
    facultyHandler.editFaculty(req,res)
})

router.post('/editBranch', (req,res)=>{
    branchHandler.editBranch(req,res)
})

router.post('/contactUs', (req,res)=>{
    contactUsHandler.contactUs(req,res)
})

router.get('/getBranches',(req,res)=>{
    branchHandler.getBranches(req,res)
} )

router.get('/getFaculties',(req,res)=>{
    facultyHandler.getFaculties(req,res)
})

router.post('/getBranch',(req,res)=>{
    branchHandler.getBranch(req,res)
})

router.post('/login/users',(req,res)=>{
    userHandler.loginUsers(req,res)
})

module.exports = router