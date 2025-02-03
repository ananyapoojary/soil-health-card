import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth < 600; // Responsive check

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
          <Button variant="contained" color="primary" sx={{ mx: 2 }} onClick={() => navigate("/about")}>
            About Us
          </Button>
          <Button variant="text" color="secondary" sx={{ mx: 1 }} onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
          <Button variant="text" color="secondary" sx={{ mx: 1 }} onClick={() => navigate("/")}>
            Dashboard
          </Button>
        </Grid>
      </Grid>

      {/* Banner Image */}
      <Box sx={{ width: "100%", textAlign: "center", mb: 4 }}>
        <img
          src="/images/abt-img.jpg"
          alt="About Soil Health Card"
          style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>

      {/* About Soil Health Card Scheme */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2} color="primary">
          ABOUT SOIL HEALTH CARD SCHEME
        </Typography>
        <Typography variant="h5" color="green" textAlign="center" fontStyle="italic" fontWeight="bold">
          "Swasth Dharaa. Khet Haraa." - Healthy Earth. Green Farm.
        </Typography>

        <Typography variant="body1" mt={3} paragraph>
          A Soil Health Card is used to assess the current status of soil health and, when used over time, to determine changes in soil health that are affected by land management. A Soil Health Card displays soil health indicators and associated descriptive terms. The indicators are typically based on farmers' practical experience and knowledge of local natural resources. The card lists soil health indicators that can be assessed without the aid of technical or laboratory equipment.
        </Typography>

        <Typography variant="body1" paragraph>
          Soil Health Card (SHC) is a Government of India’s scheme promoted by the Department of Agriculture & Co-operation under the Ministry of Agriculture and Farmers’ Welfare. It is being implemented through the Department of Agriculture of all the States and Union Territory Governments. The Soil Health Card Scheme was launched by Hon'ble Prime Minister Shri Narendra Modi on 19.02.2015 at Suratgarh, Sri Ganganagar, Rajasthan. The scheme is highly beneficial for farmers across India.
        </Typography>

        {/* Key Features Section */}
        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="primary">
            Key Features of the Soil Health Card Scheme
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                <strong>Soil Report:</strong> Farmers receive a report in the form of a soil card, containing all details about their farm’s soil.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Regular Updates:</strong> Each farm receives a soil health card once every 3 years.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* Benefits Section */}
        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="primary">
            Benefits of the Soil Health Card Scheme
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Typography variant="body1">
                Farmers will get a proper soil health record, allowing them to plan future crops and land use efficiently.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The soil card provides insights into nutrient deficiencies and suggests suitable crops and fertilizers, leading to improved crop yield.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
