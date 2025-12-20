import React, { useEffect, useState } from "react";
import {api1, api2} from "../../axios";
import { toast } from "react-toastify";
import "../../app.css";

export default function OnboardingInterest() {
  const [categories, setCategories] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const res = await api1.get("/interest");
      setCategories(res.data.categories);
    } catch (err) {
      console.error("Load categories error:", err.response?.data);
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleSubcategory = (id) => {
    setSelectedSubcategories((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFinish = async () => {
    const interests = categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .map((cat) => ({
        categoryId: cat.id,
        itemIds: cat.subcategories
          .filter((sub) => selectedSubcategories.includes(sub.id))
          .flatMap((sub) => sub.items.filter((i) => selectedItems.includes(i.id)).map((i) => i.id)),
      }));

    try {
      await api1.post("/interest/save", { interests });
      toast.success("Interests saved!");
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err.response?.data);
      toast.error("Failed to save interests");
    }
  };

  if (loading) return <p>Loading interests...</p>;

  return (
    <div className="onboarding-container">
      {step === 1 && (
        <div className="step step-categories">
          <h2>Select Categories</h2>
          <div className="cards">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`card ${selectedCategories.includes(cat.id) ? "selected" : ""}`}
                onClick={() => toggleCategory(cat.id)}
              >
                {cat.name}
              </div>
            ))}
          </div>
          <button onClick={handleNext} disabled={selectedCategories.length === 0}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="step step-subcategories">
          <h2>Select Subcategories</h2>
          <div className="cards">
            {categories
              .filter((cat) => selectedCategories.includes(cat.id))
              .flatMap((cat) => cat.subcategories)
              .map((sub) => (
                <div
                  key={sub.id}
                  className={`card ${selectedSubcategories.includes(sub.id) ? "selected" : ""}`}
                  onClick={() => toggleSubcategory(sub.id)}
                >
                  {sub.name}
                </div>
              ))}
          </div>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext} disabled={selectedSubcategories.length === 0}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="step step-items">
          <h2>Select Interests</h2>
          <div className="cards">
            {categories
              .filter((cat) => selectedCategories.includes(cat.id))
              .flatMap((cat) =>
                cat.subcategories
                  .filter((sub) => selectedSubcategories.includes(sub.id))
                  .flatMap((sub) => sub.items)
              )
              .map((item) => (
                <div
                  key={item.id}
                  className={`chip ${selectedItems.includes(item.id) ? "selected" : ""}`}
                  onClick={() => toggleItem(item.id)}
                >
                  {item.name}
                </div>
              ))}
          </div>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleFinish} disabled={selectedItems.length === 0}>
            Finish
          </button>
        </div>
      )}
    </div>
  );
}
