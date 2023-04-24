const express = require("express");
const serverless = require('serverless-http');
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
const router = express.Router()
require("dotenv").config();


app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

router.post("/send", function(req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`
  };
  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      res.json({ status: "fail", error: `${err}`})
    } else {
      console.log("Email sent sucessfully");
      res.json({ status: "success"});
    }
  });
});

router.get('/', function(req, res) {
  res.json({msg: 'this is working'})
})

app.use(express.static('build'));

// // Serve the index.html file for all other requests
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


// app.listen(process.env.PORT, ()=> {
//   console.log(`Server is running on port: ${process.env.PORT}`);
// });

app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);