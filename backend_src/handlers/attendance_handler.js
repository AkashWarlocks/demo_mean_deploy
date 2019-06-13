let hObj = {}
const Attendance = require('../model/attendance')
hObj.saveAttendance = async (req,res)=>{
    console.log(req.body)
    try {
        const attendance = new Attendance(req.body.data)
        await attendance.save()
        res.status(200).send(attendance)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)   
    }
}
module.exports = hObj