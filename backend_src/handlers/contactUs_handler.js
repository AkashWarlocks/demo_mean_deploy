require('../db/mongoose')
const Contact = require('../model/contactUs')
var nodemailer = require('../../node_modules/nodemailer/lib/nodemailer')
let hObj = {}


function sendEmail (data) {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'akashkulkarni796@gmail.com',
          pass: 'aaouikika'
        }
      });
      var mailOptions = {
        from: 'akashgamer96@gmail.com',
        to: data.body.data.Email,
        subject: 'Support: The Dancing Soul Academy',
        text: "Name: "+data.body.data.Name+"\nContact: "+data.body.data.Contact+"\nEmail: "+data.body.data.Email+"\nDescription: "+data.body.data.Description+"\n\n\n Thank you for contacting"
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
           
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      

}

hObj.contactUs = async (req,res)=>{

    const contact = new Contact(req.body)

    await contact.save().then((data)=>{
        sendEmail(req) 
        res.status(200).send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })
}

module.exports = hObj