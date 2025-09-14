const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controller/emailController');

router.post("/send-email", async (req, res) => {
  try {
    console.log("Received email request:", req.body);
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error while sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
