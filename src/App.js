import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing.js";
import LoginPage from "./pages/Login.js";
import RegistrationPage from "./pages/Register.js";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CropInsurancePage from "./pages/CropInsurancePage";
import DigitalSevaConnect from "./pages/DigitalSevaConnect"; // Import the new page
import IntegratedFertilizerManagementSystem from "./pages/IntegratedFertilizerManagementSystem"; // Import the new page
import { ThemeProvider } from "@mui/material/styles";
import earthyTheme from './earthyTheme'; // Import your custom theme
import OldIFMS from './pages/OldIFMS';
import NewIFMS from './pages/NewIFMS';
import PMKSK from './pages/PMKSK';
import ComplaintSystem from './pages/ComplaintSystem';

const App = () => {
  return (
    <ThemeProvider theme={earthyTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/crop-insurance" element={<CropInsurancePage />} />
          <Route path="/digital-seva-connect" element={<DigitalSevaConnect />} />
          <Route path="/old-ifms" element={<OldIFMS />} />
          <Route path="/new-ifms" element={<NewIFMS />} />
          <Route path="/pmksk" element={<PMKSK />} />
          <Route path="/complaint-system" element={<ComplaintSystem />} />
          <Route path="/IntegratedFertilizerManagementSystem" element={<IntegratedFertilizerManagementSystem />} /> {/* New route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
