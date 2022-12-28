"use strict";
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
require("dotenv").config();

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

let transporter = nodemailer.createTransport({
  // service: "Zoho",
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

const mailOptions = {
  from: "filadelfiasadaniang@gmail.com",
  to: "franssebastian15@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

// const submitForm = (e) => {
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// };
