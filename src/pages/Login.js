import { Container, TextField, Button, Typography, MenuItem, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      userType: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userType: Yup.string().required("User Type is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Details:", values);
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth select label="User Type" name="userType"
            value={formik.values.userType} onChange={formik.handleChange}
            error={formik.touched.userType && Boolean(formik.errors.userType)}
            helperText={formik.touched.userType && formik.errors.userType}
            margin="normal"
          >
            <MenuItem value="patient">Patient</MenuItem>
            <MenuItem value="doctor">Doctor</MenuItem>
          </TextField>

          <TextField fullWidth label="Email" name="email" type="email"
            value={formik.values.email} onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />

          <TextField fullWidth label="Password" name="password" type="password"
            value={formik.values.password} onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
          />

          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </Box>
        </form>

        <Box mt={2}>
          <Button onClick={() => navigate("/register")} variant="text" color="secondary">
            New User? Register Here
          </Button>
        </Box>

        <Box mt={2}>
          <Button onClick={() => navigate(-1)} variant="outlined" color="primary">
            Go Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
