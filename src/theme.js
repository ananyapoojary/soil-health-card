import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",  // Earthy green
    },
    secondary: {
      main: "#8BC34A",  // Light green
    },
    background: {
      default: "#E8F5E9", // Nature-inspired background
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
