"use client";
import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import {
  DirectionsCar,
  Speed,
  People,
  Verified,
} from "@mui/icons-material";

const StatsSection = () => {
  const stats = [
    {
      icon: <DirectionsCar sx={{ fontSize: 50, color: "#10B981" }} />,
      number: "500+",
      label: "Cars Available",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
    {
      icon: <Speed sx={{ fontSize: 50, color: "#9333EA" }} />,
      number: "50+",
      label: "Brands",
      gradient: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
    },
    {
      icon: <People sx={{ fontSize: 50, color: "#EC4899" }} />,
      number: "10,000+",
      label: "Happy Customers",
      gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    },
    {
      icon: <Verified sx={{ fontSize: 50, color: "#F59E0B" }} />,
      number: "100%",
      label: "Verified Listings",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(135deg, #FAF5FF 0%, #F0FDF4 50%, #FAF5FF 100%)",
        position: "relative",
        overflow: "hidden",
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
        {/* Section Header */}
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
            Our Achievements
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
            Trusted by thousands of customers across Pakistan
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(147, 51, 234, 0.1)",
                  borderRadius: 4,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  animation: `popIn 0.6s ease-out ${index * 0.15}s backwards`,
                  "@keyframes popIn": {
                    "0%": {
                      opacity: 0,
                      transform: "scale(0.8) translateY(40px)",
                    },
                    "50%": {
                      transform: "scale(1.05) translateY(-10px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "scale(1) translateY(0)",
                    },
                  },
                  "&:hover": {
                    transform: "translateY(-16px) scale(1.05)",
                    background: "rgba(255, 255, 255, 1)",
                    border: "2px solid transparent",
                    boxShadow: "0 24px 50px rgba(0, 0, 0, 0.15)",
                    "& .stat-icon": {
                      transform: "scale(1.3) rotate(360deg)",
                    },
                    "& .stat-number": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="stat-icon"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  className="stat-number"
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    background: stat.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6B7280",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;

