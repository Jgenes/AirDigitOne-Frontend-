import React, { useState } from "react";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import "../../app.css";
import api from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Forget() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailOrPhone.trim()) {
      toast.error("Please enter your email or phone");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/forgot-password", {
        emailOrPhone: emailOrPhone.trim(),
      });

      toast.success(res.data.message || "Password reset link sent!");

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to send reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Forgot Password</h2>

          <p className="text-center" style={{ marginBottom: "20px" }}>
            Enter your email or phone number to receive a password reset link.
          </p>

          <div className="input-group">
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              id="emailOrPhone"
              type="text"
              placeholder="Enter email or phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Sending link..." : "Send Reset Link"}
          </button>

          <div className="extra-links" style={{ marginTop: "15px" }}>
            <a href="/login">Back to Login</a>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
