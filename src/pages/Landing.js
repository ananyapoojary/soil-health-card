import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#A5D6A7", borderRadius: 3 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Health Card System
        </Typography>
        <Typography variant="body1" paragraph>
          A Health Card provides seamless access to medical records and healthcare services efficiently.
        </Typography>
        <Box mt={3}>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ transition: "0.3s", "&:hover": { backgroundColor: "#689F38" } }} 
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
