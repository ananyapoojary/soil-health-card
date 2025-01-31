import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// List of Indian States & Union Territories
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Form Validation Schema
  const validationSchema = Yup.object().shape({
    userType: Yup.string().required("User Type is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().required("District is required"),
    authority: Yup.string().required("Authority is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    staffId: Yup.string().required("Staff ID is required"),
    department: Yup.string().required("Department Name is required"),
    address: Yup.string().required("Address is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
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
      console.log("Registration Data:", values);
    },
  });

  return (
    <Container maxWidth="md">
      <Box mt={5} p={4} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h4" textAlign="center" gutterBottom>
          User Registration
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* User Type */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  name="userType"
                  value={formik.values.userType}
                  onChange={formik.handleChange}
                  error={formik.touched.userType && Boolean(formik.errors.userType)}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="central-user">Central User</MenuItem>
                  <MenuItem value="scheme-admin">Scheme Admin</MenuItem>
                  <MenuItem value="state-user">State User</MenuItem>
                  <MenuItem value="district-user">District User</MenuItem>
                  <MenuItem value="stl">STL</MenuItem>
                  <MenuItem value="supervisor">Supervisor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* State */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Other Inputs */}
            {[
              { name: "district", label: "District" },
              { name: "authority", label: "Authority" },
              { name: "name", label: "Full Name" },
              { name: "phone", label: "Phone Number", type: "number" },
              { name: "email", label: "Email", type: "email" },
              { name: "staffId", label: "Staff ID" },
              { name: "department", label: "Department Name" },
              { name: "address", label: "Address" },
              { name: "username", label: "Username" },
            ].map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                  helperText={formik.touched[field.name] && formik.errors[field.name]}
                />
              </Grid>
            ))}

            {/* Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Register
              </Button>
              <Button variant="text" color="secondary" onClick={() => navigate("/login")} sx={{ mt: 2, ml: 2 }}>
                Back to Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
