import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Registration Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Register</Typography>
        <TextField fullWidth label="Name" name="name" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Register
        </Button>
        <Button variant="text" color="secondary" onClick={() => navigate("/login")} sx={{ mt: 2 }}>
          Back to Login
        </Button>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
