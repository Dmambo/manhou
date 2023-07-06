// server.js

const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const sendEmail = require('./utils/sendEmail');
const emailSub = require('./utils/emailSub');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.get('/', (req, res) => {
  res.send('home page');
});



app.post('/api/sendemail', async (req, res) => {
  const formData = req.body;

  try {
    const send_to = 'manhouimportexport@outlook.com';
    const sent_from = process.env.EMAIL_USER;
    const subject = 'New Quote Request';

    await sendEmail(send_to, sent_from, subject, formData); // Pass formData directly

    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Something went wrong. Try again later.' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body; // Extract the email address from the request body

  try {
    const send_to = 'manhouimportexport@outlook.com';
    const sent_from = process.env.EMAIL_USER;
    const subject = 'New Email list subscriber';

    await emailSub(send_to, sent_from, subject, email); // Pass email address directly

    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Something went wrong. Try again later.' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
