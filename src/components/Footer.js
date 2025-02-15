import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect Mobile View

  return (
    <Box
      sx={{
        backgroundColor: "#310d20",
        color: "white",
        textAlign: "center",
        padding: isMobile ? "8px" : "12px", // Smaller padding on mobile
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography 
        variant={isMobile ? "body2" : "body1"} // Smaller text for mobile
      >
        © 2025 Ashiqistan. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
