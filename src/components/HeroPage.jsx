import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import cashewLogo from "./cashew_logo.PNG"; // Replace with actual logo path

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#007000", // Green color from the image
    },
    secondary: {
      main: "#e63900", // Red color from the image
    },
  },
});

const HeroPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#fff",
          textAlign: "center",
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="h4" sx={{ color: "primary.main", fontWeight: "bold" }}>
          NATIONAL APEX OF
        </Typography>
        <Typography variant="h5" sx={{ color: "secondary.main", fontWeight: "bold" }}>
          CASHEW FARMERS, PROCESSORS & MARKETING COOPERATIVE LTD.
        </Typography>
        <Box component="img" src={cashewLogo} alt="Cashew Logo" sx={{ width: 150, my: 3 }} />
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          MEMBERSHIP REGISTRTION FORM
        </Typography>
        <Typography variant="body1" sx={{ color: "black", maxWidth: 600, mx: "auto", mt: 1 }}>
          Join our cooperative to connect with cashew farmers, processors, and marketers across Nigeria.
          Be part of a growing community that empowers agriculture and trade.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" sx={{ color: "black", fontWeight: "bold" }}>
            Tel: 07054000395, 08168497175
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            Email: <a href="mailto:nacofamp@proton.me">nacofamp@proton.me</a>
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            5-7, AGY Warehouse Complex old Egume Road, Anyigba, Dekina Kogi State
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HeroPage;
