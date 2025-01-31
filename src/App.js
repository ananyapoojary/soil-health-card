import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing.js";
import LoginPage from "./pages/Login.js";
import RegistrationPage from "./pages/Register.js";
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
