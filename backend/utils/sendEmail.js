// utils/sendEmail.js

const nodemailer = require('nodemailer');

const sendEmail = async (send_to, sent_from, subject, formData) => {
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
        <h2>New Quote Request</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Company Name:</strong> ${formData.companyName}</p>
        <p><strong>Email Address:</strong> ${formData.email}</p>
        <p><strong>Phone Number:</strong> ${formData.phone}</p>
        <p><strong>Shipping Origin:</strong> ${formData.shippingOrigin}</p>
        <p><strong>Shipping Destination:</strong> ${formData.shippingDestination}</p>
        <p><strong>Shipment Type:</strong> ${formData.shipmentType}</p>
        <p><strong>Cargo Description:</strong> ${formData.cargoDescription}</p>
        <p><strong>Contact Method:</strong> ${formData.contactMethod}</p>
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

module.exports = sendEmail;
