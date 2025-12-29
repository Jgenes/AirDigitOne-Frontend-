import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import { api2 } from "../../axios"; // Make sure this points to your API instance
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmployerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    owner: "",
    email: "",
    password: "",
    phone: "",
    sector: "",
    address: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ---------------- Validation ----------------
  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Full name is required";
    if (!data.company.trim()) e.company = "Company name is required";
    if (!data.owner.trim()) e.owner = "Owner name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.password) e.password = "Password is required";
    else if (data.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  };

  // ---------------- Handle Change ----------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- Handle Submit ----------------
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
      const res = await api2.post("/employer/register", {
        fullname: formData.name,
        company_name: formData.company,
        owner_name: formData.owner,
        email: formData.email,
        password: formData.password,
        phone: formData.phone || "",
        sector: formData.sector || "",
        address: formData.address || "",
      });

      toast.success("Registration successful! Check your email to activate.");
      navigate("/login");

    } catch (err) {
      console.error(err.response?.data);
      toast.error(err.response?.data?.error || "Registration failed");
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
            <label htmlFor="name">Full Name</label>
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
            <label htmlFor="company">Company Name</label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="ACME Ltd"
              value={formData.company}
              onChange={handleChange}
              aria-invalid={errors.company ? "true" : "false"}
            />
            {errors.company && <div className="form-error">{errors.company}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="owner">Owner Name</label>
            <input
              id="owner"
              type="text"
              name="owner"
              placeholder="John Doe"
              value={formData.owner}
              onChange={handleChange}
              aria-invalid={errors.owner ? "true" : "false"}
            />
            {errors.owner && <div className="form-error">{errors.owner}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="hr@company.com"
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
            <label htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="+255712345678"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sector">Sector (optional)</label>
            <input
              id="sector"
              type="text"
              name="sector"
              placeholder="Fintech"
              value={formData.sector}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address (optional)</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="123 Market St, Dar es Salaam"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
