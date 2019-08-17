const express = require('../../node_modules/express')
const auth = require('../middleware/auth')
const router = new express.Router()
const User = require('../model/user')
var bodyParser = require('../../node_modules/body-parser')
let branchHandler = require('../handlers/branch_handler')
let facultyHandler = require('../handlers/faculty_handler')
let contactUsHandler = require('../handlers/contactUs_handler')
let userHandler = require('../handlers/user_handler')
let studentHandler = require('../handlers/student_handler')
let aboutUsHandler = require('../handlers/about_handler')
let examsHandler = require('../handlers/exam_handler')
let newsHandler = require('../handlers/news_handler')
let attendanceHandler = require('../handlers/attendance_handler')
let receiptHandler = require('../handlers/receipt_handler')    

router.get('/getUsers',auth,async (req,res)=>{
        
        try {
                const user = await User.find({})
                res.send(user)
            } catch (error) {
                console.log(error)
                res.status(400).send()
            }
        // userHandler.getUsers(req,res)
})

router.post('/dancingSoul',auth,(req,res) => {
        const api = req.body.api
        console.log(api)
    switch(api){
    
        case "addBranch":
                branchHandler.addBranch(req,res);
                break;
        case "addFaculty":
                facultyHandler.addFaculty(req,res);
                break;
        case "getFaculties":
                facultyHandler.getFaculties(req,res);
                break;
        case "getFaculty":
                facultyHandler.getFaculty(req,res);
                break;
        case "getBranch":
                branchHandler.getBranch(req,res);
                break;
        case "getBranches":
                branchHandler.getBranches(req,res);
                break;
        case "login":
                userHandler.loginUsers(req,res);
                break
        case "getUsers":
                userHandler.getUsers(req,res);
                break
        case "editStudent":
                studentHandler.editStudent(req,res);
                break
        case "getStudent":
                studentHandler.getStudent(req,res)
                break
        case "getStudents":
                studentHandler.getStudents(req,res)
                break
        case "addStudent":
                studentHandler.addStudent(req,res)
                break
        case "changeStatus":
                studentHandler.changeStatus(req,res)
                break
        case "getAbout":
                aboutUsHandler.getAbout(req,res)
                break;
        case "editAbout":
                console.log("in get about switch")
                aboutUsHandler.editAbout(req,res)
                break;
        case "addUsers":
                userHandler.addUsers(req,res)
                break;   
        case "contactUs":
                contactUsHandler.contactUs(req,res)
                break;
        case "getAllNews":
                newsHandler.getAllNews(req,res)
                break
        case "getNews":
                newsHandler.getSingleNews(req,res)
                break;
        case "deleteNews":
                newsHandler.deleteNews(req,res)
                break;
        case "editNews":
                newsHandler.editNews(req,res)
                break;
        case "addNews":
                newsHandler.addNews(req,res)
                break;
        case "getExams":
                examsHandler.getAllExams(req,res)
                break
        case "getExam":
                examsHandler.getSingleExams(req,res)
                break
        case "deleteExam":
                examsHandler.deleteExams(req,res)
                break
        case "addExam":
                examsHandler.addExams(req,res)
                break   
        case "saveAttendance":
                attendanceHandler.saveAttendance(req,res)
                break
        case "addReceipt":
                receiptHandler.addReceipt(req,res)
                break;
        case"getReceipt":
                receiptHandler.getReceipt(req,res)
                break;
        case "getReceipts":
                receiptHandler.getReceipts(req,res)
                break;
        case "deleteReceipt":
                receiptHandler.deleteReceipt(req,res)
                break; 
        case "changePassword":
                userHandler.changePassword(req,res) 
                break;                           
        default:
            res.status(400).send({
                "type":"wrong api"
            })
        
    }

})
router.post('/addBranch',auth, (req,res)=>{
    console.log("in add branch")
    branchHandler.addBranch(req,res);
})

// router.post('/addFaculty', (req,res) => {
//     facultyHandler.addFaculty(req,res)
// })

// router.post('/deleteBranch', (req,res)=>{
//     branchHandler.deleteBranch(req,res)
// })

// router.post('/deleteFaculty', (req,res)=>{
//     facultyHandler.deleteFaculty(req,res)
// })

// router.post('/editFaculty', (req,res)=>{
//     console.log("inside route - edit faculty")
//     facultyHandler.editFaculty(req,res)
// })

// router.post('/editBranch', (req,res)=>{
//     branchHandler.editBranch(req,res)
// })

// router.post('/contactUs', (req,res)=>{
//     contactUsHandler.contactUs(req,res)
// })

// router.get('/getBranches',(req,res)=>{
//     branchHandler.getBranches(req,res)
// } )

// router.get('/getFaculties',(req,res)=>{
//     facultyHandler.getFaculties(req,res)
// })

// router.post('/getBranch',(req,res)=>{
//     branchHandler.getBranch(req,res)
// })

// router.post('/login/users',(req,res)=>{
//     userHandler.loginUsers(req,res)
// })

module.exports = router