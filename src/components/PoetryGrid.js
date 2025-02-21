import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, useMediaQuery } from '@mui/material';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './CustomSwiper.css'; // Custom CSS for Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images (adjust paths as needed)
import image1 from '../assets/images/image1.png';
//import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
// import image11 from "../assets/images/";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";
import image15 from "../assets/images/image15.png";
import image16 from "../assets/images/image16.png";
import image17 from "../assets/images/image17.png";
import image18 from "../assets/images/image18.png";
import image19 from "../assets/images/image19.png"; 
// import image20 from "../assets/images/1736003139095.jpg";

const poetryImages = [
  { id: 1, src: image1 },
//  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image6 },
  { id: 7, src: image7 },
  { id: 8, src: image8 },
  { id: 9, src: image9 },
  { id: 10, src: image10 },
  // { id: 11, src: image11 },
  { id: 12, src: image12 },
  { id: 13, src: image13 },
  { id: 14, src: image14 },
  { id: 15, src: image15 },
  { id: 16, src: image16 },
  { id: 17, src: image17 },
  { id: 18, src: image18 },
  { id: 19, src: image19 },
  // { id: 20, src: image20 }
];

const PoetryGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [enlargedImage, setEnlargedImage] = useState(null);

  const toggleEnlarge = (id) => {
    setEnlargedImage(enlargedImage === id ? null : id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <div style={{ padding: "10px", position: "relative" }}>
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

        <Grid container spacing={isMobile ? 2 : 4}>
          {poetryImages.slice(-3).map((poem) => (
            <Grid item key={poem.id} xs={12} sm={6} md={4}>
              <Paper
                elevation={5}
                sx={{
                  padding: "8px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  position: "relative",
                  zIndex: enlargedImage === poem.id ? 999 : 1, // High z-index when enlarged
                //  transform: enlargedImage === poem.id ? "scale(1.3)" : "scale(1)",
                  boxShadow:
                    enlargedImage === poem.id
                      ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
                onClick={() => toggleEnlarge(poem.id)}
              >
                <Zoom>
                  <img
                    src={poem.src}
                    alt={`Poem ${poem.id}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Zoom>
              </Paper>
            </Grid>
          ))}
        </Grid>

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
      </div>

      <Slider {...settings}>
        {poetryImages.slice(0, -3).map((image, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Zoom>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PoetryGrid;