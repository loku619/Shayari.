import React from 'react';
import { Grid, Paper, Typography, Box, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './CustomSwiper.css'; // Custom CSS for Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme } from "@mui/material/styles";

// Import your images (adjust paths as needed)
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from "../assets/images/1734094059523.jpg";
import image5 from "../assets/images/1734229451580.jpg";
import image6 from "../assets/images/1734315287964.jpg";
import image7 from "../assets/images/1734409474380.jpg";
import image8 from "../assets/images/1734499007979.jpg";
import image9 from "../assets/images/1734585282126.jpg";
import image10 from "../assets/images/1734761995633.jpg";
import image11 from "../assets/images/1734796361208.jpg";
import image12 from "../assets/images/1734868415403.jpg";
import image13 from "../assets/images/1734932912361.jpg";
import image14 from "../assets/images/1734965749270.jpg";
import image15 from "../assets/images/1735021242783.jpg";
import image16 from "../assets/images/1735572498222.jpg";
import image17 from "../assets/images/1735664903227.jpg";
import image18 from "../assets/images/1735797598265.jpg";
import image19 from "../assets/images/1735910129844.jpg"; 
import image20 from "../assets/images/1736003139095.jpg";

const poetryImages = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image6 },
  { id: 7, src: image7 },
  { id: 8, src: image8 },
  { id: 9, src: image9 },
  { id: 10, src: image10 },
  { id: 11, src: image11 },
  { id: 12, src: image12 },
  { id: 13, src: image13 },
  { id: 14, src: image14 },
  { id: 15, src: image15 },
  { id: 16, src: image16 },
  { id: 17, src: image17 },
  { id: 18, src: image18 },
  { id: 19, src: image19 },
  { id: 20, src: image20 }
];

const PoetryGrid = () => {
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

return (
  <div style={{ padding: "10px", position: "relative" }}>
    {/* Recent Posts Section */}
    <Box textAlign="center" mb={4}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        gutterBottom
        sx={{
          display: "inline-block",
          borderBottom: "4px solid #d81b60",
          color: "black",
        }}
      >
        🌿 Recent Posts...
      </Typography>
    </Box>

    {/* Responsive Grid Layout */}
    <Grid container spacing={isMobile ? 2 : 4}>
      {poetryImages.slice(-3).map((poem) => (
        <Grid item key={poem.id} xs={12} sm={6} md={4}>
          <Paper
            elevation={5}
            sx={{
              padding: "12px",
              textAlign: "center",
              cursor: "pointer",
              background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
              borderRadius: "12px",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={poem.src}
              alt={`Poem ${poem.id}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
              }}
              className="poetry-image"
            />
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Swiper Section */}
    <Box textAlign="center" mt={5} mb={2}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        gutterBottom
        sx={{
          display: "inline-block",
          borderBottom: "4px solid #d81b60",
          color: "black",
        }}
      >
        📜 More Poetry
      </Typography>
    </Box>

    {/* Swiper Carousel */}
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Custom Navigation Buttons */}
      <Box
        className="swiper-button-prev"
        sx={{
          position: "absolute",
          left: isMobile ? "-10px" : "-50px", // Adjust for mobile
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.8)",
          padding: isMobile ? "10px" : "15px",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { background: "#ddd", transform: "scale(1.2)" },
        }}
      >
        ❮
      </Box>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3} // Adjust slides per view
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        loop={true}
        style={{ marginBottom: "20px", width: "100%" }}
      >
        {poetryImages.slice(0, -3).map((poem) => (
          <SwiperSlide key={poem.id}>
            <img
              src={poem.src}
              alt={`Slide ${poem.id}`}
              className="swiper-image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        className="swiper-button-next"
        sx={{
          position: "absolute",
          right: isMobile ? "-10px" : "-50px", // Adjust for mobile
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.8)",
          padding: isMobile ? "10px" : "15px",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { background: "#ddd", transform: "scale(1.2)" },
        }}
      >
        ❯
      </Box>
    </Box>
  </div>
);
};

export default PoetryGrid;