import React, { useEffect, useState } from "react";
import DashboardWrapper from "./DashboardLayout.jsx";
import DataTable from "react-data-table-component";
import { api2 } from "../../../../axios";
import { Modal, Button } from "react-bootstrap";
import { FiEye, FiCheckCircle } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmployerVerification() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [employers, setEmployers] = useState([]);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  // Fetch all employers
  const fetchEmployers = async () => {
    try {
      const res = await api2.get("/employers");
      if (Array.isArray(res.data)) setEmployers(res.data);
      else console.error("Unexpected response:", res.data);
    } catch (err) {
      console.error("Error fetching employers:", err);
      toast.error("Failed to fetch employers!");
    }
  };

  // View single employer
  const viewEmployer = async (id) => {
    try {
      const res = await api2.get(`/employers/${id}`);
      setSelectedEmployer(res.data);
      setModalOpen(true);
    } catch (err) {
      console.error("Error fetching employer details:", err);
      toast.error("Failed to fetch employer details!");
    }
  };

  // Activate employer
  const activateEmployer = async (id) => {
    try {
      await api2.patch(`/employers/activate/${id}`);
      fetchEmployers();
      toast.success("Employer activated successfully!");
    } catch (err) {
      console.error("Error activating employer:", err);
      toast.error("Failed to activate employer!");
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    { name: "Company Name", selector: (row) => row.company_name, sortable: true },
    { name: "Registration Number", selector: (row) => row.registration_number },
    { name: "Tax ID", selector: (row) => row.tax_id },
    { name: "Sector", selector: (row) => row.sector },
    { name: "Employees", selector: (row) => row.number_of_employees },
  
    { name: "Contact Person", selector: (row) => row.contact_person },
    { name: "Email", selector: (row) => row.contact_email },
    { name: "Phone", selector: (row) => row.contact_phone },
    { 
      name: "Status", 
      selector: (row) => row.is_verified, 
      sortable: true, 
      cell: (row) => (
        <span className={`badge ${row.is_verified ? "bg-success" : "bg-warning"}`}>
          {row.is_verified ? "Verified" : "Pending"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Button size="sm" onClick={() => viewEmployer(row.id)}>
            <FiEye />
          </Button>
          {!row.is_verified && (
            <Button size="sm" variant="success" onClick={() => activateEmployer(row.id)}>
              <FiCheckCircle />
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <DashboardWrapper
      activePage="dashboard"
      isSidenavOpen={isSidenavOpen}
      toggleSidenav={toggleSidenav}
    >
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="ms-3 mb-4">
        <h3 className="mb-0 h4 font-weight-bolder">Employer Verification</h3>
        <p className="mb-0 text-sm text-secondary">Check pending and verified employers.</p>
      </div>

      <div className="row">
        <div className="col-12">
          <DataTable
            columns={columns}
            data={employers}
            pagination
            highlightOnHover
            selectableRows
            striped
          />
        </div>
      </div>

      {/* Employer Details Modal */}
      <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Employer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployer ? (
            <div className="container-fluid">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="card p-3 shadow-sm">
                    <h6 className="fw-bold">Company Info</h6>
                    <p><strong>Company Name:</strong> {selectedEmployer.company_name}</p>
                    <p><strong>Registration Number:</strong> {selectedEmployer.registration_number}</p>
                    <p><strong>Tax ID:</strong> {selectedEmployer.tax_id}</p>
                    <p><strong>Sector:</strong> {selectedEmployer.sector}</p>
                    <p><strong>Employees:</strong> {selectedEmployer.number_of_employees}</p>
                    <p><strong>Operation Areas:</strong> {selectedEmployer.operation_areas}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card p-3 shadow-sm">
                    <h6 className="fw-bold">Contact Info</h6>
                    <p><strong>Address:</strong> {selectedEmployer.physical_address}</p>
                    <p><strong>Postal Address:</strong> {selectedEmployer.postal_address}</p>
                    <p><strong>Website:</strong> <a href={selectedEmployer.website} target="_blank" rel="noreferrer">{selectedEmployer.website}</a></p>
                    <p><strong>Contact Person:</strong> {selectedEmployer.contact_person}</p>
                    <p><strong>Email:</strong> {selectedEmployer.contact_email}</p>
                    <p><strong>Phone:</strong> {selectedEmployer.contact_phone}</p>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <div className="card p-3 shadow-sm">
                    <h6 className="fw-bold">Company Description</h6>
                    <p>{selectedEmployer.company_description}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card p-3 shadow-sm">
                    <h6 className="fw-bold mb-2">Documents</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedEmployer.logo_path && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={selectedEmployer.logo_path}
                          target="_blank"
                        >
                          View Logo
                        </Button>
                      )}
                      {selectedEmployer.business_license_path && (
                        <Button
                          variant="outline-success"
                          size="sm"
                          href={selectedEmployer.business_license_path}
                          target="_blank"
                        >
                          Download Business License
                        </Button>
                      )}
                      {selectedEmployer.tax_license_path && (
                        <Button
                          variant="outline-warning"
                          size="sm"
                          href={selectedEmployer.tax_license_path}
                          target="_blank"
                        >
                          Download Tax License
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </DashboardWrapper>
  );
}
