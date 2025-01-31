import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Grid, IconButton, InputAdornment, Alert, CircularProgress, LinearProgress, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const statesAndUTs = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", 
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Lakshadweep"
];  

const userTypes = ["None", "Central User", "Scheme Admin", "State User", "District User", "STL", "Supervisor"];

const RegisterPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const validationSchema = Yup.object().shape({
    userType: Yup.string().required("User Type is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().required("District is required"),
    authority: Yup.string().required("Authority is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required("Phone number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    staffId: Yup.string().required("Staff ID is required"),
    department: Yup.string().required("Department Name is required"),
    address: Yup.string().required("Address is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      userType: "",
      state: "",
      district: "",
      authority: "",
      name: "",
      phone: "",
      email: "",
      staffId: "",
      department: "",
      address: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Registration Data:", values);
        setIsSubmitting(false);
        setSuccessMessage("✅ Registration successful!");
      }, 2000);
    },
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #768a51, #768a51)", // Dark sap green ombre

        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ background: "rgba(200, 248, 250, 0.8)", borderRadius: 2, padding: 4, boxShadow: 3, width: "100%", maxWidth: "700px" }}>
        {/* Header Section with Images */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Box textAlign="center">
            <img src="/images/indian-emblem.jpeg" alt="Emblem of India" style={{ height: "70px", marginBottom: "10px" }} />
            <Typography variant="h6" fontWeight="bold">
              Government of India
            </Typography>
            <Typography variant="subtitle1">Ministry of Agriculture and Farmers Welfare</Typography>
            <Typography variant="body2">Department of Agriculture and Farmers Welfare</Typography>
          </Box>
          <Box>
            <img src="/images/soil-health-card.png" alt="Soil Health Card" style={{ height: "100px", marginLeft: "10px" }} />
            <img src="/images/soil-logo.png" alt="Soil Logo" style={{ height: "100px", marginLeft: "125px" }} />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
          User Registration
        </Typography>

        {/* Success Message */}
        {successMessage && <Alert severity="success" sx={{ my: 2 }}>{successMessage}</Alert>}

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* User Type Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  name="userType"
                  value={formik.values.userType}
                  onChange={formik.handleChange}
                  error={formik.touched.userType && Boolean(formik.errors.userType)}
                >
                  {userTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.userType && formik.errors.userType && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {formik.errors.userType}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* State Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                >
                  {statesAndUTs.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.state && formik.errors.state && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {formik.errors.state}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Other Fields */}
            {["district", "authority", "name", "phone", "email", "staffId", "department", "address", "username"].map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                />
              </Grid>
            ))}

            {/* Password Fields + Strength Meter */}
            {["password", "confirmPassword"].map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field === "password" ? "Password" : "Confirm Password"}
                  name={field}
                  type={showPassword ? "text" : "password"}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {field === "password" && <LinearProgress variant="determinate" value={getPasswordStrength(formik.values.password)} />}
              </Grid>
            ))}

            {/* Buttons */}
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Back to Login Button */}
        <Grid item xs={12} textAlign="center" mt={2}>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
            Back to Login
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegisterPage;
