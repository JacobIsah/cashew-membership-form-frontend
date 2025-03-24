import React from "react";

import MembershipForm from "./components/MembershipForm";
import HeroPage from "./components/HeroPage";
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
        <HeroPage />
        <MembershipForm />
      </div>
    </ThemeProvider>
  );
}

export default App;