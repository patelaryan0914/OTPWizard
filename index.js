const nodemailer = require("nodemailer");

const generateOTP = (length) => {
  const charset = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset[randomIndex];
  }
  return otp;
};

const sendEmail = async (otplength, recipient, htmlContent) => {
  const otp = generateOTP(otplength);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: recipient,
    subject: "Your One-Time Password (OTP)",
    html: htmlContent(otp),
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return otp;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

function verifyOTP(providedOTP, expectedOTP) {
  return providedOTP === expectedOTP;
}

module.exports = { sendEmail, verifyOTP };
