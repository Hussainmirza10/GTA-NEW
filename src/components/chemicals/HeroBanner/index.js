"use client";
import React from "react";
import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import Iconify from "src/components/iconify";

const HeroBanner = () => {
  const features = [
    {
      icon: "mdi:flask",
      title: "Premium Quality",
      description: "Industry-leading formulations"
    },
    {
      icon: "mdi:shield-check",
      title: "Certified Products",
      description: "100% authentic & tested"
    },
    {
      icon: "mdi:truck-fast",
      title: "Fast Delivery",
      description: "Quick & reliable shipping"
    }
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "600px", md: "calc(100vh - 80px)" },
        overflow: "hidden",
        background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
      }}>
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/assets/chemical-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                animation: "fadeInUp 1s ease-out",
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
              }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-block",
                  mb: 3,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}>
                <Typography
                  sx={{
                    color: "#10B981",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}>
                  Premium Automotive Chemicals
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem" },
                  mb: 3,
                  lineHeight: 1.1,
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
                }}>
                Professional Grade
                <Box component="span" sx={{ display: "block" }}>
                  Automotive Care
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#D1D5DB",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  mb: 5,
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}>
                Elevate your vehicle's performance with our premium line of automotive chemicals. Trusted by professionals worldwide.
              </Typography>

              {/* CTA Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={6}>
                <Button
                  variant="contained"
                  size="large"
                  href="#products"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "white",
                    borderRadius: 2,
                    textTransform: "none",
                    boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 25px rgba(16, 185, 129, 0.4)",
                    },
                  }}
                  startIcon={<Iconify icon="mdi:cart" />}>
                  Shop Products
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#about"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderColor: "#10B981",
                    color: "#10B981",
                    borderWidth: 2,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      borderWidth: 2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      borderColor: "#059669",
                    },
                  }}
                  startIcon={<Iconify icon="mdi:information" />}>
                  Learn More
                </Button>
              </Stack>

              {/* Features */}
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: "rgba(16, 185, 129, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}>
                        <Iconify
                          icon={feature.icon}
                          sx={{ fontSize: 24, color: "#10B981" }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            mb: 0.5,
                          }}>
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#9CA3AF",
                            fontSize: "0.85rem",
                          }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Content - Product Showcase */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                display: { xs: "none", md: "block" },
              }}>
              <Box
                sx={{
                  width: "100%",
                  height: 500,
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "2px solid rgba(16, 185, 129, 0.2)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)",
                    zIndex: 1,
                  },
                }}>
                <Box
                  component="img"
                  src="/assets/chemical-bg.jpeg"
                  alt="Automotive Chemicals"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Floating Badge */}
        <Box
          sx={{
            position: "absolute",
                  bottom: 30,
                  right: 30,
                  px: 3,
                  py: 2,
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  zIndex: 2,
                }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            display: "flex",
                      alignItems: "center",
            justifyContent: "center",
                    }}>
                    <Iconify
                      icon="mdi:star"
                      sx={{ fontSize: 24, color: "white" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#1F2937",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}>
                      Trusted by 10,000+
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6B7280",
                        fontSize: "0.85rem",
                      }}>
                      Satisfied Customers
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBanner;
