import { Box, Button, Stack, Typography, Container, Grid } from "@mui/material";
import React from "react";
import Iconify from "src/components/iconify";

const Comics = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(16, 185, 129, 0.2)",
                border: "2px solid rgba(16, 185, 129, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 25px 70px rgba(16, 185, 129, 0.3)",
                },
              }}>
              <Box
                component="img"
                src="/assets/chomic_bg.jpeg"
                alt="Garage Tuned Autos Comics"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              
              {/* Overlay Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: "rgba(16, 185, 129, 0.95)",
                  backdropFilter: "blur(10px)",
                }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}>
                  New Release
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right - Content */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-block",
                  mb: 2,
                  px: 2,
                  py: 0.75,
                  borderRadius: 2,
                  bgcolor: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}>
                <Typography
                  sx={{
                    color: "#10B981",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}>
                  Comics Series
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: { xs: "2rem", md: "3rem" },
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
                Garage Tuned Autos
                <Box component="span" sx={{ display: "block" }}>
                  Comics Collection
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#D1D5DB",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}>
          Dive into the world of Garage Tuned Autos Comics! Explore a fun and
          imaginative collection of stories, adventures, and characters brought
          to life by our creative team. Whether you love action, humor, or just
                a good story, our comics have something for everyone.
              </Typography>

              {/* Features List */}
              <Stack spacing={2} sx={{ mb: 4 }}>
                {[
                  "Action-packed automotive adventures",
                  "Unique characters and storylines",
                  "Regular new issues and updates"
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                      <Iconify
                        icon="eva:checkmark-fill"
                        sx={{
                          color: "#fff",
                          fontSize: 18,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#D1D5DB",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}>
                      {feature}
        </Typography>
                  </Box>
                ))}
              </Stack>

              {/* CTA Button */}
              <Button
                variant="contained"
                size="large"
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
                startIcon={<Iconify icon="mdi:book-open-page-variant" />}>
                Explore Comics
        </Button>
      </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Comics;
