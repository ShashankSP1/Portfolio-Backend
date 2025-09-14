const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  // Configure your email transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shashank636123@gmail.com',
      pass: 'ljjz zcec pciy llib'
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  const mailOptions = {
    from: 'shashank636123@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendEmail };
