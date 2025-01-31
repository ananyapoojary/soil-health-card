import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ usertype: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Login Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Login</Typography>
        <TextField fullWidth label="User Type" name="usertype" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Login
        </Button>
        <Button variant="text" color="secondary" onClick={() => navigate("/register")} sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
