// Landing.js
import React from "react";
import { Box, Button, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" py={2}>
        <Grid item xs={3} display="flex" alignItems="center">
          <img
            src="/images/indian-emblem.png"
            alt="Indian Emblem"
            style={{ height: "60px", marginRight: "15px" }}
          />
          <Typography variant="body1" fontWeight="bold">
            Government of India <br />
            Ministry of Agriculture and Farmers Welfare <br />
            Department of Agriculture and Farmers Welfare
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <img src="/images/soil-logo.png" alt="Soil Logo" style={{ height: "80px" }} />
        </Grid>
        <Grid item xs={3} textAlign="center">
          <img src="/images/soil-health-card.png" alt="Soil Health Card" style={{ height: "80px" }} />
        </Grid>
        <Grid item xs={3} textAlign="right">
          <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Grid>
      </Grid>

      {/* Hero Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" fontWeight="bold" color="primary">
          Soil Health Card: Ensuring Sustainable Agriculture
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={2}>
          Empowering Farmers with Scientific Soil Analysis
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={() => navigate("/register")} sx={{ mr: 2 }}>
            Get Your Soil Health Card
          </Button>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Box>
      </Box>

      {/* Key Information Sections */}
      <Grid container spacing={4} mt={6}>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="primary">
                What is the Soil Health Card?
              </Typography>
              <Typography variant="body1" mt={1}>
                A government initiative to provide farmers with detailed soil quality reports, ensuring better yield and
                sustainability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="primary">
                Benefits for Farmers
              </Typography>
              <Typography variant="body1" mt={1}>
                Improves soil fertility, increases crop productivity, reduces fertilizer costs, and promotes
                environmentally sustainable farming.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="primary">
                How It Works?
              </Typography>
              <Typography variant="body1" mt={1}>
                Step-by-step process: Sample collection → Testing → Report generation → Farmer advisory.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box textAlign="center" mt={6} py={3} bgcolor="primary.main" color="white">
        <Typography variant="body1">&copy; 2025 Soil Health Card | Government of India</Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
