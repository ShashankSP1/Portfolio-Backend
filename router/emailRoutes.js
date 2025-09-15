const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
// const { sendEmail } = require('../controller/emailController');

router.post("/send-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ Server is ready to take messages");

    const { to, subject, text } = req.body;

    // 3️⃣ Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    // console.log("Received email request:", req.body);
    // let info = await transporter.sendMail(mailOptions);
    // console.log("Email sent:", info.response);

    console.log("Message sent: %s", info.messageId);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error while sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
