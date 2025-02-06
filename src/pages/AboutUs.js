import React from "react";
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Button, 
  useMediaQuery, 
  useTheme,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Reusable header button component
  const HeaderButton = ({ onClick, children, ...props }) => (
    <Button
      variant="text"
      size="large"
      sx={{ mx: 1, fontWeight: 600 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Grid container spacing={3} alignItems="center" sx={{ mb: 6 }}>
        {/* Government Branding */}
        <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/images/indian-emblem.jpeg"
            alt="Government of India Emblem"
            sx={{ 
              height: 80,
              mr: 2,
              borderRadius: 1,
              boxShadow: 2
            }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              Government of India
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ministry of Agriculture and Farmers Welfare
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Department of Agriculture and Farmers Welfare
            </Typography>
          </Box>
        </Grid>

        {/* Soil Health Logos */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Grid container spacing={1}>
            {["soil-logo.png", "soil-health-card.png"].map((img, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  component="img"
                  src={`/images/${img}`}
                  alt={`Soil Health ${index === 0 ? "Logo" : "Card"}`}
                  sx={{
                    height: 90,
                    borderRadius: 2,
                    boxShadow: 3,
                    objectFit: "contain"
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Navigation Controls */}
        <Grid item xs={12} md={3} sx={{ 
          display: "flex",
          justifyContent: isSmallScreen ? "center" : "flex-end",
          gap: 1
        }}>
          <HeaderButton onClick={() => navigate("/login")}>
            Login
          </HeaderButton>
          <Button 
            variant="contained" 
            color="primary"
            disabled
            aria-current="page"
          >
            About Us
          </Button>
          <HeaderButton onClick={() => navigate("/contact")}>
            Contact
          </HeaderButton>
        </Grid>
      </Grid>

      {/* Hero Image */}
      <Box sx={{ 
        mb: 8,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 3
      }}>
        <Box
          component="img"
          src="/images/abt-img.jpg"
          alt="Farmers discussing soil health"
          sx={{
            width: "110%",
            height: { xs: 200, md: 400 },
            objectFit: "cover"
          }}
        />
      </Box>

      {/* Main Content */}
      <Box sx={{ maxWidth: 800, mx: "auto", px: { xs: 2, md: 0 } }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary.main">
          About Soil Health Card Scheme
        </Typography>
        
        <Typography variant="h5" align="center" gutterBottom sx={{ 
          fontStyle: "italic",
          color: "success.main",
          mb: 6
        }}>
          "Swasth Dharaa. Khet Haraa." - Healthy Earth. Green Farm.
        </Typography>

        {/* Content Sections */}
        {[
          {
            title: "Scheme Overview",
            content: `A Soil Health Card provides crucial information about soil health status and helps track changes over time. Implemented by the Government of India, this initiative empowers farmers with scientific insights for better crop management. Launched in 2015, the scheme has revolutionized agricultural practices across the nation.`
          },
          {
            title: "Key Features",
            items: [
              "Comprehensive soil analysis report every 3 years",
              "Customized fertilizer recommendations",
              "Crop suitability analysis",
              "Digital record maintenance"
            ]
          },
          {
            title: "Farmer Benefits",
            items: [
              "Optimized fertilizer usage",
              "Increased crop yields",
              "Reduced production costs",
              "Sustainable farming practices"
            ]
          }
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              fontWeight: 700,
              color: "primary.dark"
            }}>
              {section.title}
            </Typography>

            {section.content && (
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                {section.content}
              </Typography>
            )}

            {section.items && (
              <List dense>
                {section.items.map((item, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body1" }}
                      sx={{ "&:before": { content: '"•  ", color: "primary.main"' } }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AboutUs;