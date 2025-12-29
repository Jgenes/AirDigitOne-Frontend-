import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { api2 } from "../../../../axios";
import { toast } from "react-toastify";

const contractOptions = [
  { label: "Full Time", value: "full_time" },
  { label: "Part Time", value: "part_time" },
  { label: "Internship", value: "internship" },
  { label: "Freelance", value: "freelance" },
];

const workModeOptions = [
  { label: "Onsite", value: "onsite" },
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
];

export default function JobFormModal({ show, onHide, job, editMode, reload }) {
  const [form, setForm] = useState({
    contract_type: "full_time",
    work_mode: "onsite",
  });
  const [skills, setSkills] = useState("");
  const [industries, setIndustries] = useState("");

  useEffect(() => {
    if (job) setForm(job);
  }, [job]);

  const submit = async () => {
    try {
      let res;
      if (editMode) {
        res = await api2.put(`/jobs/${job.id}`, form);
      } else {
        res = await api2.post("/jobs", form);
      }

      const jobId = editMode ? job.id : res.data.id;

      if (skills)
        await api2.post(`/jobs/${jobId}/skills`, {
          skills: skills.split(",").map(s => s.trim())
        });

      if (industries)
        await api2.post(`/jobs/${jobId}/industries`, {
          industries: industries.split(",").map(i => i.trim())
        });

      toast.success(editMode ? "Job updated" : "Job created");
      reload();
      onHide();
    } catch (err) {
      toast.error(err.response?.data?.error || "Operation failed");
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{editMode ? "Edit Job" : "Create Job"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Title"
              value={form.title || ""}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Location"
              value={form.location || ""}
              onChange={e => setForm({ ...form, location: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-control"
              value={form.contract_type}
              onChange={e => setForm({ ...form, contract_type: e.target.value })}
            >
              {contractOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <select
              className="form-control"
              value={form.work_mode}
              onChange={e => setForm({ ...form, work_mode: e.target.value })}
            >
              {workModeOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Salary Min"
              type="number"
              value={form.salary_min || ""}
              onChange={e => setForm({ ...form, salary_min: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Salary Max"
              type="number"
              value={form.salary_max || ""}
              onChange={e => setForm({ ...form, salary_max: e.target.value })}
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Job Description"
              value={form.description || ""}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Skills (comma separated)"
              onChange={e => setSkills(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Industries (comma separated)"
              onChange={e => setIndustries(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button onClick={submit}>{editMode ? "Update Job" : "Create Job"}</Button>
      </Modal.Footer>
    </Modal>
  );
}
