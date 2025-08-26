const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  // Configure your email transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shashankshiva6361@gmail.com',
      pass: 'Shashank12@#'
    }
  });

  const mailOptions = {
    from: 'shashankshiva6361@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent succes                                                                                                                                                                                                                                                                                                                                                    sfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendEmail };