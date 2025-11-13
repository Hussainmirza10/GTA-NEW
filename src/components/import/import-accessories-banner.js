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

export default function ImportAccessoriesBanner() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: "",
    address: "",
    importLocation: "",
    budget: "",
    timeline: "",
    notes: "",
  });

  const handleWhatsAppClick = useCallback(() => {
    const message =
      "Hi! I'm interested in importing car parts. Can you help me find the parts I need?";
    const whatsappUrl = `https://wa.me/923263331000?text=${encodeURIComponent(message)}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          mt: { xs: 4, md: 8 },
          animation: "fadeInUp 0.8s ease-out 0.2s backwards",
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
            background: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
            borderRadius: 4,
            mb: 4,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 12px 40px rgba(147, 51, 234, 0.25)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.01)",
              boxShadow: "0 20px 60px rgba(147, 51, 234, 0.4)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
            },
          }}>
          <CardContent
            sx={{
              p: { xs: 4, md: "32px" },
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
                  src="/assets/car-accessories-png-car-parts-clipart.png"
                  alt="Car Accessories"
                  sx={{
                    width: { xs: "100%", md: 520 },
                    maxWidth: 520,
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                    ...(showOverlay && {
                      transform: "scale(1.05)",
                    }),
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
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#F3E8FF",
                      fontWeight: 700,
                      letterSpacing: 3,
                    }}>
                    Genuine Parts
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
                    Import Your Desire Accessories
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#FAF5FF",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: 400,
                      maxWidth: 500,
                      mx: { xs: "auto", md: 0 },
                      lineHeight: 1.6,
                    }}>
                    From genuine OEM parts to aftermarket upgrades, we find and
                    import the exact accessories you need, backed by quality
                    checks and transparent logistics.
                  </Typography>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  alignItems="center">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp sx={{ fontSize: 28 }} />}
                    onClick={handleWhatsAppClick}
                    sx={{
                      background: "#16A34A",
                      border: "2px solid transparent",
                      color: "#FFFFFF",
                      px: 4,
                      py: 2,
                      fontSize: "16px !important",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      borderRadius: "50px",
                      minWidth: 250,
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "#15803D",
                        boxShadow: "0 8px 30px rgba(22, 163, 74, 0.4)",
                        transform: "scale(1.08) rotate(-2deg)",
                      },
                    }}>
                    Book Quick Consult
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setQuoteOpen(true)}
                    sx={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)",
                      color: "#FFFFFF",
                      px: 4,
                      py: 2,
                      borderRadius: "50px",
                      fontSize: "16px !important",
                      fontWeight: 700,
                      minWidth: 250,
                      textTransform: "uppercase",
                      boxShadow: "0 14px 32px rgba(124, 58, 237, 0.35)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)",
                        boxShadow: "0 18px 40px rgba(124, 58, 237, 0.45)",
                        transform: "scale(1.05)",
                      },
                    }}>
                    Get a Quote
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(55, 0, 90, 0.78)",
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
                color: "#F5F3FF",
                animation: showOverlay ? "fadeSlideIn 0.4s ease forwards" : "none",
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
                  color: "#EDE9FE",
                }}>
                Accessories Concierge
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                Tell us what upgrade you need next
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(237, 233, 254, 0.88)",
                  lineHeight: 1.6,
                }}>
                Share part numbers, brands, or goals and we’ll source verified stock, handle consolidation,
                and deliver door-to-door with real-time updates.
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
                    background: "#16A34A",
                    color: "#FFFFFF",
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    fontWeight: 700,
                    minWidth: 250,
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#15803D",
                      boxShadow: "0 12px 28px rgba(22, 163, 74, 0.35)",
                    },
                  }}>
                  Book Quick Consult
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setQuoteOpen(true)}
                  sx={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)",
                    color: "#FFFFFF",
                    px: 4,
                    py: { xs: 2, sm: 2 },
                    borderRadius: "999px",
                    fontWeight: 700,
                    minWidth: 250,
                    boxShadow: "0 14px 32px rgba(124, 58, 237, 0.35)",
                    textTransform: "uppercase",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)",
                      boxShadow: "0 18px 40px rgba(124, 58, 237, 0.45)",
                      transform: "scale(1.05)",
                    },
                  }}>
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
        <DialogTitle sx={{ fontWeight: 700 }}>Request Accessories Quote</DialogTitle>
        <DialogContent dividers sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            value={quoteData.name}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, name: e.target.value }))}
            fullWidth
            required
          />
          <TextField
            label="Address"
            value={quoteData.address}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, address: e.target.value }))}
            fullWidth
            required
          />
          <TextField
            label="Import Location"
            value={quoteData.importLocation}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, importLocation: e.target.value }))}
            fullWidth
            required
          />
          <TextField
            label="Estimated Budget"
            value={quoteData.budget}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, budget: e.target.value }))}
            fullWidth
            required
          />
          <TextField
            label="Desired Timeline"
            value={quoteData.timeline}
            onChange={(e) => setQuoteData((prev) => ({ ...prev, timeline: e.target.value }))}
            fullWidth
            required
          />
          <TextField
            label="Additional Notes (Optional)"
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
              const message = `Accessories Quote:%0AName: ${quoteData.name}%0AAddress: ${
                quoteData.address
              }%0AImport Location: ${quoteData.importLocation}%0ABudget: ${
                quoteData.budget
              }%0ATimeline: ${quoteData.timeline}${
                quoteData.notes ? `%0ANotes: ${quoteData.notes}` : ""
              }`;
              const whatsappUrl = `https://wa.me/923263331000?text=${message}`;
              if (typeof window !== "undefined") {
                window.open(whatsappUrl, "_blank");
              }
              setQuoteOpen(false);
            }}
            disabled={
              !quoteData.name ||
              !quoteData.address ||
              !quoteData.importLocation ||
              !quoteData.budget ||
              !quoteData.timeline
            }
          >
            Submit via WhatsApp
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

