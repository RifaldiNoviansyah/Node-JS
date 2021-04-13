const express=require('express');
const app=express();
const QRCode = require('qrcode');
const send = require('response-error')

app.get('/qrcode', async (req, res) => {
    try {
      const Link = 'https://github.com/RifaldiNoviansyah/NodeJS';
      await QRCode.toFile('./images/github_rifaldi.png', Link);
      send(res, 201);    
    } catch (err) {
      send(res, 400);
      console.error(err);
    }
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})