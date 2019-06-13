require('../db/mongoose')
const Contact = require('../model/contactUs')
var nodemailer = require('../../node_modules/nodemailer/lib/nodemailer')
const email = require('../handlers/email_handler')
let hObj = {}


// function sendEmail (data) {
    
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'akashkulkarni796@gmail.com',
//           pass: 'aaouikika'
//         }
//       });
//       var mailOptions = {
//         from: 'akashgamer96@gmail.com',
//         to: data.body.data.Email,
//         subject: 'Support: The Dancing Soul Academy',
//         text: "Name: "+data.body.data.Name+"\nContact: "+data.body.data.Contact+"\nEmail: "+data.body.data.Email+"\nDescription: "+data.body.data.Description+"\n\n\n Thank you for contacting"
//       };
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {  
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
      

// }

hObj.contactUs = async (req,res)=>{
    try {
    const contact = new Contact(req.body.data)
    const contactInfo = await contact.save()
    email.sendEmail(req.body.data) 
    res.status(200).send(contactInfo)
      
    } catch (error) {
      console.log(error)
    } 
}

module.exports = hObj