import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing.js";
import LoginPage from "./pages/Login.js";
import RegistrationPage from "./pages/Register.js";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { ThemeProvider } from "@mui/material/styles";
import earthyTheme from './earthyTheme'; // Import your custom theme



const App = () => {
  return (
    <ThemeProvider theme={earthyTheme}>  {/* Wrap your components with ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
