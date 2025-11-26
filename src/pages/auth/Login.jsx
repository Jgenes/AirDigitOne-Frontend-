import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css"; 
import api from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [emailOrPhone, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { emailOrPhone, password, rememberMe };
    setLoading(true);

    try {
      const res = await api.post("/login", form);

      toast.success("Login successful");

      localStorage.setItem("emailOrPhone", emailOrPhone);

      setTimeout(() => {
        navigate("/otp", { state: { emailOrPhone } });
      }, 800);
    } 
    catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed";
      toast.error(message);
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>

          {/* Email / Phone */}
          <div className="input-group">
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              id="emailOrPhone"
              type="text"   // FIX: Accept both email and phone
              name="emailOrPhone"
              placeholder="Enter email or phone"
              value={emailOrPhone}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me */}
          <div className="checkbox-group">
            <input
              style={{ backgroundColor: "white" }}
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Extra links */}
          <div className="extra-links">
            <a href="/forget_password">Forgot Password?</a>
            <span> | </span>
            <a href="/register">Create an Account</a>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
