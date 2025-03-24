import React from "react";

import MembershipForm from "./components/MembershipForm";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B4513",
    },
    secondary: {
      main: "#FFD700", 
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MembershipForm />
      </div>
    </ThemeProvider>
  );
}

export default App;