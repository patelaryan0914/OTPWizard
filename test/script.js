const express = require("express");
const app = express();
const otpwizard = require("otpwizard");
require("dotenv").config();
app.use(express.json());

app.post("/sendmail", async (req, res) => {
  const { Otplength, emailInput } = req.body;
  const htmlContent = (otp) => {
    return `<p>Your OTP is: <strong>${otp}</strong></p>`;
  };
  const otp = await otpwizard.sendEmail(Otplength, emailInput, htmlContent);
  console.log("OTP sent:", otp);
  res.json({ msg: "Otp Send", otp });
});
app.post("/verify", async (req, res) => {
  const { otpInput, otp } = req.body;
  const isValid = await otpwizard.verifyOTP(otpInput, otp);
  console.log("OTP verification result:", isValid);
  res.json({ msg: "checked", isValid });
});

app.get("/check", (req, res) => {
  res.json({ msg: "all ohk" });
});
app.listen(6000, () => {
  console.log("Running App on port 6000");
});
