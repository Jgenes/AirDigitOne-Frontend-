import React, { useEffect, useState } from "react";
import DashboardWrapper from "./DashboardLayout";
import DataTable from "react-data-table-component";
import { api2 } from "../../../../axios";
import { Button, Badge } from "react-bootstrap";
import { FiEye, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import JobFormModal from "./JobFormModal";
import JobViewModal from "./JobViewModal";

export default function EmployerJobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showView, setShowView] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchJobs = async () => {
    try {
      const res = await api2.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Fetch Jobs Error:", err.response?.data || err.message);
      toast.error("Failed to load jobs");
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const deleteJob = async id => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await api2.delete(`/jobs/${id}`);
      toast.success("Job deleted");
      fetchJobs();
    } catch (err) {
      console.error("Delete Job Error:", err.response?.data || err.message);
      toast.error("Delete failed");
    }
  };

  const columns = [
    { name: "Title", selector: r => r.title, sortable: true },
    { name: "Location", selector: r => r.location },
    { name: "Contract", selector: r => r.contract_type },
    { name: "Mode", selector: r => r.work_mode },
    {
      name: "Status",
      cell: r => (
        <Badge bg={r.is_active ? "success" : "secondary"}>
          {r.is_active ? "Active" : "Closed"}
        </Badge>
      )
    },
    {
      name: "Actions",
      cell: r => (
        <div className="d-flex gap-2">
          <Button size="sm" onClick={() => { setSelectedJob(r); setShowView(true); }}>
            <FiEye />
          </Button>

          <Button size="sm" variant="warning" onClick={() => { setSelectedJob(r); setEditMode(true); setShowForm(true); }}>
            <FiEdit />
          </Button>

          <Button size="sm" variant="danger" onClick={() => deleteJob(r.id)}>
            <FiTrash2 />
          </Button>
        </div>
      )
    }
  ];

  return (
    <DashboardWrapper activePage="jobs">
      <ToastContainer />

      <div className="d-flex justify-content-between mb-3">
        <div>
          <h4 className="fw-bold">Job Management</h4>
          <p className="text-muted text-sm">Create, edit and manage your job posts</p>
        </div>

        <Button onClick={() => { setSelectedJob(null); setEditMode(false); setShowForm(true); }}>
          <FiPlus /> Post Job
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={jobs}
        pagination
        striped
        highlightOnHover
      />

      <JobFormModal
        show={showForm}
        onHide={() => setShowForm(false)}
        job={selectedJob}
        editMode={editMode}
        reload={fetchJobs}
      />

      <JobViewModal
        show={showView}
        onHide={() => setShowView(false)}
        job={selectedJob}
      />
    </DashboardWrapper>
  );
}
