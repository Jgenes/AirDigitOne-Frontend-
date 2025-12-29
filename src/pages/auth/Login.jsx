import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css"; // your styles

export default function LoginPage() {
  const [step, setStep] = useState("login"); // 'login' or 'otp'
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------------- STEP 1: LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      toast.error("Email/phone and password are required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/v1/user/login", {
        email: emailOrPhone,
        password,
      });

      setUserId(res.data.userId); // save user ID for OTP verification
      setRole(res.data.role); // save role
      setStep("otp"); // move to OTP step
      toast.success(res.data.message);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Login failed");
      setLoading(false);
    }
  };

  // ---------------- STEP 2: VERIFY OTP ----------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Enter OTP");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/v1/user/verify-otp", {
        emailOrPhone,
        otp,
      });

      // Save token
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);

      // Redirect based on backend redirectTo
      window.location.href = res.data.redirectTo;

      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "OTP verification failed");
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
        {step === "login" && (
          <form onSubmit={handleLogin}>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              style={{ width: "100%", padding: 10, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: 10, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 4,
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerifyOtp}>
            <h2 style={{ textAlign: "center" }}>Enter OTP</h2>
            <p>An OTP has been sent to your email. It will expire in 5 minutes.</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: "100%", padding: 10, marginBottom: 12, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 4,
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
