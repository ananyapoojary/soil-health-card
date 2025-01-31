import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
        <Box display="flex" alignItems="center">
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
        </Box>
        <img
          src="/images/soil-health-card.png"
          alt="Soil Health Card"
          style={{ height: "80px" }}
        />
        <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
