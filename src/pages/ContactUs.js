import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth < 600; // Responsive check

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="xl">
      {/* Header Section */}
      <Grid container spacing={5} alignItems="center" justifyContent="center" py={3}>
        {/* Government Emblem & Title */}
        <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent={isSmallScreen ? "center" : "flex-start"}>
          <img
            src="/images/indian-emblem.jpeg"
            alt="Indian Emblem"
            style={{ height: "80px", marginRight: "10px", borderRadius: "5px" }}
          />
          <Box textAlign="center">
            <Typography variant="h4" fontWeight="bold" color="black">Government of India</Typography>
            <Typography variant="h5" fontWeight="bold" color="black">Ministry of Agriculture and Farmers Welfare</Typography>
            <Typography variant="h6" fontWeight="bold" color="black">Department of Agriculture and Farmers Welfare</Typography>
          </Box>
        </Grid>

        {/* Soil Health Card Logos */}
        <Grid item xs={6} md={2} textAlign="center">
          <img
            src="/images/soil-logo.png"
            alt="Soil Health Card Logo"
            style={{ height: "100px", borderRadius: "10px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>

        <Grid item xs={6} md={3} textAlign="center">
          <img
            src="/images/soil-health-card.png"
            alt="Soil Health Card Icon"
            style={{ height: "100px", borderRadius: "10px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>

        {/* Navigation Buttons */}
        <Grid item xs={12} md={5} display="flex" justifyContent={isSmallScreen ? "center" : "flex-end"} alignItems="center">
          <Button variant="text" color="secondary" size="large" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="text" color="secondary" sx={{ mx: 1 }} onClick={() => navigate("/about")}>
            About Us
          </Button>
          <Button variant="contained" color="primary" sx={{ mx: 1 }} onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
          <Button variant="text" color="secondary" sx={{ mx: 1 }} onClick={() => navigate("/")}>
            Dashboard
          </Button>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="DAC & FW and ICAR Officers" />
          <Tab label="NIC Officers" />
          <Tab label="Agriculture/Horticulture Ministers and Secretaries of States" />
          <Tab label="State Nodal Officers" />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ mt: 2 }}>
          {selectedTab === 0 && (
            <Typography variant="body1">
              {/* Content for DAC & FW and ICAR Officers */}
              Details about DAC & FW and ICAR Officers.
            </Typography>
          )}
          {selectedTab === 1 && (
            <Typography variant="body1">
              {/* Content for NIC Officers */}
              Details about NIC Officers.
            </Typography>
          )}
          {selectedTab === 2 && (
            <Typography variant="body1">
              {/* Content for Agriculture/Horticulture Ministers and Secretaries of States */}
              Details about Agriculture/Horticulture Ministers and Secretaries of States.
            </Typography>
          )}
          {selectedTab === 3 && (
            <Typography variant="body1">
              {/* Content for State Nodal Officers */}
              Details about State Nodal Officers.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
