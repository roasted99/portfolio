const express = require("express");
const serverless = require('serverless-http');
const nodemailer = require("nodemailer");
const cors = require("cors");


const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    access_type: 'offline',
    prompt: 'consent'
  }
});

transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`=== Server is ready to take message: ${success}`)
});

app.post("/send", function(req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`
  };
  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      res.json({ status: "fail"})
    } else {
      console.log("Email sent sucessfully");
      res.json({ status: "success"});
    }
  });
});


app.listen(process.env.PORT, ()=> {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

// app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);