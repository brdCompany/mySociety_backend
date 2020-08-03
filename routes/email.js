const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rajdeep.dutta.5007@gmail.com',
      pass: 'Zaq12wsx*@',
    },
  });

  let info = await transporter.sendMail({
    from: '"FM Team My-Society" <rajdeep.dutta.5007@gmail.com>', // sender address
    to: req.body.recipients,
    subject: req.body.subject,
    text: req.body.body,
    html: '',
    attachments: req.body.files,
  });

  res.status(200).json({ success: 'true', msg: 'Email sent' });
});

module.exports = router;
