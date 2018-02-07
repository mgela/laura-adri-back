'use strict';


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



exports.boda = async (req, res) => {

  const msg = {
    to: 'lauraiadri1@gmail.com',
    from: 'rsvp@lauraiadri.com',
    subject: `${req.body.nom} vindrà amb: ${req.body.acompanyant}`,
    html: ' ',
  }
  
   try{
     sgMail.send(msg);

     res.sendStatus(200);
   } catch (e){
     res.sendStatus(500);
   }
}
