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
    
          var mailOptions = {
            from: 'akashgamer96@gmail.com',
            to: data.Email,
            subject: 'Support: The Dancing Soul Academy',
            text: "Name: "+data.Name+"\nContact: "+data.Contact+"\nEmail: "+data.Email+"\nDescription: "+data.Description+"\n\n\n Thank you for contacting"
          };
    
          const info = await transporter.sendMail(mailOptions)
        
    } catch (error) {
        console.log('Email sent: ' + error);
        
    }
      
}

module.exports = hObj