// src/backend/services/mailService.ts
import nodemailer from 'nodemailer'; // Ensure this is imported at the top

// Exporting sendEmail function
export const sendEmail = async (
  recipientEmail: string,
  subject: string,
  message: string
) => {
  // Create a transporter object using Mailpit's SMTP server
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025, // Mailpit's SMTP port
    secure: false, // Mailpit does not require SSL
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'no-reply@example.com', // Simulated sender email
    to: recipientEmail, // Recipient email
    subject: subject, // Email subject
    text: message // Plain text message
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Exporting saveContactMessage function
export const saveContactMessage = async (
  name: string,
  email: string,
  message: string
) => {
  const subject = `Contact from ${name}`; // Define your subject line
  return await sendEmail(email, subject, message);
};
