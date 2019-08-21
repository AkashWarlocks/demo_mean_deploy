var nodemailer = require('../../node_modules/nodemailer/lib/nodemailer')
var hObj = {}
hObj.sendEmail = async(data) => {
    console.log('data: ',data)
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akashkulkarni796@gmail.com',
              pass: 'aaouikika'
            }
          });
          
          if (data.function == "newAccount") {

            var mailOptions = {
              from: 'akashgamer96@gmail.com',
              to: data.Email,
              subject: 'Support: The Dancing Soul Academy',
              text: "Name: "+data.Name+"\nContact: "+data.Contact+"\nEmail: "+data.Email+"\nDescription: "+data.Description+"\n\n\n Thank you for contacting"
            };

          } else if (data.req.api == "forgotPassword"){
            var mailOptions = {
              from: 'akashgamer96@gmail.com',
              to: data.req.data.email,
              subject: 'Support: The Dancing Soul Academy',
              text: "Reset Password Link https://ds-backup.herokuapp.com/#/reset_password?"+data.token
            };
          } else if(data.function == "contactUs") {
            var mailOptions = {
              from: 'akashgamer96@gmail.com',
              to: data.Email,
              subject: 'Support: The Dancing Soul Academy',
              text: "Name: "+data.Name+"\nContact: "+data.Contact+"\nEmail: "+data.Email+"\nDescription: "+data.Description+"\n\n\n Thank you for contacting"
            };
          }

          // var mailOptions = {
          //   from: 'akashgamer96@gmail.com',
          //   to: data.Email,
          //   subject: 'Support: The Dancing Soul Academy',
          //   text: "Name: "+data.Name+"\nContact: "+data.Contact+"\nEmail: "+data.Email+"\nDescription: "+data.Description+"\n\n\n Thank you for contacting"
          // };
    
          const info = await transporter.sendMail(mailOptions)
          return info,
        
    } catch (error) {
        console.log('Email sent: ' + error);
        
    }
      
}

module.exports = hObj