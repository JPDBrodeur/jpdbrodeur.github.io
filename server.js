// https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m

const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: `"${req.body.formState.name}" <${req.body.formState.email}>`,
    to: process.env.EMAIL,
    subject: `${req.body.formState.name} sent you a message via your Contact Page`,
    html: `<p style="font-size: medium">${req.body.formState.message}<br><br><b><a href='mailto:${req.body.formState.email}'>📝 Reply to ${req.body.formState.name}</a></b></p>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({ status: "fail", });
    } else {
      console.log("== Message Sent ==");
      res.json({ status: "success" });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});