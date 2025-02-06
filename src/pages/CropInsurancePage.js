import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CropInsurancePage() {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Top Section */}
      <Box display="flex" justifyContent="space-between" padding={2}>
        <Typography variant="body1">WhatsApp Chatbot PMFBY - 7065514447</Typography>
        <Typography variant="body1">Krishi Rakshak Portal Helpline - 14447</Typography>
      </Box>

      {/* Government Section */}
      <Box textAlign="center" padding={2}>
        <Typography variant="h6">भारत सरकार</Typography>
        <Typography variant="h5">GOVERNMENT OF INDIA</Typography>
        <Typography variant="h6">कृषि एवं किसान कल्याण मंत्रालय</Typography>
        <Typography variant="h6">MINISTRY OF AGRICULTURE & FARMERS WELFARE</Typography>
      </Box>

      {/* PMFBY Section */}
      <Box textAlign="center" padding={2}>
        <Typography variant="h5">Pradhan Mantri Fasal Bima Yojana</Typography>
        <Typography variant="h6">Ministry of Agriculture and Farmers Welfare</Typography>
        <Box display="flex" justifyContent="center" gap={2} marginTop={2}>
          <Button variant="contained" color="primary" onClick={() => navigate('/login')}>Sign In</Button>
          <Button variant="contained" color="secondary" onClick={() => navigate('/register')}>Register</Button>
        </Box>
      </Box>

      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} centered variant="fullWidth">
        <Tab label="Home" />
        <Tab label="Documents" />
        <Tab label="Enrollment Partners" />
        <Tab label="Related Links" />
        <Tab label="Reports" />
        <Tab label="Dashboard" />
        <Tab label="Gallery" />
        <Tab label="About Us" />
      </Tabs>

      {/* Cards Section */}
      <Grid container spacing={2} padding={2}>
        {[
          {
            title: "Are you a farmer & want to apply for Crop Insurance? Then Click Below!",
            subtitle: "Apply for Crop Insurance by yourself",
            button: "Apply for Crop Insurance",
          },
          {
            title: "Do you want to know insurance premium before Crop Insurance? Then Click Below!",
            subtitle: "Know your Insurance Premium before",
            button: "Insurance Premium Calculator",
          },
          {
            title: "Want to check your policy status? Use your policy ID to check status.",
            subtitle: "Know your Application Status on every step",
            button: "Application Status",
          },
          {
            title: "Raise your Queries, tell us about your Grievances & Report loss of Crop. Call us at 14447",
            subtitle: "Tell us about your Grievances & Report loss of Crop.",
            button: "Krishi Rakshak Portal",
          },
          {
            title: "Know your Area's Weather Updates",
            subtitle: "Weather Information Network & Data System",
            button: "Weather Data",
          },
          {
            title: "For capturing & sharing crop photographs at different crop stages.",
            subtitle: "Collection of Real-time Observations and Photographs of Crops",
            button: "Crop Health Monitoring",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box 
              border={1} 
              padding={2} 
              textAlign="center" 
              sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.subtitle}</Typography>
              <Button variant="contained" color="primary">{item.button}</Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Other Links Section */}
      <Box padding={2}>
        <Typography variant="h6">Other Links</Typography>
        <Grid container spacing={2}>
          {["Tutorials", "Circulars", "Insurance Companies", "Bank Directory"].map((link, index) => (
            <Grid item key={index}>
              <Button variant="text">{link}</Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CropInsurancePage;
