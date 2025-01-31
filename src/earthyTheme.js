import { createTheme } from '@mui/material/styles';

// Earthy tones palette
const earthyTheme = createTheme({
  palette: {
    primary: {
      main: '#6D4F33',  // earthy brown
    },
    secondary: {
      main: '#8B8D57',  // olive green
    },
    background: {
      default: '#F1F1F1',  // light beige
      paper: '#FFF8E1',    // warm beige
    },
    text: {
      primary: '#3E2723',  // dark brown
      secondary: '#8D6E63', // light brown
    },
  },
});

export default earthyTheme;
