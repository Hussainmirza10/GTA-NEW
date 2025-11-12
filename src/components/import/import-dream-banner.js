'use client';

import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

// ----------------------------------------------------------------------

export default function ImportDreamBanner() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: "",
    contact: "",
    importFrom: "",
    importTo: "",
    vehicle: "",
    notes: "",
  });

  const handleWhatsAppClick = useCallback(() => {
    const message = "Hi! I'm interested in importing a car. Can you help me?";
    const whatsappUrl = `https://wa.me/923263333456?text=${encodeURIComponent(message)}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          mt: { xs: 6, md: "56px" },
          animation: "fadeInUp 0.8s ease-out",
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(40px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}>
        <Card
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
          sx={{
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            borderRadius: 4,
            mb: 4,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 12px 40px rgba(16, 185, 129, 0.25)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.01)",
              boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
            },
          }}>
          <CardContent
            sx={{
              p: { xs: 4, md: "32px" },
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={3}
              alignItems="center"
              justifyContent="space-between">
              <Box
                sx={{
                  animation: "slideInLeft 0.8s ease-out",
                  "@keyframes slideInLeft": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(-50px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}>
                <Box
                  component="img"
                  src="/assets/bugati.png"
                  alt="Import Car"
                  sx={{
                    width: { xs: "100%", md: 560 },
                    maxWidth: 560,
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                  }}
                />
              </Box>

              <Stack
                spacing={3}
                sx={{
                  animation: "fadeInUp 0.8s ease-out 0.3s backwards",
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
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#DCFCE7",
                      fontWeight: 700,
                      letterSpacing: 3,
                    }}>
                    Premium Imports
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      lineHeight: 1.2,
                      fontFamily:
                        "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textShadow: `
                        -2px -2px 0 #000000,
                        2px -2px 0 #000000,
                        -2px 2px 0 #000000,
                        2px 2px 0 #000000,
                        0 0 10px rgba(0, 0, 0, 0.8)
                      `,
                    }}>
                    Import Your Dream Car
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#F0FDF4",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: 400,
                      maxWidth: 520,
                      mx: "auto",
                      lineHeight: 1.6,
                    }}>
                    From luxury supercars to everyday favorites, our experts
                    handle sourcing, inspections, customs, and delivery while you
                    track progress at every milestone.
                  </Typography>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp sx={{ fontSize: 28 }} />}
                    onClick={handleWhatsAppClick}
                    sx={{
                      background: "#FFFFFF",
                      border: "2px solid #FFFFFF",
                      color: "#10B981",
                      px: 4,
                      py: 2,
                      fontSize: "16px !important",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      borderRadius: "50px",
                      minWidth: 250,
                      whiteSpace: "nowrap",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        background: "transparent",
                        color: "#FFFFFF",
                        transform: "scale(1.08) rotate(-2deg)",
                        boxShadow: "0 8px 30px rgba(255, 255, 255, 0.3)",
                      },
                    }}>
                    Book an appointment
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/contact-us"
                    sx={{
                      color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                    px: 4,
                    py: 2,
                    borderRadius: "50px",
                    fontSize: "16px !important",
                    fontWeight: 600,
                    minWidth: 250,
                      "&:hover": {
                        borderColor: "#FFFFFF",
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                      },
                    }}>
                    Talk to a Specialist
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "rgba(4, 47, 46, 0.85)",
              backdropFilter: "blur(6px)",
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: showOverlay ? 1 : 0,
              pointerEvents: showOverlay ? "auto" : "none",
              transition: "opacity 0.35s ease",
              px: { xs: 3, md: 6 },
            }}>
            <Stack
              spacing={3}
              alignItems="center"
              textAlign="center"
              sx={{
                maxWidth: 520,
                color: "#ECFDF5",
                animation: showOverlay
                  ? "fadeSlideIn 0.4s ease forwards"
                  : "none",
                "@keyframes fadeSlideIn": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 6,
                  fontWeight: 700,
                  color: "#BBF7D0",
                }}>
                Concierge Guidance
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                Not sure which car to import next?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(236, 253, 245, 0.85)",
                  lineHeight: 1.6,
                }}>
                Share the brands you love and we’ll curate specs, auction history,
                landed cost estimates, and compliance briefings—all before you lock in
                your booking.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleWhatsAppClick}
                  startIcon={<WhatsApp />}
                  sx={{
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#FFFFFF",
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    fontWeight: 700,
                    minWidth: 250,
                    "&:hover": {
                      background: "linear-gradient(135deg, #047857 0%, #10B981 100%)",
                      boxShadow: "0 12px 28px rgba(16, 185, 129, 0.35)",
                    },
                  }}>
                  Book Quick Consult
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/contact-us"
                  sx={{
                    color: "#BBF7D0",
                    borderColor: "rgba(187, 247, 208, 0.7)",
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    fontWeight: 600,
                    minWidth: 250,
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      backgroundColor: "rgba(187, 247, 208, 0.1)",
                    },
                  }}>
                  Explore Import Options
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #F97316 0%, #F59E0B 30%, #8B5CF6 70%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: 4,
                    py: { xs: 2, sm: 2 },
                    borderRadius: "999px",
                    fontWeight: 700,
                    minWidth: 250,
                    boxShadow: "0 14px 32px rgba(249, 115, 22, 0.35)",
                    textTransform: "uppercase",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #EA580C 0%, #D97706 30%, #7C3AED 70%, #EA580C 100%)",
                      boxShadow: "0 18px 40px rgba(124, 58, 237, 0.35)",
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => setQuoteOpen(true)}
                >
                  Get a Quote
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Box>

      <Dialog
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: { xs: 1, md: 1.5 } } }}
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Request Import Quote</DialogTitle>
        <DialogContent dividers sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            value={quoteData.name}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, name: e.target.value }))}
            fullWidth
          />
          <TextField
            label="Contact (Email / WhatsApp)"
            value={quoteData.contact}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, contact: e.target.value }))}
            fullWidth
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Import From (Country / City)"
              value={quoteData.importFrom}
              onChange={(e) => setQuoteData((prev) => ({ ...prev, importFrom: e.target.value }))}
              fullWidth
            />
            <TextField
              label="Import To (Destination)"
              value={quoteData.importTo}
              onChange={(e) => setQuoteData((prev) => ({ ...prev, importTo: e.target.value }))}
              fullWidth
            />
          </Stack>
          <TextField
            label="Vehicle / Parts Required"
            value={quoteData.vehicle}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, vehicle: e.target.value }))}
            fullWidth
          />
          <TextField
            label="Additional Notes"
            value={quoteData.notes}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, notes: e.target.value }))}
            multiline
            minRows={3}
            fullWidth
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={() => setQuoteOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              const message = `Quote Request:%0AName: ${quoteData.name}%0AContact: ${
                quoteData.contact
              }%0AImport From: ${quoteData.importFrom}%0AImport To: ${
                quoteData.importTo
              }%0AVehicle / Parts: ${quoteData.vehicle}%0ANotes: ${quoteData.notes}`;
              const url = `https://wa.me/923263333456?text=${message}`;
              if (typeof window !== "undefined") {
                window.open(url, "_blank");
              }
              setQuoteOpen(false);
            }}
            disabled={
              !quoteData.name || !quoteData.contact || !quoteData.importFrom || !quoteData.importTo || !quoteData.vehicle
            }
          >
            Submit via WhatsApp
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

