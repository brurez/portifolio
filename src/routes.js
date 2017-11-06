import { Router } from 'express';
import sgMail from '@sendgrid/mail';

import config from './config/index'

sgMail.setApiKey(config.sendGridApiKey);
const routes = Router();

routes.get('/', (req, res) => {
  res.render('index', { dev: process.env.NODE_ENV !== 'production' });
});

routes.post('/api/send_email', (req, res) => {
  const { name, from, phone, msg } = req.body;
  const email = {
    to: config.myEmail,
    from,
    subject: "Portifolio Brurez - Mensagem de " + name,
    text: `
      ${msg}
      Nome: ${name}
      Telefone: ${phone}
      Email: ${from}
    `,
    html: `
      <p>${formatHtml(msg)}<p>
      <p>Nome: ${name} <br/>
      Telefone: ${phone} <br/>
      Email: ${from}</p>
    `
  };
  sgMail.send(email).then( () => {
    res.send({err: null});
  }).catch( err => {
    console.log(err);
    res.send({err: err.message});
  });

  function formatHtml(str){
    let result = str.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
    return result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
  }
});

export default routes;