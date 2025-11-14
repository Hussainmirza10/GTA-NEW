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
  actionSections = [],
}) {
  const message =
    whatsappMessage ||
    `Hi! I'd like to learn more about your ${title} service. Could you share the next steps?`;

  const whatsappUrl = `https://wa.me/+923263330222?text=${encodeURIComponent(
    message
  )}`;

  const handleAction = (action) => {
    if (!action) {
      return;
    }

    if (action.whatsappMessage) {
      const url = `https://wa.me/+923263330222?text=${encodeURIComponent(
        action.whatsappMessage
      )}`;
      window.open(url, "_blank");
      return;
    }

    if (action.href) {
      window.open(action.href, action.target ?? "_blank");
      return;
    }

    if (action.onClick) {
      action.onClick();
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3FF 45%, #FFFFFF 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(59,130,246,0.12) 28%, rgba(15,23,42,0.04) 100%)",
          py: { xs: 8, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            width: 360,
            height: 360,
            top: "-120px",
            right: "-120px",
            background:
              "radial-gradient(circle at center, rgba(59,130,246,0.35), rgba(59,130,246,0) 65%)",
            filter: "blur(6px)",
            opacity: { xs: 0.45, md: 0.7 },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: 420,
            height: 420,
            bottom: "-160px",
            left: "-160px",
            background:
              "radial-gradient(circle at center, rgba(147,197,253,0.32), rgba(147,197,253,0) 65%)",
            filter: "blur(4px)",
            opacity: { xs: 0.32, md: 0.6 },
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
            sx={{ position: "relative", zIndex: 2 }}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3.5}>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 6,
                    fontWeight: 700,
                    color: "#1D4ED8",
                    textTransform: "uppercase",
                    bgcolor: "rgba(255,255,255,0.48)",
                    px: 2,
                    py: 0.75,
                    borderRadius: "999px",
                    width: "fit-content",
                    boxShadow: "0 14px 30px rgba(29,78,216,0.15)",
                  }}
                >
                  {subtitle || "GTA Concierge"}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.6rem", md: "3.4rem" },
                    color: "#0B1220",
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(15,23,42,0.75)",
                    fontSize: { xs: "1.08rem", md: "1.14rem" },
                    maxWidth: 620,
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<WhatsApp />}
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    sx={{
                      background:
                        "linear-gradient(135deg, #16A34A 0%, #22C55E 45%, #4ADE80 100%)",
                      color: "#F9FAFB",
                      px: 4,
                      py: 1.4,
                      borderRadius: "999px",
                      fontWeight: 700,
                      letterSpacing: 0.6,
                      boxShadow: "0 18px 36px rgba(34,197,94,0.32)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #15803D 0%, #16A34A 55%, #22C55E 100%)",
                        boxShadow: "0 16px 30px rgba(22,163,74,0.34)",
                        transform: "translateY(-2px)",
                      },
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
                      borderColor: "rgba(15,23,42,0.25)",
                      color: "#0B1220",
                      backdropFilter: "blur(8px)",
                      backgroundColor: "rgba(255,255,255,0.55)",
                      "& svg": { color: "#0B1220" },
                      "&:hover": {
                        borderColor: "rgba(15,23,42,0.5)",
                        backgroundColor: "rgba(255,255,255,0.85)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Call Our Team
                  </Button>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    flexWrap: "wrap",
                    mt: 1,
                  }}
                >
                  {["Ceramic-grade finish", "24/7 concierge", "Certified technicians"].map(
                    (item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 2.5,
                          py: 1,
                          borderRadius: "999px",
                          backgroundColor: "rgba(15,23,42,0.05)",
                          border: "1px solid rgba(15,23,42,0.08)",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "rgba(15,23,42,0.66)",
                          letterSpacing: 0.4,
                        }}
                      >
                        {item}
                      </Box>
                    )
                  )}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "40px",
                  overflow: "hidden",
                  height: { xs: 340, md: 420 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 16,
                    borderRadius: "32px",
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(59,130,246,0.1) 45%, rgba(226,232,240,0.65) 100%)",
                    zIndex: 1,
                    filter: "blur(0.5px)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "40px",
                    background:
                      "linear-gradient(180deg, rgba(148,163,184,0.25) 0%, rgba(15,23,42,0.05) 100%)",
                    opacity: 0.35,
                  },
                  boxShadow: "0 40px 90px rgba(15,23,42,0.25)",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    inset: { xs: 28, md: 36 },
                    borderRadius: "28px",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
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
                      transform: "scale(1.02)",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: 24,
                    top: 24,
                    zIndex: 3,
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    backgroundColor: "rgba(15,23,42,0.82)",
                    color: "#F8FAFC",
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    boxShadow: "0 12px 26px rgba(15,23,42,0.38)",
                  }}
                >
                  GTA Studio
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {!!actionSections.length && (
        <Box sx={{ position: "relative", py: { xs: 8, md: 10 } }}>
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
            <Stack spacing={{ xs: 5, md: 6 }}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 6,
                    fontWeight: 700,
                    color: "#1D4ED8",
                  }}
                >
                  Signature Programmes
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    mt: 1.5,
                    fontWeight: 800,
                    fontSize: { xs: "2.1rem", md: "2.6rem" },
                    color: "#0B1220",
                  }}
                >
                  Tailored packages engineered for your build.
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 3, md: 4 }}>
                {actionSections.map((section, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        minHeight: { xs: 320, md: 360 },
                        borderRadius: 5,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        color: "#F8FAFC",
                        boxShadow: "0 28px 70px rgba(15,23,42,0.2)",
                        transition: "transform 0.45s ease, box-shadow 0.45s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 36px 90px rgba(15,23,42,0.24)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${section.image || "/assets/towing-cute.png"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "brightness(0.88) saturate(1.1)",
                          transition: "transform 0.45s ease",
                          "&:hover": { transform: "scale(1.06)" },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(185deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.7) 55%, rgba(15,23,42,0.92) 100%)",
                        }}
                      />
                      <Stack spacing={2.5} sx={{ position: "relative", zIndex: 2, p: { xs: 3, md: 4 } }}>
                        <Box>
                          <Typography
                            variant="overline"
                            sx={{
                              letterSpacing: 4,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              color: "rgba(226,232,240,0.9)",
                            }}
                          >
                            {section.badge || "Priority"}
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: 800, lineHeight: 1.15, mt: 1, color: "#F8FAFC" }}
                          >
                            {section.title}
                          </Typography>
                          {section.description && (
                            <Typography
                              variant="body2"
                              sx={{
                                mt: 1.5,
                                color: "rgba(226,232,240,0.78)",
                                lineHeight: 1.8,
                              }}
                            >
                              {section.description}
                            </Typography>
                          )}
                        </Box>

                        {!!section.actions?.length && (
                          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                            {section.actions.map((action, actionIndex) => (
                              <Button
                                key={actionIndex}
                                variant={action.variant || (actionIndex === 0 ? "contained" : "outlined")}
                                onClick={() => handleAction(action)}
                                sx={{
                                  borderRadius: "999px",
                                  fontWeight: 700,
                                  px: 3,
                                  py: 1.1,
                                  backdropFilter: "blur(6px)",
                                  borderColor:
                                    action.variant === "outlined" || actionIndex !== 0
                                      ? "rgba(241,245,249,0.65)"
                                      : "transparent",
                                  color:
                                    action.variant === "outlined" || actionIndex !== 0
                                      ? "#F8FAFC"
                                      : "#0F172A",
                                  backgroundColor:
                                    action.variant === "outlined" || actionIndex !== 0
                                      ? "rgba(255,255,255,0.08)"
                                      : "#F8FAFC",
                                  "&:hover": {
                                    backgroundColor:
                                      action.variant === "outlined" || actionIndex !== 0
                                        ? "rgba(255,255,255,0.18)"
                                        : "#E2E8F0",
                                  },
                                }}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 20% 20%, rgba(191,219,254,0.28), transparent 55%), radial-gradient(circle at 80% 15%, rgba(147,197,253,0.25), transparent 60%)",
              opacity: 0.6,
            }}
          />
        </Box>
      )}

      {!!highlights.length && (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 4,
                    p: { xs: 3.5, md: 4 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    border: "1px solid rgba(59,130,246,0.18)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.86) 0%, rgba(226,232,240,0.65) 48%, rgba(191,219,254,0.6) 100%)",
                    boxShadow: "0 20px 55px rgba(15,23,42,0.12)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -60,
                      background:
                        "radial-gradient(circle at top left, rgba(96,165,250,0.35), rgba(96,165,250,0) 55%)",
                      opacity: 0.7,
                    },
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 26px 70px rgba(15,23,42,0.18)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: "#0B1220" }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(15,23,42,0.65)", lineHeight: 1.75 }}
                  >
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      {!!actionSections.length && (
        <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {actionSections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    border: "1px solid rgba(17, 24, 39, 0.08)",
                    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Box>
                    <Typography variant="overline" sx={{ color: "#2563EB", fontWeight: 700, letterSpacing: 4 }}>
                      {section.badge || "Priority"}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", mt: 1 }}>
                      {section.title}
                    </Typography>
                    {section.description && (
                      <Typography variant="body2" sx={{ color: "#4B5563", mt: 1.5 }}>
                        {section.description}
                      </Typography>
                    )}
                  </Box>

                  {!!section.actions?.length && (
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt="auto">
                      {section.actions.map((action, actionIndex) => (
                        <Button
                          key={actionIndex}
                          variant={action.variant || (actionIndex === 0 ? "contained" : "outlined")}
                          color={action.color || "primary"}
                          onClick={() => handleAction(action)}
                          fullWidth
                          sx={{
                            borderRadius: "999px",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </Stack>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}


