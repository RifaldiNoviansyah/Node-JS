const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const {email, pass} = process.env; //untuk mengakes file .env
const app=express();
    
app.post('/send',function(req,res){
    
    // set random password otp
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service : 'Gmail',        
        auth: {
          user: 'whitecopy43@gmail.com',
          pass: '!noWyouS3m#',
        }
        
    });

    // send mail with defined transport object
    const mailOptions={
       from : email,
       to: "rifaldinoviansyah11@gmail.com",
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  
             + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})