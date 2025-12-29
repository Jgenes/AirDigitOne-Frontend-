import React, { useState, useContext } from "react";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import "../../app.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { api2 } from "../../axios";
import { AuthContext } from "../../context/AuthContext";

const steps = ["Company Info", "Address & Contacts", "Documents"];

const validationSchemas = [
  Yup.object({
    company_name: Yup.string().required("Company name is required"),
    registration_number: Yup.string().required("Registration number is required"),
    tax_id: Yup.string().required("Tax ID is required"),
    sector: Yup.string().required("Sector is required"),
    number_of_employees: Yup.number().required("Required").positive().integer(),
    website: Yup.string().url().nullable(),
    company_description: Yup.string().required(),
    operational_areas: Yup.string().required(),
  }),
  Yup.object({
    physical_address: Yup.string().required(),
    postal_address: Yup.string().required(),
    contact_person: Yup.string().required(),
    contact_email: Yup.string().email().required(),
    contact_phone: Yup.string().required(),
  }),
  Yup.object(),
];

export default function EmployerOnboarding() {
  const { user } = useContext(AuthContext);
  const employerId = user?.id;

  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [logoFiles, setLogoFiles] = useState([]);
  const [licenseFiles, setLicenseFiles] = useState([]);
  const [taxFiles, setTaxFiles] = useState([]);

  const logoDropzone = useDropzone({ multiple: true, onDrop: (files) => setLogoFiles(files) });
  const licenseDropzone = useDropzone({ multiple: true, onDrop: (files) => setLicenseFiles(files) });
  const taxDropzone = useDropzone({ multiple: true, onDrop: (files) => setTaxFiles(files) });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <>
      <TopBar />
      <Container component="main" maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom fontWeight={600}>
            Employer Onboarding
          </Typography>

          <LinearProgress
            variant="determinate"
            value={((activeStep + 1) / steps.length) * 100}
            sx={{ mb: 3, height: 8, borderRadius: 5 }}
          />

          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Formik
            initialValues={{
              company_name: "",
              registration_number: "",
              tax_id: "",
              sector: "",
              number_of_employees: "",
              website: "",
              company_description: "",
              operational_areas: "",
              physical_address: "",
              postal_address: "",
              contact_person: "",
              contact_email: "",
              contact_phone: "",
            }}
            validationSchema={validationSchemas[activeStep]}
            onSubmit={async (values) => {
              if (activeStep < steps.length - 1) return handleNext();
              if (!employerId) return toast.error("User not authenticated");

              const formData = new FormData();
              formData.append("employerId", employerId);
              Object.entries(values).forEach(([key, value]) => formData.append(key, value));

              logoFiles.forEach((file) => formData.append("logo", file));
              licenseFiles.forEach((file) => formData.append("business_license", file));
              taxFiles.forEach((file) => formData.append("tax_certificate", file));

              try {
                setLoading(true);
                const res = await api2.post("/employer/onboard", formData, {
                  headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success(res.data?.message || "Onboarding completed!");
                setLoading(false);
              } catch (err) {
                console.error(err);
                toast.error(err?.response?.data?.error || "Failed to submit onboarding");
                setLoading(false);
              }
            }}
          >
            {({ values, handleChange, touched, errors }) => (
              <Form>
                {/* Step 0: Company Info */}
                {activeStep === 0 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Company Name" name="company_name" value={values.company_name} onChange={handleChange} error={touched.company_name && !!errors.company_name} helperText={touched.company_name && errors.company_name} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Registration Number" name="registration_number" value={values.registration_number} onChange={handleChange} error={touched.registration_number && !!errors.registration_number} helperText={touched.registration_number && errors.registration_number} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Tax ID" name="tax_id" value={values.tax_id} onChange={handleChange} error={touched.tax_id && !!errors.tax_id} helperText={touched.tax_id && errors.tax_id} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Sector" name="sector" value={values.sector} onChange={handleChange} error={touched.sector && !!errors.sector} helperText={touched.sector && errors.sector} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Number of Employees" type="number" name="number_of_employees" value={values.number_of_employees} onChange={handleChange} error={touched.number_of_employees && !!errors.number_of_employees} helperText={touched.number_of_employees && errors.number_of_employees} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Company Description" multiline rows={3} name="company_description" value={values.company_description} onChange={handleChange} error={touched.company_description && !!errors.company_description} helperText={touched.company_description && errors.company_description} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Operational Areas" name="operational_areas" value={values.operational_areas} onChange={handleChange} error={touched.operational_areas && !!errors.operational_areas} helperText={touched.operational_areas && errors.operational_areas} />
                    </Grid>
                  </Grid>
                )}

                {/* Step 1: Address & Contacts */}
                {activeStep === 1 && (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Physical Address" name="physical_address" value={values.physical_address} onChange={handleChange} error={touched.physical_address && !!errors.physical_address} helperText={touched.physical_address && errors.physical_address} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Postal Address" name="postal_address" value={values.postal_address} onChange={handleChange} error={touched.postal_address && !!errors.postal_address} helperText={touched.postal_address && errors.postal_address} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Contact Person" name="contact_person" value={values.contact_person} onChange={handleChange} error={touched.contact_person && !!errors.contact_person} helperText={touched.contact_person && errors.contact_person} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Contact Phone" name="contact_phone" value={values.contact_phone} onChange={handleChange} error={touched.contact_phone && !!errors.contact_phone} helperText={touched.contact_phone && errors.contact_phone} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Contact Email" name="contact_email" value={values.contact_email} onChange={handleChange} error={touched.contact_email && !!errors.contact_email} helperText={touched.contact_email && errors.contact_email} />
                    </Grid>
                  </Grid>
                )}

                {/* Step 2: Documents */}
                {activeStep === 2 && (
                  <>
                    <Box {...logoDropzone.getRootProps()} sx={{ border: "2px dashed #aaa", p: 3, mb: 2, borderRadius: 2, textAlign: "center" }}>
                      <input {...logoDropzone.getInputProps()} />
                      <Typography>Drag & drop LOGO here or click (multiple allowed)</Typography>
                    </Box>
                    {logoFiles.map((file, i) => <Typography key={i}>📄 {file.name}</Typography>)}

                    <Box {...licenseDropzone.getRootProps()} sx={{ border: "2px dashed #aaa", p: 3, mb: 2, borderRadius: 2, textAlign: "center" }}>
                      <input {...licenseDropzone.getInputProps()} />
                      <Typography>Drag & drop BUSINESS LICENSE here</Typography>
                    </Box>
                    {licenseFiles.map((file, i) => <Typography key={i}>📄 {file.name}</Typography>)}

                    <Box {...taxDropzone.getRootProps()} sx={{ border: "2px dashed #aaa", p: 3, mb: 2, borderRadius: 2, textAlign: "center" }}>
                      <input {...taxDropzone.getInputProps()} />
                      <Typography>Drag & drop TAX CERTIFICATE here</Typography>
                    </Box>
                    {taxFiles.map((file, i) => <Typography key={i}>📄 {file.name}</Typography>)}
                  </>
                )}

                <Box mt={4} display="flex" justifyContent="space-between">
                  <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                  <Button variant="contained" type="submit" disabled={loading}>
                    {activeStep === steps.length - 1 ? (loading ? "Submitting..." : "Finish Onboarding") : "Next"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
