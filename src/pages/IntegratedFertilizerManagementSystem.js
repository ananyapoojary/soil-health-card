import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { ManageAccountsSharp } from "@mui/icons-material"; // for the "m" letter
import { useNavigate } from "react-router-dom";

const IntegratedFertilizerManagementSystem = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Government Section */}
      <Box textAlign="center" padding={2}>
        <img src="/images/emblem.png" alt="Indian Emblem" width="100" />
        <Typography variant="h6">भारत सरकार</Typography>
        <Typography variant="h5">GOVERNMENT OF INDIA</Typography>
        <Typography variant="h6">DEPARTMENT OF FERTILIZERS</Typography>
      </Box>

      {/* Welcome Section */}
      <Box textAlign="center" padding={2}>
        <Typography variant="h4">Welcome</Typography>
        <Typography variant="h5">Integrated Fertilizer Management System</Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          <span style={{ color: "darkblender" }}>i</span>
          <span style={{ color: "black" }}>f</span>
          <span style={{ color: "green" }}>
            <ManageAccountsSharp fontSize="large" />
            m
          </span>
          <span style={{ color: "darkgreen" }}>s</span>
        </Typography>
      </Box>

      {/* Button Box */}
      <Box padding={2}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate("/old-ifms")}
            >
              Old iFMS System
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => navigate("/new-ifms")}
            >
              New iFMS System
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={() => navigate("/pmksk")}
            >
              PMKSK Module
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={() => navigate("/complaint-system")}
            >
              Complaint System
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IntegratedFertilizerManagementSystem;
