import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary store OTPs in memory
const otpStore = {};

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000); // 6 digit
}

// Request OTP
app.post("/send-otp", (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: "Phone number required" });

  const otp = generateOtp();
  otpStore[phone] = otp;

  console.log(`📱 OTP for ${phone} is: ${otp}`); // shows in terminal

  res.json({ success: true, message: "OTP sent successfully" });
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] && otpStore[phone] == otp) {
    delete otpStore[phone];
    return res.json({ success: true, message: "OTP verified" });
  }

  res.status(400).json({ success: false, message: "Invalid OTP" });
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
