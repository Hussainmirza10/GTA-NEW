"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

import Image from "src/components/image";

const defaultHighlights = [];

export default function ServiceDetail({
  title,
  subtitle,
  description,
  image,
  highlights = defaultHighlights,
  whatsappMessage,
}) {
  const message =
    whatsappMessage ||
    `Hi! I'd like to learn more about your ${title} service. Could you share the next steps?`;

  const whatsappUrl = `https://wa.me/+923263330222?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box sx={{ backgroundColor: "#F8FAFC" }}>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(191,219,254,0.18) 40%, rgba(248,250,252,0.9) 100%)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 4, fontWeight: 700, color: "#2563EB" }}
                >
                  {subtitle || "GTA Concierge"}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.6rem", md: "3.4rem" },
                    color: "#0F172A",
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B5563",
                    fontSize: { xs: "1.05rem", md: "1.1rem" },
                    maxWidth: 560,
                  }}
                >
                  {description}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<WhatsApp />}
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    sx={{
                      backgroundColor: "#111827",
                      color: "#FFFFFF",
                      px: 4,
                      py: 1.4,
                      borderRadius: "999px",
                      fontWeight: 700,
                      boxShadow: "0 14px 32px rgba(17, 24, 39, 0.25)",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => window.open("tel:+923263330222")}
                    sx={{
                      borderRadius: "999px",
                      px: 4,
                      py: 1.4,
                      fontWeight: 600,
                      borderColor: "rgba(17, 24, 39, 0.35)",
                      color: "#111827",
                      "&:hover": {
                        borderColor: "#111827",
                        backgroundColor: "rgba(17, 24, 39, 0.08)",
                      },
                    }}
                  >
                    Call Our Team
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "36px",
                  overflow: "hidden",
                  height: { xs: 260, md: 360 },
                  boxShadow: "0 34px 70px rgba(15, 23, 42, 0.22)",
                }}
              >
                <Image
                  alt={title}
                  src={image}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {!!highlights.length && (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    border: "1px solid rgba(37, 99, 235, 0.16)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(219,234,254,0.55) 100%)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#1F2937" }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4B5563" }}>
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}

