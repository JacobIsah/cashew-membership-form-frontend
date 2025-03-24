import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    contact_address: "",
    phone_number: "",
    email: "",
    community: "",
    lga: "",
    state: "",
    farm_location: "",
    next_of_kin: "",
    next_of_kin_contact: "",
    relationship: "",
    membership_category: "",
    business_name: "",
    business_address: "",
    business_phone: "",
    business_email: "",
    passport_photo: null,
    payment_receipt: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateForm = () => {
    const {
      full_name,
      contact_address,
      phone_number,
      email,
      membership_category,
      business_name,
      business_address,
      business_phone,
      business_email,
    } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (!full_name) {
      setError("Full Name is required");
      return false;
    }
    if (!contact_address) {
      setError("Contact Address is required");
      return false;
    }
    if (!phone_number || !phoneRegex.test(phone_number)) {
      setError("Phone Number must be 11 digits");
      return false;
    }
    if (!email || !emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (!membership_category) {
      setError("Membership Category is required");
      return false;
    }
    if (!business_name) {
      setError("Business Name is required");
      return false;
    }
    if (!business_address) {
      setError("Business Address is required");
      return false;
    }
    if (!business_phone || !phoneRegex.test(business_phone)) {
      setError("Business Phone must be 11 digits");
      return false;
    }
    if (!business_email || !emailRegex.test(business_email)) {
      setError("Invalid Business Email format");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const formDataToSend = new FormData();
  
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'passport_photo' || key === 'payment_receipt') {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value);
        }
      });
  
      const response = await axios.post(
        "http://localhost:5000/api/membership/register",
        formDataToSend, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.data.success) {
        setSuccess("Membership registration successful!");
        setOpenConfirmation(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmationOpen = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };

  const sections = [
    {
      title: "Member Information",
      fields: [
        { name: "full_name", label: "Full Name", required: true },
        { name: "contact_address", label: "Contact Address", required: true },
        { name: "phone_number", label: "Phone Number", required: true },
        { name: "email", label: "Email", required: true },
        { name: "community", label: "Community" },
        { name: "lga", label: "LGA" },
        { name: "state", label: "State" },
        { name: "farm_location", label: "Farm Location" },
        { name: "next_of_kin", label: "Next of Kin" },
        { name: "next_of_kin_contact", label: "Next of Kin Contact" },
        { name: "relationship", label: "Relationship" },
      ],
    },
    {
      title: "Membership Category",
      fields: [
        { name: "membership_category", label: "Membership Category", required: true },
      ],
    },
    {
      title: "Business Information",
      fields: [
        { name: "business_name", label: "Business Name", required: true },
        { name: "business_address", label: "Business Address", required: true },
        { name: "business_phone", label: "Business Phone", required: true },
        { name: "business_email", label: "Business Email", required: true },
      ],
    },
    {
      title: "Additional Information",
      fields: [
        { name: "passport_photo", label: "Passport", type: "file" },
        { name: "payment_receipt", label: "Receipt", type: "file" },
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Membership Registration
      </Typography>

      {sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {section.fields.map((field, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  {field.type === "file" ? (
                    <TextField
                      fullWidth
                      name={field.name}
                      label={field.label}
                      type="file"
                      onChange={handleFileChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  ) : (
                    <TextField
                      fullWidth
                      name={field.name}
                      label={field.label}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={handleConfirmationOpen}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>

      <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to submit the form?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Confirm"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
        message={error}
      />
      <Snackbar
        open={!!success}
        autoHideDuration={6000}
        onClose={() => setSuccess("")}
        message={success}
      />
    </Container>
  );
};

export default MembershipForm;