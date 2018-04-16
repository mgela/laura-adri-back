'use strict';


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



exports.boda = async (req, res) => {

  if (req.body.acompanyant) {
    try{
      const msg = {
        to: 'lauraiadri1@gmail.com',
        from: 'rsvp@lauraiadri.com',
        subject: `${req.body.nom} vindrà amb: ${req.body.nomAcompanyant} i bus: ${req.body.bus}, alergies: ${req.body.alergies}`,
        html: ' ',
      }
      sgMail.send(msg);
      res.sendStatus(200);
    } catch (e){
      res.sendStatus(500);
    }
  } else {
    const msgNo = {
      to: 'lauraiadri1@gmail.com',
      from: 'rsvp@lauraiadri.com',
      subject: `${req.body.nom} vindrà SOL i bus: ${req.body.bus}`,
      html: ' ',
    }
    try{
      sgMail.send(msgNo);
      res.sendStatus(200);
    } catch (e){
      res.sendStatus(500);
    }
  }
}
