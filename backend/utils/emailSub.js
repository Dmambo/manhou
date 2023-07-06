const nodemailer = require('nodemailer');

const emailSub = async (send_to, sent_from, subject, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: '587',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: sent_from,
      to: send_to,
      subject: subject,
      html: `
        <h2>New Email list subscriber</h2>
        <p><strong>Email Address:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent');
    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }
};

module.exports = emailSub;
