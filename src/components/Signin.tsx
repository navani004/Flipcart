
import PhoneInput from 'react-phone-input-2';
import home from '../images/home.jpg';
import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "@tanstack/react-router"; // 👈 import

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate(); // 👈 create navigate hook

  const requestOtp = async () => {
    const res = await fetch("http://localhost:5000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (data.success) {
      setOtpSent(true);
    }
  };

  const verifyOtp = async () => {
    const res = await fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });
    const data = await res.json();
    if (data.success) {
      alert("✅ OTP Verified");
      navigate({ to: "/" }); // 👈 Go to Home page after success
    } else {
      alert("❌ Invalid OTP");
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left side */}
      <div className="bg-blue-600 h-full w-full p-16 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-white font-semibold text-3xl">Login</h1>
          <h1 className="text-gray-200 pt-5 text-lg">
            Get access to your Order, Wishlist and <br />Recommendations
          </h1>
        </div>
        <img src={home} alt="home" className="w-80 mb-6" />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center h-full">
        <div className="w-[510px]">
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={phone => setPhone(phone)}
            inputStyle={{ width: '100%' }}
            placeholder='Enter Mobile Number'
          />
          <h1 className='text-gray-500 text-sm mt-9'>
            By continuing, you agree to Flipkart's 
            <span className='text-blue-700'> Terms of Use</span> and 
            <span className='text-blue-700'> Privacy Policy.</span>
          </h1>

          {!otpSent ? (
            <button 
              onClick={requestOtp} 
              className="bg-orange-500 w-full mt-5 text-white font-bold py-2 px-4"
            >
              Request OTP
            </button>
          ) : (
            <div className="mt-5">
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="border p-2 w-full"
              />
              <button 
                onClick={verifyOtp} 
                className="bg-orange-500 w-full mt-3 text-white font-bold py-2 px-4"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
