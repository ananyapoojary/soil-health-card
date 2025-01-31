import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
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
        <FormControl fullWidth margin="normal">
          <InputLabel>User Type</InputLabel>
          <Select name="usertype" value={formData.usertype} onChange={handleChange}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="central-user">Central User</MenuItem>
            <MenuItem value="scheme-admin">Scheme Admin</MenuItem>
            <MenuItem value="state-user">State User</MenuItem>
            <MenuItem value="district-user">District User</MenuItem>
            <MenuItem value="stl">STL</MenuItem>
            <MenuItem value="supervisor">Supervisor</MenuItem>
          </Select>
        </FormControl>
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
