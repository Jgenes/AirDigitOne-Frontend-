import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../axios";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import "../../app.css";

export default function OTPPage({ emailOrPhone: propEmail }) {
  const location = useLocation();
  const navigate = useNavigate();

  const emailOrPhone =
    propEmail ||
    location.state?.emailOrPhone ||
    localStorage.getItem("emailOrPhone");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (!emailOrPhone) {
      toast.error("Missing email or phone");
      navigate("/login");
    } else {
      localStorage.setItem("emailOrPhone", emailOrPhone);
    }
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const updated = [...otp];
      updated[index] = value;
      setOtp(updated);
      if (value && index < 5) inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("").trim();

    if (!emailOrPhone) return toast.error("Missing email/phone");
    if (code.length !== 6) return toast.error("Enter full 6-digit OTP");

    try {
      setLoading(true);

      console.log("Sending OTP verify request:", { emailOrPhone, otp: code });

      const res = await api.post("/verify-otp", {
        emailOrPhone: emailOrPhone.trim(),
        otp: code,
      });

      console.log("Verify response:", res.data);

      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);

      const interestCheck = await api.get("/interest/has-interest");
      if (interestCheck.data.hasInterest) navigate("/dashboard");
      else navigate("/save-interest");
    } catch (err) {
      console.error("Verify OTP error:", err.response?.data);
      toast.error(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };


  const handleResend = async () => {
    if (!emailOrPhone) return toast.error("Missing email/phone");

    try {
      setResendLoading(true);

      console.log("Resend OTP request for:", emailOrPhone);

      const res = await api.post("/resend-otp", { emailOrPhone: emailOrPhone.trim() });

      console.log("Resend response:", res.data);

      toast.success(res.data.message || "OTP resent");
      setOtp(["", "", "", "", "", ""]); 
      setTimer(30);
      inputsRef.current[0].focus();
    } catch (err) {
      console.error("Resend OTP error:", err.response?.data);
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
        <p>
          We sent a 6-digit code to: <strong>{emailOrPhone}</strong>
        </p>

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
