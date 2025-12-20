import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import { api1, api2 } from "../../axios"; // Import Axios instances for user and employer login
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [emailOrPhone, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Helper function to check if the input is an email
  const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

  const handleSubmit = async (e) => {
    e.preventDefault();

  setLoading(true);

  // Build request payload depending on which backend we call.
  // Many backends expect `email` or `phone` fields rather than a combined `emailOrPhone`.

    try {
      let res;

      // Auto-detect which backend to call by input format
      // email-like -> user backend (api1), otherwise employer backend (api2)
      const isEmailInput = isEmail(emailOrPhone);
      const client = isEmailInput ? api1 : api2;

      // Build request body in the shape each backend commonly expects
      let requestData;
      if (client === api1) {
        // user backend generally expects { email, password }
        requestData = { email: emailOrPhone, password };
      } else {
        // employer backend may accept email or phone; prefer phone when input isn't an email
        requestData = isEmailInput
          ? { email: emailOrPhone, password }
          : { phone: emailOrPhone, password };
      }

      // include rememberMe only if backend supports it (harmless otherwise)
      requestData.rememberMe = rememberMe;

      try {
        res = await client.post("/login", requestData);
      } catch (firstErr) {
        // Helpful debug in dev: server may expect different field names
        const serverMessage = firstErr?.response?.data?.message || firstErr?.response?.data?.error || "";

        // If server complains about missing email/password, retry with both fields present
        if (/email|password|required/i.test(serverMessage)) {
          const altPayload = {
            email: isEmailInput ? emailOrPhone : emailOrPhone,
            phone: isEmailInput ? undefined : emailOrPhone,
            password,
            rememberMe,
          };
          try {
            res = await client.post("/login", altPayload);
          } catch (secondErr) {
            // fall through to attempt other API below
            firstErr = secondErr;
          }
        }

        // If still no result and the message indicates user not found or invalid, try the other API as a fallback
        if (!res) {
          const otherClient = client === api1 ? api2 : api1;
          try {
            const otherPayload = isEmailInput ? { email: emailOrPhone, password, rememberMe } : { phone: emailOrPhone, password, rememberMe };
            res = await otherClient.post("/login", otherPayload);
          } catch (thirdErr) {
            // Re-throw the original friendly error for the UI
            throw firstErr;
          }
        }
      }

      // On success, store token and navigate
      toast.success("Login successful");

      // Attempt to extract token from common locations
      const token = res?.data?.token || res?.data?.accessToken || res?.data?.data?.token || res?.data?.data?.accessToken;
      if (token) {
        localStorage.setItem("token", token);
      }

      // Store emailOrPhone
      localStorage.setItem("emailOrPhone", emailOrPhone);

      // Derive role: prefer server-provided role, fallback to client choice
      let detectedRole = client === api1 ? "user" : "employer";
      const serverRole = res?.data?.role || res?.data?.data?.role || res?.data?.user?.role || res?.data?.data?.user?.role;
      if (serverRole) {
        detectedRole = serverRole;
      }
      localStorage.setItem("role", detectedRole);

      // Redirect based on role — conservative defaults, change as needed
      const redirectMap = {
        user: "/dashboard",
        employer: "/employer/dashboard",
        admin: "/admin/dashboard",
      };

  const to = redirectMap[detectedRole] || "/dashboard";
  setTimeout(() => navigate(to), 600);
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.error || "Login failed";
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
          <h2 className="login-title">Login</h2>

          {/* Role is detected automatically (email -> user, phone -> employer) */}

          {/* Email / Phone */}
          <div className="input-group">
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              id="emailOrPhone"
              type="text"
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
