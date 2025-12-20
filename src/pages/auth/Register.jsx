import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import {api1, api2} from "../../axios";
import { toast } from "react-toastify";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { fullname, phone, email, password };

    setLoading(true); 

    try {
      const res = await api1.post("/register", form);
      console.log(res.data);

      toast.success("Registered successfully");

      setTimeout(() => {
        window.location.href = "/login"; 
      }, 1000);
    } catch (err) {
        const message =
    err.response?.data?.message ||
    err.response?.data?.error ||
    "Registration failed";

  toast.error(message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <TopBar />

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Register</h2>

          {/* Full Name */}
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
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

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="extra-links">
            <a href="/login">Have an account? Login</a>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
