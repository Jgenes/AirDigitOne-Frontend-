import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import api from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SaveInterest() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [items, setItems] = useState([]);

  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [itemId, setItemId] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loadCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (err) {
      toast.error("Failed to load categories");
    }
  };

  const loadSubcategories = async (id) => {
    setSubcategoryId("");
    setItemId("");
    setItems([]);
    try {
      const res = await api.get(`/categories/${id}/subcategories`);
      setSubcategories(res.data);
    } catch (err) {
      toast.error("Failed to load subcategories");
    }
  };

  const loadItems = async (id) => {
    setItemId("");
    try {
      const res = await api.get(`/subcategories/${id}/items`);
      setItems(res.data);
    } catch (err) {
      toast.error("Failed to load interest items");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId || !subcategoryId || !itemId) {
      toast.error("Please select all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/user-interests", {
        category_id: categoryId,
        subcategory_id: subcategoryId,
        item_id: itemId,
      });

      toast.success("Interest saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to save interest");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <TopBar />

      <div className="interest-page-wrapper">
        <div className="interest-card">
          <h2 className="interest-title">Save Your Interests</h2>

          <form onSubmit={handleSubmit} className="interest-form">
            {/* Category */}
            <label className="interest-label">Select Category</label>
            <select
              className="interest-input"
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
                loadSubcategories(e.target.value);
              }}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Subcategory */}
            <label className="interest-label">Select Subcategory</label>
            <select
              className="interest-input"
              value={subcategoryId}
              onChange={(e) => {
                setSubcategoryId(e.target.value);
                loadItems(e.target.value);
              }}
            >
              <option value="">-- Select Subcategory --</option>
              {subcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>{sub.name}</option>
              ))}
            </select>

            {/* Items */}
            <label className="interest-label">Select Interest Item</label>
            <select
              className="interest-input"
              value={itemId}
              onChange={(e) => setItemId(e.target.value)}
            >
              <option value="">-- Select Item --</option>
              {items.map((it) => (
                <option key={it.id} value={it.id}>{it.name}</option>
              ))}
            </select>

            <button type="submit" className="interest-button" disabled={loading}>
              {loading ? "Saving..." : "Save Interest"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
