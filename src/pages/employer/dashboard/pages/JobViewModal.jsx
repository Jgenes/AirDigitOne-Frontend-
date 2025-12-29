import { Modal, Badge, Button } from "react-bootstrap";

export default function JobViewModal({ show, onHide, job }) {
  if (!job) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{job.description}</p>

        <div className="row">
          <div className="col-md-6">
            <p><b>Location:</b> {job.location}</p>
            <p><b>Contract:</b> {job.contract_type}</p>
            <p><b>Work Mode:</b> {job.work_mode}</p>
          </div>
          <div className="col-md-6">
            <p><b>Salary:</b> {job.salary_min} - {job.salary_max}</p>
            <p><b>Expiry:</b> {job.expiry_date}</p>
          </div>
        </div>

        <hr />

        <p><b>Skills</b></p>
        {job.skills?.map((s, i) => <Badge bg="info" className="me-2" key={i}>{s}</Badge>)}

        <p className="mt-3"><b>Industries</b></p>
        {job.industries?.map((i, x) => <Badge bg="secondary" className="me-2" key={x}>{i}</Badge>)}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
