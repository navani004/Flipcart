import PhoneInput from 'react-phone-input-2';
import home from '../images/home.jpg';
import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "@tanstack/react-router";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const requestOtp = async () => {
    if (!phone) return alert("Please enter your phone number");
    const res = await fetch("http://localhost:5000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (data.success) setOtpSent(true);
  };

  const verifyOtp = async () => {
    if (!otp) return alert("Please enter OTP");
    const res = await fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });

    const data = await res.json();
    if (data.success) {
      alert(" OTP Verified");

      localStorage.setItem("signedIn", "true");

      window.dispatchEvent(new Event("authChange"));

      navigate({ to: "/" });
    } else {
      alert(" Invalid OTP");
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen font-sans">
      <div className="relative flex flex-col justify-center items-center p-16 bg-gradient-to-tr from-purple-700 via-blue-600 to-blue-400 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>

        <div className="text-center z-10">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">
            Welcome Back!
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-md mx-auto">
            Login to access your Orders, Wishlist, and <br /> Personalized Recommendations
          </p>
          <img
            src={home}
            alt="home"
            className="w-80 mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="w-[480px] p-10 bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 transition-transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign in to <span className="text-blue-600">Flipkart</span>
          </h2>

          <PhoneInput
            country={'in'}
            value={phone}
            onChange={(value: string) => setPhone(value)}
            inputStyle={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
              paddingLeft: '50px',
            }}
            buttonStyle={{ borderRadius: '10px 0 0 10px' }}
            placeholder="Enter Mobile Number"
          />

          <p className="text-gray-500 text-xs mt-4 text-center leading-relaxed">
            By continuing, you agree to Flipkart's
            <span className="text-blue-600 cursor-pointer hover:underline"> Terms of Use</span> and
            <span className="text-blue-600 cursor-pointer hover:underline"> Privacy Policy</span>.
          </p>

          {!otpSent ? (
            <button
              onClick={requestOtp}
              className="bg-orange-500 hover:bg-orange-600 w-full mt-6 py-3 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/50"
            >
              Request OTP
            </button>
          ) : (
            <div className="mt-6 space-y-4">
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              <button
                onClick={verifyOtp}
                className="bg-green-500 hover:bg-green-600 w-full py-3 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-green-400/50"
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

