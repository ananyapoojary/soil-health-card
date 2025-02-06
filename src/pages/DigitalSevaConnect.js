import React, { useState } from "react";
import { 
  Box, Button, TextField, Typography, Grid, InputAdornment, 
  IconButton, Card, Snackbar, Alert 
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";

const DigitalSevaConnect = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    setSuccessMessage(true);
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="#e3f2fd" // Light blue background
    >
      <Grid container spacing={4} maxWidth="lg">
        
        {/* Left Side - Info Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            p: 5, 
            background: "linear-gradient(135deg, #1976d2, #1e88e5)", 
            color: "white", 
            height: "100%", 
            borderRadius: 3, 
            boxShadow: 5,
            minHeight: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <Typography variant="h3" fontWeight="bold">
              Welcome to Digital Seva Connect
            </Typography>
            <Typography variant="h5" mt={2} fontWeight="medium">
              Gateway to CSC Network!
            </Typography>
            <Typography variant="body1" mt={3} fontSize={18}>
              Digital Seva Connect is a secure authentication system for connecting our users to services available on the Digital Seva portal. Enter your username and password here to authenticate your log-in and enjoy seamless access to Digital Seva portal.
            </Typography>
          </Card>
        </Grid>

        {/* Right Side - Login Card (Now Blue Themed) */}
        <Grid item xs={12} md={6}>
          <Card 
            sx={{ 
              p: 5, 
              textAlign: "center", 
              position: "relative", 
              borderRadius: 3, 
              boxShadow: 5, 
              background: "linear-gradient(135deg, #ffffff, #bbdefb)", 
              minHeight: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            {/* Digital Seva Image */}
            <img
              src="/images/digital-seva.jpeg"
              alt="Digital Seva"
              style={{ position: "absolute", top: 20, right: 20, width: 100, height: 100 }}
            />
            
            <Typography variant="h4" fontWeight="bold" color="primary">
              Login
            </Typography>

            {/* Username / Email Field */}
            <TextField
              fullWidth
              label="Username or Email"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Forgot Password */}
            <Typography variant="body2" color="primary" sx={{ mt: 1, cursor: "pointer" }}>
              Forgot Password?
            </Typography>

            {/* Sign In Button (Disabled until both fields are filled) */}
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 3, p: 1.5, fontSize: 16, borderRadius: 2 }} 
              onClick={handleLogin}
              disabled={!username || !password} 
            >
              Sign In
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Success Message */}
      <Snackbar 
        open={successMessage} 
        autoHideDuration={3000} 
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setSuccessMessage(false)} severity="success" sx={{ width: '100%' }}>
          Successfully logged in!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DigitalSevaConnect;
