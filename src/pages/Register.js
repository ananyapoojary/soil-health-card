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
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// Complete list of Indian States & Union Territories
const statesAndUTs = [
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    email: Yup.string().email("Invalid email format").required("Email is required"),
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
    <Container maxWidth="md" sx={{
      background: "linear-gradient(to right, #a8e063, #56ab2f)",
      borderRadius: 3,
      padding: 4,
      boxShadow: 3,
      mt: 5,
    }}>
      <Box p={4} bgcolor="white" borderRadius={2}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Government of India
        </Typography>
        <Typography variant="h6" textAlign="center" gutterBottom>
          Ministry of Agriculture and Farmers Welfare
        </Typography>
        <Typography variant="h5" textAlign="center" gutterBottom>
          User Registration
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
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
                    <MenuItem key={index} value={state}>{state}</MenuItem>
                  ))}
                </Select>
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

            {/* Password Fields */}
            {["password", "confirmPassword"].map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field === "password" ? "Password" : "Confirm Password"}
                  name={field}
                  type={field === "password" ? (showPassword ? "text" : "password") : (showConfirmPassword ? "text" : "password")}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => field === "password" ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}>
                          {field === "password" ? (showPassword ? <VisibilityOff /> : <Visibility />) : (showConfirmPassword ? <VisibilityOff /> : <Visibility />)}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            ))}

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
