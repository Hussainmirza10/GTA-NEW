"use client";

import { Box, Typography, Stack, Grid, Card } from "@mui/material";
import React from "react";
import Iconify from "src/components/iconify";

const Washing = () => {
  const highlights = [
    {
      icon: "mdi:car-wrench",
      title: "Expert Tuning",
      description: "Professional car tuning and diagnostics"
    },
    {
      icon: "mdi:spray-bottle",
      title: "Quality Products",
      description: "Premium automotive chemicals & oils"
    },
    {
      icon: "mdi:car-multiple",
      title: "Car Marketplace",
      description: "Buy, sell & rent vehicles easily"
    },
    {
      icon: "mdi:certificate",
      title: "Certified Services",
      description: "Trusted by thousands of customers"
    }
  ];

  return (
    <Box 
      id="about"
      sx={{ 
        py: { xs: 8, md: 12 },
        px: 2,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)",
      }}>
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "center",
        }}>
        {/* Left Section - Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            position: "relative",
          }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "350px", md: "600px" },
              borderRadius: 4,
              overflow: "hidden",
              border: "3px solid #10B981",
              boxShadow: "0 20px 60px rgba(16, 185, 129, 0.15)",
              position: "relative",
            }}>
            <Box
              component="img"
              src="/assets/cetificate-chemicals.jpeg"
              alt="Garage Tuned Autos Certificate"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                bgcolor: "#F9FAFB",
              }}
            />
          </Box>

          {/* Decorative Element */}
          <Box
            sx={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>

        {/* Right Section - Text Content */}
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "55%" },
          }}>
          {/* Section Badge */}
          <Box
            sx={{
              display: "inline-block",
              mb: 2,
              px: 2,
              py: 0.75,
              borderRadius: 2,
              bgcolor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}>
            <Typography
              sx={{
                color: "#10B981",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1.2,
              }}>
              About Us
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 400,
              color: "#000000",
              mb: 3,
              lineHeight: 1.2,
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
            Who We Are
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8, 
              mb: 3, 
              color: '#4B5563' 
            }}>
            Welcome to <Box component="strong" sx={{ color: '#10B981', fontWeight: 700 }}>Garage Tuned Autos</Box> — your all-in-one destination for premium automotive care, performance, and passion.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, mb: 2, color: '#6B7280' }}>
            At Garage Tuned Autos, we specialize in professional car tuning, detailing, repairs, and maintenance services, helping every vehicle reach its peak performance and appearance. From engine tuning and diagnostics to ceramic coating, detailing, and custom modifications, our expert technicians bring precision, experience, and innovation to every job.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, mb: 2, color: '#6B7280' }}>
            We're also proud to offer a wide range of high-quality automotive chemicals and care products, including engine oils, detailing supplies, and performance additives — trusted by professionals and car lovers alike for reliability and results.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, mb: 4, color: '#6B7280' }}>
            But that's not all — we go beyond the workshop! Explore our Car Listings section to buy or sell vehicles with confidence, and check out our Car Rental Service to experience top-tier cars for daily drives, business needs, or special occasions.
          </Typography>

          {/* Highlights Grid */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {highlights.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    p: 2.5,
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid #E5E7EB",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#10B981",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(16, 185, 129, 0.15)",
                    },
                  }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}>
                    <Iconify
                      icon={item.icon}
                      sx={{ fontSize: 24, color: "white" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#1F2937",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      mb: 0.5,
                    }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                    }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Tagline */}
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              boxShadow: "0 8px 30px rgba(16, 185, 129, 0.3)",
            }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#FFFFFF', 
                fontWeight: 700,
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              "Garage Tuned Autos — Tuned for Performance, Built for You."
            </Typography>
          </Box>
          {/* <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              color: "#333",
              mb: 4,
              lineHeight: 1.6,
              color: "white",
            }}>
            Professional Washing and Cleaning Car automotive solution. With a
            passion for performance and a commitment to quality, we specialize
            in providing top-grade automotive chemicals, genuine auto parts,
            easy vehicle listings, and hassle-free car imports.
          </Typography> */}

          {/* Features List */}
          {/* <Stack spacing={2} sx={{ mb: 4 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "#4caf50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Iconify
                    icon="eva:checkmark-fill"
                    sx={{
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    fontWeight: 500,
                  }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Stack> */}

          {/* Contact Section */}
          {/* <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
           
            <Stack direction="row">
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fff",
                  bgcolor: "#1976d2",
                }}>
                <Iconify icon="eva:person-fill" />
              </Avatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fff",
                  bgcolor: "#2e7d32",
                  marginLeft: "-10px",
                }}>
                <Iconify icon="eva:person-fill" />
              </Avatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid #fff",
                  bgcolor: "#ed6c02",
                  marginLeft: "-10px",
                }}>
                <Iconify icon="eva:person-fill" />
              </Avatar>
            </Stack>

           
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "14px !important",
                }}>
                24 Hours Service Available
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "12px !important",
                }}>
                Booking: <span style={{ color: "#4caf50" }}>+923263333456</span>
              </Typography>
            </Stack>
          </Box> */}
        </Box>

        {/* Right Section - Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            flex: 1,
            position: "relative",
          }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", md: "500px" },
              borderRadius: "16px",
              overflow: "hidden",
              backgroundImage:
                "url(/assets/cetificate-chemicals.jpeg)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Washing;
