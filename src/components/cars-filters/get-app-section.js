"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import Iconify from "src/components/iconify";

const GetAppSection = () => {
  const features = [
    "Browse thousands of vehicles",
    "Book service appointments",
    "Track your orders in real-time",
    "Access exclusive deals & offers",
    "Connect with verified dealers",
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: "fadeInLeft 0.8s ease-out",
                "@keyframes fadeInLeft": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(-40px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
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
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}>
                  Download Now
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
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
                Get The GTA
                <Box component="span" sx={{ display: "block" }}>
                  Mobile App
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  mb: 4,
                  lineHeight: 1.7,
                  maxWidth: 500,
                }}>
                Take Garage Tuned Autos with you wherever you go. Find cars, book services, and stay connected - all from your mobile device.
              </Typography>

              {/* Features List */}
              <Stack spacing={2} mb={5}>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      animation: `fadeInLeft 0.6s ease-out ${0.2 + index * 0.1}s backwards`,
                      "@keyframes fadeInLeft": {
                        "0%": {
                          opacity: 0,
                          transform: "translateX(-20px)",
                        },
                        "100%": {
                          opacity: 1,
                          transform: "translateX(0)",
                        },
                      },
                    }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                      <Iconify
                        icon="eva:checkmark-fill"
                        sx={{ color: "#FFFFFF", fontSize: 16 }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* App Store Buttons */}
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2}
                sx={{
                  animation: "fadeInUp 0.8s ease-out 0.8s backwards",
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
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Iconify icon="mdi:apple" sx={{ fontSize: 28 }} />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    bgcolor: "#000000",
                    color: "white",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#1F2937",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                    },
                  }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography sx={{ fontSize: "0.7rem", opacity: 0.8 }}>
                      Download on the
                    </Typography>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      App Store
                    </Typography>
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Iconify icon="mdi:google-play" sx={{ fontSize: 28 }} />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    bgcolor: "#000000",
                    color: "white",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#1F2937",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                    },
                  }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography sx={{ fontSize: "0.7rem", opacity: 0.8 }}>
                      Get it on
                    </Typography>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Google Play
                    </Typography>
                  </Box>
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Content - Mobile Mockup */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                animation: "floatAnimation 3s ease-in-out infinite, fadeInRight 0.8s ease-out",
                "@keyframes floatAnimation": {
                  "0%, 100%": {
                    transform: "translateY(0px)",
                  },
                  "50%": {
                    transform: "translateY(-20px)",
                  },
                },
                "@keyframes fadeInRight": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(40px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },
              }}>
              {/* Phone Frame */}
              <Box
                sx={{
                  width: { xs: 280, sm: 320, md: 360 },
                  height: { xs: 560, sm: 640, md: 720 },
                  borderRadius: 8,
                  border: "12px solid #1F2937",
                  bgcolor: "#000000",
                  position: "relative",
                  boxShadow: "0 40px 100px rgba(0, 0, 0, 0.4)",
                  overflow: "hidden",
                }}>
                {/* Notch */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 120,
                    height: 28,
                    bgcolor: "#1F2937",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    zIndex: 10,
                  }}
                />

                {/* Screen Content */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                  }}>
                  {/* App Logo/Icon */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 4,
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      boxShadow: "0 8px 30px rgba(16, 185, 129, 0.4)",
                    }}>
                    <Iconify
                      icon="mdi:car"
                      sx={{ fontSize: 60, color: "white" }}
                    />
                  </Box>

                  {/* App Name */}
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: "#1F2937",
                      mb: 1,
                      fontFamily: "'Arial Black', sans-serif",
                    }}>
                    GTA Mobile
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#6B7280",
                      textAlign: "center",
                      mb: 4,
                      maxWidth: 220,
                    }}>
                    Your automotive companion on the go
                  </Typography>

                  {/* Feature Icons */}
                  <Grid container spacing={2} sx={{ width: "100%", px: 2 }}>
                    {[
                      { icon: "mdi:car-search", label: "Search" },
                      { icon: "mdi:heart", label: "Favorites" },
                      { icon: "mdi:calendar-check", label: "Book" },
                      { icon: "mdi:account-circle", label: "Profile" },
                    ].map((item, idx) => (
                      <Grid item xs={6} key={idx}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: "white",
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                          }}>
                          <Iconify
                            icon={item.icon}
                            sx={{ fontSize: 32, color: "#10B981", mb: 0.5 }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color: "#6B7280",
                              fontWeight: 600,
                            }}>
                            {item.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>

              {/* Floating Elements around phone */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "-10%",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "0s",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                  },
                }}>
                <Iconify icon="mdi:star" sx={{ fontSize: 30, color: "white" }} />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: "15%",
                  right: "-8%",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1.5s",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                  },
                }}>
                <Iconify icon="mdi:lightning-bolt" sx={{ fontSize: 26, color: "white" }} />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "-5%",
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "0.75s",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                  },
                }}>
                <Iconify icon="mdi:heart" sx={{ fontSize: 22, color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetAppSection;

