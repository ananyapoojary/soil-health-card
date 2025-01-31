import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => { console.log("Registered User:", values); },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField fullWidth label="Name" name="name" value={formik.values.name} onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name} margin="normal" />

          <TextField fullWidth label="Email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email} margin="normal" />

          <TextField fullWidth label="Password" name="password" type="password" value={formik.values.password} onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password} margin="normal" />

          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">Register</Button>
          </Box>
        </form>

        <Box mt={2}>
          <Button onClick={() => navigate(-1)} variant="outlined" color="primary">
            Go Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
