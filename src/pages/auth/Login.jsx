import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css"; 
import api from "../../axios";
import { toast } from "react-toastify";


export default function Login() {
  const [emailOrPhone, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { emailOrPhone, password, rememberMe }; 

    setLoading(true); 

    try {
      const res = await api.post("/login", form);

      toast.success("Login successfully");

      // redirect after 1 second
      setTimeout(() => {
        window.location.href = "/otp";
      }, 1000);
    } 
    catch (err) {
 const message =
    err.response?.data?.message ||
    err.response?.data?.error ||
    "Login failed";

  toast.error(message);    } 
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

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="emailOrPhone"
              placeholder="Enter your email"
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
          <button type="submit" className="login-btn">
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Extra links */}
          <div className="extra-links">
            <a href="#">Forgot Password?</a>
            <span> | </span>
            <a href="/register">Create an Account</a>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
