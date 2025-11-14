"use client";
import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { WhatsApp, Phone } from "@mui/icons-material";

const CTABanner = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your services. Can you help me?";
    const whatsappUrl = `https://wa.me/923263333456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
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
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
              textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Ready to Find Your Perfect Car?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: 700,
              mx: "auto",
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.3rem" },
            }}
          >
            Get in touch with our expert team today and let us help you drive your dream car
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp sx={{ fontSize: 28 }} />}
              onClick={handleWhatsAppClick}
              sx={{
                background: "#FFFFFF",
                color: "#10B981",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "50px",
                minWidth: 250,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#F0FDF4",
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                },
              }}
            >
              Contact on WhatsApp
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Phone sx={{ fontSize: 28 }} />}
              href="tel:+923263333456"
              sx={{
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                borderWidth: 2,
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "50px",
                minWidth: 250,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  borderWidth: 2,
                  background: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              Call Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CTABanner;

