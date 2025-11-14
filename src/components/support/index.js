"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Paper,
} from "@mui/material";
import { Phone, Email, Chat, ExpandMore } from "@mui/icons-material";
import Iconify from "src/components/iconify";

const SUPPORT_CATEGORIES = [
  {
    icon: "/assets/icons/faqs/ic_account.svg",
    title: "Account & Billing",
    description: "Manage profiles, invoices, and subscription preferences.",
    count: 12,
  },
  {
    icon: "/assets/icons/faqs/ic_payment.svg",
    title: "Payment Issues",
    description: "Resolve payment errors, declined cards, and refunds.",
    count: 8,
  },
  {
    icon: "/assets/icons/faqs/ic_delivery.svg",
    title: "Shipping & Delivery",
    description: "Track parcels, update delivery windows, and arrange pickups.",
    count: 15,
  },
  {
    icon: "/assets/icons/faqs/ic_package.svg",
    title: "Product Support",
    description: "Request fitment help, installation advice, and warranties.",
    count: 23,
  },
  {
    icon: "/assets/icons/faqs/ic_refund.svg",
    title: "Returns & Refunds",
    description: "Start a return, monitor approvals, and review policies.",
    count: 6,
  },
  {
    icon: "/assets/icons/faqs/ic_assurances.svg",
    title: "Warranty & Claims",
    description: "File a claim and review coverage for GTA-backed products.",
    count: 4,
  },
];

const FREQUENT_QUESTIONS = [
  {
    question: "How do I reset my password?",
    answer:
      'Tap "Forgot password" on the sign-in screen, enter your email, and follow the secure link we send within minutes.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Visa, MasterCard, AmEx, PayPal, and bank transfers are accepted. All transactions are PCI-DSS compliant.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard deliveries arrive in 3–5 business days. Express upgrades (1–2 days) are available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Items can be returned within 30 days if unused and in original packaging. Some custom parts carry special terms.",
  },
  {
    question: "How can I track my order?",
    answer:
      'Use the tracking link from your shipping confirmation email or check "My Orders" inside your dashboard.',
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. International rates and timelines vary by region and are calculated at checkout before you confirm.",
  },
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak to a concierge specialist for urgent requests.",
    contact: "+92 326 333 3456",
    availability: "24/7 hotline",
    responseTime: "Immediate",
  },
  {
    icon: Email,
    title: "Email Support",
    description: "Share detailed questions, estimates, or supporting docs.",
    contact: "support@garagetunedautos.com",
    availability: "All days",
    responseTime: "2–4 hours",
  },
  {
    icon: Chat,
    title: "Live Chat",
    description: "Connect with a build advisor in real time.",
    contact: "Launch in bottom-right corner",
    availability: "Mon–Fri • 9am–6pm (PKT)",
    responseTime: "Instant",
  },
];

const HeroStat = ({ label, value }) => (
  <Box
    sx={{
      px: 3,
      py: 2,
      borderRadius: 3,
      backgroundColor: "#ffffff",
      border: "1px solid rgba(226, 232, 240, 0.9)",
      minWidth: { xs: "auto", sm: 200 },
      boxShadow: "0 24px 55px rgba(15, 23, 42, 0.12)",
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 800, color: "#0f172a" }}>
      {value}
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "rgba(71, 85, 105, 0.85)", fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Box>
);

const Support = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleContactClick = (method) => {
    if (method.icon === Phone) {
      const phone = method.contact.replace(/[^+\d]/g, "");
      window.open(`tel:${phone}`);
    } else if (method.icon === Email) {
      window.open(`mailto:${method.contact}`);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #f1f5f9 0%, #f8fafc 55%, #f1f5f9 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 18%, rgba(191,219,254,0.5), transparent 55%), radial-gradient(circle at 82% 22%, rgba(167,243,208,0.45), transparent 55%)",
          opacity: 0.8,
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 8, md: 10 },
            px: { xs: 2, md: 8 },
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Chip
              label="Garage Tuned Autos Support"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1.6,
                fontWeight: 700,
                bgcolor: "rgba(148, 163, 184, 0.16)",
                color: "#0f172a",
                px: 2.5,
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                fontSize: { xs: "2.6rem", md: "3.6rem" },
                maxWidth: 720,
                lineHeight: 1.1,
              }}
            >
              How can we get you back on the road faster?
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 720,
                color: "rgba(71, 85, 105, 0.8)",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Reach our technicians, browse curated help guides, or jump into a
              live chat. The GTA concierge team is always within reach.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ pt: 1 }}
            >
              <HeroStat label="Response time" value="15 min avg" />
              <HeroStat label="Knowledge articles" value="120+" />
              <HeroStat label="Live agents" value="24/7" />
            </Stack>
          </Stack>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h3"
            sx={{
              color: "#f8fafc",
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}>
            What do you need help with?
          </Typography>

          <Grid container spacing={3}>
            {SUPPORT_CATEGORIES.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.62) 100%)",
                    border: "1px solid rgba(74, 222, 128, 0.18)",
                    borderRadius: 4,
                    backdropFilter: "blur(12px)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "rgba(74, 222, 128, 0.45)",
                      boxShadow: "0 24px 65px rgba(15, 118, 110, 0.25)",
                    },
                  }}>
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: "rgba(74, 222, 128, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        border: "1px solid rgba(74, 222, 128, 0.45)",
                      }}>
                      <Iconify
                        icon={category.icon}
                        sx={{
                          width: 30,
                          height: 30,
                          color: "#4ade80",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#bbf7d0",
                        mb: 2,
                        fontWeight: 700,
                      }}>
                      {category.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(226, 232, 240, 0.78)",
                        mb: 3,
                        lineHeight: 1.6,
                      }}>
                      {category.description}
                    </Typography>

                    <Chip
                      label={`${category.count} articles`}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(59, 130, 246, 0.15)",
                        color: "#dbeafe",
                        fontWeight: 600,
                        border: "1px solid rgba(59, 130, 246, 0.35)",
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Methods */}
        <Box mb={8}>
          <Typography
            variant="h3"
            sx={{
              color: "#f8fafc",
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}>
            Get in touch with us
          </Typography>

          <Grid container spacing={4}>
            {CONTACT_METHODS.map((method, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.62) 100%)",
                    border: "1px solid rgba(96, 165, 250, 0.22)",
                    borderRadius: 4,
                    backdropFilter: "blur(12px)",
                    textAlign: "center",
                    p: 4,
                  }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "rgba(37, 99, 235, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                      border: "1px solid rgba(96, 165, 250, 0.45)",
                    }}>
                    <method.icon
                      sx={{
                        width: 40,
                        height: 40,
                        color: "#60a5fa",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#bfdbfe",
                      mb: 2,
                      fontWeight: 700,
                    }}>
                    {method.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(226, 232, 240, 0.78)",
                      mb: 3,
                      lineHeight: 1.6,
                    }}>
                    {method.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#38bdf8",
                      mb: 2,
                      fontWeight: 700,
                    }}>
                    {method.contact}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 3 }}>
                    <Chip
                      label={method.availability}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(37, 99, 235, 0.15)",
                        color: "#e0f2fe",
                        border: "1px solid rgba(37, 99, 235, 0.35)",
                      }}
                    />
                    <Chip
                      label={method.responseTime}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(16, 185, 129, 0.18)",
                        color: "#bbf7d0",
                        border: "1px solid rgba(16, 185, 129, 0.32)",
                      }}
                    />
                  </Stack>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(16,185,129,1) 100%)",
                      color: "#0b1120",
                      py: 2,
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      borderRadius: 999,
                      boxShadow: "0 20px 60px rgba(37, 99, 235, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(37,99,235,1) 0%, rgba(16,185,129,1) 100%)",
                      },
                    }}
                    onClick={() => handleContactClick(method)}>
                    Contact Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box mb={8}>
          <Typography
            variant="h3"
            sx={{
              color: "#0f172a",
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}>
            Frequently Asked Questions
          </Typography>

          <Paper
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(226, 232, 240, 0.9)",
              borderRadius: 4,
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.1)",
            }}>
            {FREQUENT_QUESTIONS.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                disableGutters
                elevation={0}
                square
                sx={{
                  "&:before": { display: "none" },
                  "& .MuiAccordionSummary-root": {
                    px: { xs: 2, md: 3 },
                    py: { xs: 2, md: 2.5 },
                    color: "#0f172a",
                    "&:hover": {
                      backgroundColor: "rgba(226, 232, 240, 0.45)",
                    },
                  },
                  "& .MuiAccordionDetails-root": {
                    px: { xs: 2, md: 3 },
                    pb: { xs: 2.5, md: 3 },
                    color: "rgba(71, 85, 105, 0.9)",
                  },
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "#2563eb" }} />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ lineHeight: 1.65 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            mt: { xs: 8, md: 10 },
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(16,185,129,0.24) 100%)",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: 5,
            textAlign: "center",
            backdropFilter: "blur(18px)",
            boxShadow: "0 45px 120px rgba(2, 6, 23, 0.5)",
          }}>
          <Typography
            variant="h3"
            sx={{
              color: "#f8fafc",
              mb: 3,
              fontWeight: 800,
            }}>
            Still need a specialist?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(226, 232, 240, 0.85)",
              mb: 4,
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.7,
            }}>
            Our concierge team can route you to a master technician, setup a
            workshop visit, or dispatch mobile support within minutes.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<Chat />}
              sx={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(16,185,129,1) 100%)",
                color: "#0b1120",
                px: 4,
                py: 2,
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 1,
                borderRadius: 999,
                boxShadow: "0 24px 70px rgba(37, 99, 235, 0.45)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,1) 0%, rgba(5,150,105,1) 100%)",
                },
              }}>
              Start Live Chat
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              sx={{
                borderColor: "rgba(148, 163, 184, 0.4)",
                color: "#e2e8f0",
                px: 4,
                py: 2,
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 1,
                borderRadius: 999,
                "&:hover": {
                  borderColor: "rgba(148, 163, 184, 0.8)",
                  backgroundColor: "rgba(148, 163, 184, 0.08)",
                },
              }}>
              Send Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Support;
