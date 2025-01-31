import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, PowerSettingsNewRounded } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userType: Yup.string().required("User type is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
});

const Login = () => {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Track login state

  const formik = useFormik({
    initialValues: {
      userType: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Login Attempt:", values);
      setMessage("Successfully logged in!");
      setIsLoggedIn(true); // ✅ Mark as logged in
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          p={4}
          boxShadow={6}
          borderRadius={3}
          bgcolor="rgba(255, 255, 255, 0.7)" // ✅ Slightly more visible background
          sx={{ width: "100%", maxWidth: 480 }}
        >
          {/* Header Section */}
          <Box textAlign="center" my={2}>
            <img src="/images/indian-emblem.jpeg" alt="Emblem" style={{ height: "80px", marginBottom: "10px" }} />
            <Typography variant="h5" fontWeight="bold">
              Government of India
            </Typography>
            <Typography variant="h6">Ministry of Agriculture and Farmers Welfare</Typography>
            <Typography variant="body1">Department of Agriculture and Farmers Welfare</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Sign In Header */}
          <Box display="flex" alignItems="center" justifyContent="center">
            <PowerSettingsNewRounded sx={{ fontSize: 30, color: "green", mr: 1 }} />
            <Typography variant="h4" textAlign="center" fontWeight="bold">
              Sign In
            </Typography>
          </Box>

          {/* Success Message */}
          {isLoggedIn && (
            <Alert severity="success" sx={{ my: 2, fontSize: "1rem", textAlign: "center" }}>
              ✅ Successfully logged in!
            </Alert>
          )}

          <form onSubmit={formik.handleSubmit}>
            {/* User Type Dropdown */}
            <FormControl fullWidth margin="normal" error={formik.touched.userType && Boolean(formik.errors.userType)}>
              <InputLabel>User Type</InputLabel>
              <Select name="userType" value={formik.values.userType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <MenuItem value="" disabled>Select User Type</MenuItem>
                <MenuItem value="central_user">Central User</MenuItem>
                <MenuItem value="scheme_admin">Scheme Admin</MenuItem>
                <MenuItem value="state_user">State User</MenuItem>
                <MenuItem value="district_user">District User</MenuItem>
                <MenuItem value="stl">STL</MenuItem>
                <MenuItem value="supervisor">Supervisor</MenuItem>
              </Select>
              {formik.touched.userType && formik.errors.userType && <FormHelperText>{formik.errors.userType}</FormHelperText>}
            </FormControl>

            {/* Email Input */}
            <TextField
              fullWidth
              label="Username/Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password Input with Show/Hide Feature */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
              disabled={!formik.isValid} // ✅ Enabled only when email format is correct
            >
              Login
            </Button>
          </form>

          <Divider sx={{ my: 3 }} />

          {/* Registration Button */}
          <Box textAlign="center" mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              href="/register"
              fullWidth
              sx={{
                mt: 1,
                fontWeight: "bold",
                py: 1.2,
                borderColor: "#1976d2", // ✅ Makes it more visible
                color: "#1976d2",
                "&:hover": { backgroundColor: "#e3f2fd" }, // ✅ Adds hover effect
              }}
            >
              User Registration
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
