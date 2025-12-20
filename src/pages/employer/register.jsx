import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import { api2 } from "../../axios"; // Make sure this points to the right API instance
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmployerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    phone: "",
    sector: "",
    address: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Basic client-side validation
  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.password) e.password = "Password is required";
    else if (data.password.length < 6) e.password = "Password must be at least 6 characters";
    if (!data.company.trim()) e.company = "Company is required";
    return e;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(formData);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      // Ensure correct API endpoint is being used: /api/v1/employer/register
      const res = await api2.post("/employers/register", {
        company_name: formData.company,   // Backend expects 'company_name'
        email: formData.email,
        password: formData.password,
        phone: formData.phone || "",   // Optional fields
        sector: formData.sector || "",
        address: formData.address || "",
      });
      toast.success("Registration successful");
      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      const msg = err?.response?.data?.message || "Registration failed";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TopBar />
      <div className="container">
        <h2>Employer Registration</h2>
        <form onSubmit={handleSubmit} className="employer-register-form">
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <div className="form-error">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              aria-invalid={errors.company ? "true" : "false"}
            />
            {errors.company && <div className="form-error">{errors.company}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sector">Sector</label>
            <input
              id="sector"
              type="text"
              name="sector"
              placeholder="Sector of business"
              value={formData.sector}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Business address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
