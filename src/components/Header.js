import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/images/logo.png";
import Logo1 from "../assets/images/Logo1.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect Mobile View

  return (
    <AppBar style={{ backgroundColor: "#310d20" }} position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: isMobile ? 30 : 40, marginRight: 10, borderRadius: "10px" }} 
          />
          
          {/* Hide title on extra small screens */}
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Ashiqistan - The Nation of Lovers
          </Typography>
        </Box>

        {/* Profile Avatar */}
        <Avatar
          src={Logo1}
          alt="Profile"
          sx={{ 
            cursor: "pointer", 
            width: isMobile ? 30 : 40, 
            height: isMobile ? 30 : 40 
          }} 
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
