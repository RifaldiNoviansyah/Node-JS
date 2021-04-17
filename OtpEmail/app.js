const express=require('express');
const nodemailer=require('nodemailer');
const smtpTransport = require(`nodemailer-smtp-transport`);

const app=express();
    
app.post('/send',function(req,res){
    
    // set random password otp
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);


      const transporter = nodemailer.createTransport(smtpTransport({
        service: `gmail`,
        host: `smtp.gmail.com`,
        auth: {
          user: 'email@gmail.com',
          pass: 'pasword'
        }
      }));

    // send mail with defined transport object
    const mailOptions={
       from : 'youreemail',
       to: "the intended email",
       subject: "Otp for registration is: ",
       text: 'That was easy!'  // html body
     };
     
     transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ` + info.response);
        }
      });

});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})