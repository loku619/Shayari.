import React from 'react';
import Header from './components/Header';
import PoetryGrid from './components/PoetryGrid';
import Footer from './components/Footer';
import { CssBaseline, Container } from '@mui/material';
import backgroundTheme from './assets/images/backgroundTheme.png'
function App() {
  return (
    <>
    <CssBaseline />
    <Header />
  
    {/* Full-Page Gradient Background */}
    <div
      style={{
        background: "linear-gradient(135deg, #b5b4b4, #b5b4b4)", // 3D Gradient Effect
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  
    {/* Content */}
    <Container
      maxWidth="lg"
      style={{
        marginTop: "20px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <PoetryGrid />
    </Container>
  
    <Footer />
  </>
  
      
  );
}

export default App;