'use strict';
const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');






  const sgMail = require('@sendgrid/mail');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);






exports.boda = async (req, res) => {
  const msg = {
    to: 'lauraiadri1@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  
   try{
     sgMail.send(msg);

     res.sendStatus(200);
   } catch (e){
     res.sendStatus(500);
   }
}
