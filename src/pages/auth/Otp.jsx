import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import api from "../../axios";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";

export default function OTPPage({ emailOrPhone }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to next input
      if (value && index < 5) inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("").trim();

    if (!emailOrPhone || code.length !== 6) {
      toast.error("Email/phone and complete 6-digit OTP are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/verify-otp", {
        emailOrPhone: emailOrPhone.trim(),
        otp: code,
      });
      toast.success(res.data.message);
      // Redirect to interest page
      window.location.href = "/interest";
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />

      <div className="otp-container">
        <h2>Enter OTP</h2>
        <p>We sent a 6-digit code to your email or phone</p>

        <form onSubmit={handleSubmit} className="otp-form">
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="otp-box"
                disabled={loading}
              />
            ))}
          </div>

          <button type="submit" className="otp-submit-btn" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
