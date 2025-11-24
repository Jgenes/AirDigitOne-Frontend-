import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../axios";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import "../../app.css";

export default function OTPPage({ emailOrPhone: propEmail }) {
  const location = useLocation();

  // Get emailOrPhone safely from multiple places
  const emailOrPhone =
    propEmail ||
    location.state?.emailOrPhone ||
    localStorage.getItem("emailOrPhone");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);

  // If user reaches OTP screen without emailOrPhone, stop them
  useEffect(() => {
    if (!emailOrPhone) {
      toast.error("Missing email or phone number");
      window.location.href = "/login";
    }
  }, []);

  // Start countdown for resend
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Handle OTP input
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (!emailOrPhone) {
      toast.error("Missing email/phone");
      return;
    }
    if (code.length !== 6) {
      toast.error("Please enter full 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/verify-otp", {
        emailOrPhone,
        otp: code,
      });

      toast.success(res.data.message);
      window.location.href = "/dashboard";
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (!emailOrPhone) {
      toast.error("Missing email/phone");
      return;
    }

    try {
      setResendLoading(true);
      const res = await api.post("/resend-otp", { emailOrPhone });

      toast.success(res.data.message || "OTP resent");
      setTimer(30);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <>
      <TopBar />

      <div className="otp-container">
        <h2>Enter OTP</h2>
        <p>We sent a 6-digit code to: <strong>{emailOrPhone}</strong></p>

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

        <div className="resend-section">
          {timer > 0 ? (
            <p className="resend-timer">
              Resend OTP in <strong>{timer}s</strong>
            </p>
          ) : (
            <button
              className="resend-btn"
              onClick={handleResend}
              disabled={resendLoading}
            >
              {resendLoading ? "Resending..." : "Resend OTP"}
            </button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
