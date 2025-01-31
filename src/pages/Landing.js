import React from "react";
import { Box, Button, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" py={3}>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="flex-start">
          <img src="/images/indian-emblem.jpeg" alt="Indian Emblem" style={{ height: "100px", marginRight: "10px" }} />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Government of India
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              Ministry of Agriculture and Farmers Welfare 
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              Department of Agriculture and Farmers Welfare
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <img src="/images/soil-logo.png" alt="Soil Logo" style={{ height: "120px" }} />
        </Grid>
        <Grid item xs={3} textAlign="center">
          <img src="/images/soil-health-card.png" alt="Soil Health Card" style={{ height: "120px" }} />
        </Grid>
        <Grid item xs={3} textAlign="right">
          <Button variant="contained" color="primary" size="large" onClick={() => navigate("/login")}>
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
            User Registration
          </Button>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Box>
      </Box>

      {/* Key Information Sections */}
      <Grid container spacing={4} mt={6}>
        {[
          {
            title: "What is the Soil Health Card?",
            description: "A government initiative to provide farmers with detailed soil quality reports, ensuring better yield and sustainability."
          },
          {
            title: "Benefits for Farmers",
            description: "Improves soil fertility, increases crop productivity, reduces fertilizer costs, and promotes environmentally sustainable farming."
          },
          {
            title: "How It Works?",
            description: "Step-by-step process: Sample collection → Testing → Report generation → Farmer advisory."
          }
        ].map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 3, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", p: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  {card.title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer Section */}
      <Box textAlign="center" mt={6} py={3} bgcolor="primary.main" color="white">
        <Typography variant="body1">&copy; 2025 Soil Health Card | Government of India</Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
