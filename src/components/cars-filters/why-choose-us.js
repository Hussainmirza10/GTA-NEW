"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import {
  Security,
  Handshake,
  Speed,
  Support,
  VerifiedUser,
  LocalOffer,
} from "@mui/icons-material";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <VerifiedUser sx={{ fontSize: 50 }} />,
      title: "Verified Dealers",
      description: "All our dealers are thoroughly verified and certified",
      color: "#10B981",
    },
    {
      icon: <Security sx={{ fontSize: 50 }} />,
      title: "Secure Transactions",
      description: "Safe and secure payment methods with buyer protection",
      color: "#9333EA",
    },
    {
      icon: <Speed sx={{ fontSize: 50 }} />,
      title: "Quick Process",
      description: "Fast and hassle-free buying, selling, and rental process",
      color: "#EC4899",
    },
    {
      icon: <Support sx={{ fontSize: 50 }} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries",
      color: "#F59E0B",
    },
    {
      icon: <Handshake sx={{ fontSize: 50 }} />,
      title: "Best Deals",
      description: "Competitive pricing and exclusive deals on premium cars",
      color: "#06B6D4",
    },
    {
      icon: <LocalOffer sx={{ fontSize: 50 }} />,
      title: "Wide Selection",
      description: "Extensive inventory of new, used, and rental vehicles",
      color: "#8B5CF6",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #F0FDF4 0%, #FAF5FF 50%, #FFF1F2 100%)",
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
          opacity: 0.03,
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
            Why Choose Garage Tuned Autos?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Your trusted partner for all automotive needs with unmatched service quality
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid transparent",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s backwards`,
                  "@keyframes fadeInScale": {
                    "0%": {
                      opacity: 0,
                      transform: "scale(0.9) translateY(30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "scale(1) translateY(0)",
                    },
                  },
                  "&:hover": {
                    transform: "translateY(-16px) scale(1.03)",
                    border: "2px solid transparent",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    background: "rgba(255, 255, 255, 1)",
                    "& .feature-icon": {
                      transform: "scale(1.15)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: 280,
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      color: feature.color,
                      mb: 3,
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background: `${feature.color}15`,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1F2937",
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#6B7280",
                      lineHeight: 1.7,
                      fontSize: "1rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

