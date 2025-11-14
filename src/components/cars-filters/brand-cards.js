"use client";
import React, { useState, useRef } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Modal, IconButton, Chip, Button } from "@mui/material";
import Iconify from "../iconify";

const BrandCards = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const hoverTimerRef = useRef(null);

  const brands = [
    { 
      name: "Toyota", 
      logo: "/assets/toyota-logo.png", 
      count: "150+ Cars",
      description: "As one of the world's most reliable automotive brands, Toyota has been our trusted partner for years. We offer an extensive range of Toyota vehicles from the compact Corolla to the rugged Land Cruiser.",
      specialties: ["Wide variety of models", "Excellent fuel efficiency", "Strong resale value", "Trusted reliability"],
      popularity: "Most Popular"
    },
    { 
      name: "Honda", 
      logo: "/assets/honda-logo.png", 
      count: "120+ Cars",
      description: "Honda represents innovation and quality in the automotive world. We deal in Honda's full lineup, from the City and Civic sedans to the powerful CR-V SUVs.",
      specialties: ["Advanced engineering", "Sport-tuned performance", "Fuel-efficient engines", "Modern technology"],
      popularity: "Best Performance"
    },
    { 
      name: "Mercedes", 
      logo: "/assets/mercedes.png", 
      count: "80+ Cars",
      description: "Mercedes-Benz epitomizes luxury and performance. Our collection features premium Mercedes models that combine elegance with cutting-edge technology.",
      specialties: ["Luxury interiors", "Advanced safety features", "Premium build quality", "Status symbol"],
      popularity: "Premium Choice"
    },
    { 
      name: "BMW", 
      logo: "/assets/bmw.png", 
      count: "75+ Cars",
      description: "The ultimate driving machines. We offer BMW's finest vehicles known for their performance, luxury, and innovative features.",
      specialties: ["Dynamic performance", "Driver-focused design", "Cutting-edge tech", "Prestige brand"],
      popularity: "Performance Leader"
    },
    {
      name: "Suzuki",
      logo: "/assets/suzuki.jpg",
      count: "200+ Cars",
      description: "Suzuki dominates the Pakistani market with affordable, reliable vehicles. Our largest inventory includes Cultus, Wagon R, Swift, and Alto models.",
      specialties: ["Budget-friendly options", "Low maintenance costs", "Excellent mileage", "Easy parts availability"],
      popularity: "Best Value"
    },
    {
      name: "Hyundai",
      logo: "/assets/hyundai.jpg",
      count: "90+ Cars",
      description: "Hyundai brings modern design and advanced features at competitive prices. We stock popular models like Tucson, Elantra, and Sonata.",
      specialties: ["Modern styling", "Advanced features", "Great warranty", "Value for money"],
      popularity: "Rising Star"
    },
    { 
      name: "Kia", 
      logo: "/assets/kia_PNG46.png", 
      count: "85+ Cars",
      description: "Kia's transformation into a premium brand is remarkable. We offer Kia's stylish and feature-packed vehicles including Sportage, Stonic, and Picanto.",
      specialties: ["Bold design", "Feature-rich", "7-year warranty", "Great value"],
      popularity: "Design Winner"
    },
    { 
      name: "MG", 
      logo: "/assets/mg.png", 
      count: "60+ Cars",
      description: "MG Motors brings British heritage with Chinese efficiency. Our MG collection includes the popular HS, ZS, and MG5 models.",
      specialties: ["Affordable SUVs", "Modern features", "Spacious interiors", "Growing popularity"],
      popularity: "New Favorite"
    },
  ];

  const handleMouseEnter = (brand) => {
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    // Set timer for 3 seconds
    hoverTimerRef.current = setTimeout(() => {
      setSelectedBrand(brand);
      setOpenModal(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    // Clear timer when mouse leaves
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBrand(null);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #F0FDF4 0%, #FAF5FF 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/assets/serviceBg.webp)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.05,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          textAlign="center" 
          mb={8}
          sx={{
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "#000000",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: `
                -2px -2px 0 #FFFFFF,
                2px -2px 0 #FFFFFF,
                -2px 2px 0 #FFFFFF,
                2px 2px 0 #FFFFFF,
                0 0 10px rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            Brands We Deal In
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Premium selection from the world's most trusted automobile manufacturers
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {brands.map((brand, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                onMouseEnter={() => handleMouseEnter(brand)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid transparent",
                  transform: "translateY(4px)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s backwards`,
                  "@keyframes fadeInScale": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(30px) scale(0.95)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(4px) scale(1)",
                    },
                  },
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.05)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    border: "2px solid transparent",
                    background: "rgba(255, 255, 255, 0.95)",
                    "& .brand-logo": {
                      transform: "scale(1.15)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    textAlign: "center",
                    minHeight: 180,
                  }}
                >
                  <Box
                    className="brand-logo"
                    sx={{
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      transition: "transform 0.3s ease",
                      position: "relative",
                    }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    className="brand-name"
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#1F2937",
                      mb: 0.5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {brand.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {brand.count}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Brand Info Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="brand-modal-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: 700,
            bgcolor: "white",
            borderRadius: 4,
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            animation: "modalSlideIn 0.4s ease-out",
            "@keyframes modalSlideIn": {
              "0%": {
                opacity: 0,
                transform: "scale(0.9) translateY(40px)",
              },
              "100%": {
                opacity: 1,
                transform: "scale(1) translateY(0)",
              },
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(0, 0, 0, 0.05)",
              zIndex: 10,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#EF4444",
                color: "white",
                transform: "rotate(90deg)",
              },
            }}
          >
            <Iconify icon="eva:close-fill" sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Content */}
          {selectedBrand && (
            <>
              {/* Header Section */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
                  p: 5,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative circles */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                />

                {/* Popularity Badge */}
                <Chip
                  label={selectedBrand.popularity}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    mb: 3,
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />

                {/* Brand Logo */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 3,
                    p: 3,
                    bgcolor: "white",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={selectedBrand.logo}
                    alt={selectedBrand.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Brand Name & Count */}
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    mb: 1,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {selectedBrand.name}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {selectedBrand.count}
                </Typography>
              </Box>

              {/* Body Section */}
              <Box sx={{ p: 5 }}>
                {/* Description */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1F2937",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1.1rem",
                  }}
                >
                  How We Deal in {selectedBrand.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6B7280",
                    lineHeight: 1.8,
                    mb: 4,
                    fontSize: "1rem",
                  }}
                >
                  {selectedBrand.description}
                </Typography>

                {/* Specialties */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1F2937",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Why Choose {selectedBrand.name}?
                </Typography>
                <Grid container spacing={2}>
                  {selectedBrand.specialties.map((specialty, idx) => (
                    <Grid item xs={6} key={idx}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                        }}
                      >
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Iconify
                            icon="eva:checkmark-fill"
                            sx={{ color: "white", fontSize: 14 }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: "#374151",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                          }}
                        >
                          {specialty}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* CTA Button */}
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<Iconify icon="eva:arrow-forward-fill" />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
                      color: "white",
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: "0 4px 20px rgba(147, 51, 234, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #059669 0%, #7E22CE 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 30px rgba(147, 51, 234, 0.4)",
                      },
                    }}
                  >
                    View {selectedBrand.name} Cars
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default BrandCards;

