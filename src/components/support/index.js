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
  Avatar,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import {
  Phone,
  Email,
  Chat,
  ExpandMore,
  Star,
  AccessTime,
  CheckCircle,
  HeadsetMic,
  LiveHelp,
  Article,
  VideoLibrary,
} from "@mui/icons-material";

import Iconify from "src/components/iconify";

// Dummy data for support
const SUPPORT_CATEGORIES = [
  {
    icon: "/assets/icons/faqs/ic_account.svg",
    title: "Account & Billing",
    description: "Manage your account settings and billing information",
    color: "#4caf50",
    count: 12,
  },
  {
    icon: "/assets/icons/faqs/ic_payment.svg",
    title: "Payment Issues",
    description: "Resolve payment problems and refund requests",
    color: "#4caf50",
    count: 8,
  },
  {
    icon: "/assets/icons/faqs/ic_delivery.svg",
    title: "Shipping & Delivery",
    description: "Track orders and delivery information",
    color: "#4caf50",
    count: 15,
  },
  {
    icon: "/assets/icons/faqs/ic_package.svg",
    title: "Product Support",
    description: "Get help with product features and troubleshooting",
    color: "#4caf50",
    count: 23,
  },
  {
    icon: "/assets/icons/faqs/ic_refund.svg",
    title: "Returns & Refunds",
    description: "Process returns and refund requests",
    color: "#4caf50",
    count: 6,
  },
  {
    icon: "/assets/icons/faqs/ic_assurances.svg",
    title: "Warranty & Claims",
    description: "Warranty information and claim processing",
    color: "#4caf50",
    count: 4,
  },
];

const FREQUENT_QUESTIONS = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and follow the instructions sent to your email to create a new password.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping are also available for an additional fee.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in original condition with all packaging intact. Some items may have different return policies.",
  },
  {
    question: "How can I track my order?",
    answer:
      'You can track your order by logging into your account and visiting the "My Orders" section, or by using the tracking number provided in your shipping confirmation email.',
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please check our shipping calculator for specific rates.",
  },
];

const SUPPORT_AGENTS = [
  {
    name: "Sarah Johnson",
    role: "Senior Support Specialist",
    avatar: "/assets/images/avatar/avatar_1.jpg",
    rating: 4.9,
    responseTime: "2-4 hours",
    specialties: ["Billing", "Account Issues"],
    status: "online",
  },
  {
    name: "Michael Chen",
    role: "Technical Support Engineer",
    avatar: "/assets/images/avatar/avatar_2.jpg",
    rating: 4.8,
    responseTime: "1-3 hours",
    specialties: ["Technical Issues", "Product Support"],
    status: "online",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Manager",
    avatar: "/assets/images/avatar/avatar_3.jpg",
    rating: 4.9,
    responseTime: "4-6 hours",
    specialties: ["Returns", "Refunds"],
    status: "busy",
  },
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+923263333456",
    availability: "24/7",
    responseTime: "Immediate",
    color: "#4caf50",
  },
  {
    icon: Email,
    title: "Email Support",
    description: "Send us a detailed message",
    contact: "support@garagetunedautos.com",
    availability: "24/7",
    responseTime: "2-4 hours",
    color: "#4caf50",
  },
  {
    icon: Chat,
    title: "Live Chat",
    description: "Get instant help from our agents",
    contact: "Available on website",
    availability: "Mon-Fri, 9AM-6PM EST",
    responseTime: "Instant",
    color: "#4caf50",
  },
];

const HeroStat = ({ label, value }) => (
  <Box
    sx={{
      px: 3,
      py: 2,
      borderRadius: 3,
      backgroundColor: "rgba(15, 23, 42, 0.45)",
      border: "1px solid rgba(148, 163, 184, 0.2)",
      minWidth: { xs: "auto", sm: 200 },
      boxShadow: "0 24px 65px rgba(2, 6, 23, 0.35)",
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 800, color: "#f8fafc" }}>
      {value}
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "rgba(226, 232, 240, 0.78)", fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Box>
);

const Support = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Handler for contact button click
  const handleContactClick = (method) => {
    if (method.icon === Phone) {
      // Remove any non-digit/plus characters for tel: link
      const phone = method.contact.replace(/[^+\d]/g, "");
      window.open(`tel:${phone}`);
    } else if (method.icon === Email) {
      window.open(`mailto:${method.contact}`);
    }
    // For Chat or other methods, do nothing (or implement as needed)
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 55%, #020617 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 18%, rgba(16,185,129,0.22), transparent 60%)",
          opacity: 0.85,
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero Section */}
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
                bgcolor: "rgba(148, 163, 184, 0.12)",
                color: "#e2e8f0",
                px: 2.5,
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#f8fafc",
                fontSize: { xs: "2.6rem", md: "3.8rem" },
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
                color: "rgba(226, 232, 240, 0.82)",
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

          {/* <Box sx={{ textAlign: "center", maxWidth: 500, mx: "auto" }}>
            <TextField
              fullWidth
              placeholder="Search for help..."
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  "& fieldset": {
                    borderColor: "#4caf50",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00ff88",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00ff88",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.6)",
                    opacity: 1,
                  },
                },
              }}
            />
          </Box> */}
        </Box>

        {/* Support Categories */}
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

        {/* Support Team */}
        {/* <Box mb={8}>
          <Typography
            variant="h3"
            sx={{
              color: "#4caf50",
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}>
            Meet our support team
          </Typography>

          <Grid container spacing={4}>
            {SUPPORT_AGENTS.map((agent, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #4caf50",
                    borderRadius: 3,
                    p: 4,
                  }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 3 }}>
                    <Avatar
                      src={agent.avatar}
                      sx={{
                        width: 60,
                        height: 60,
                        border: "3px solid",
                        borderColor:
                          agent.status === "online" ? "#4caf50" : "#00ff88",
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#4caf50",
                          fontWeight: 700,
                        }}>
                        {agent.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ffffff",
                          opacity: 0.9,
                        }}>
                        {agent.role}
                      </Typography>
                    </Box>
                    <Chip
                      label={agent.status}
                      size="small"
                      sx={{
                        backgroundColor:
                          agent.status === "online"
                            ? "rgba(0, 255, 136, 0.1)"
                            : "rgba(255, 193, 7, 0.1)",
                        color:
                          agent.status === "online" ? "#4caf50" : "#00ff88",
                        border: "1px solid",
                        borderColor:
                          agent.status === "online" ? "#4caf50" : "#00ff88",
                      }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2 }}>
                    <Star sx={{ color: "#00ff88", fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 600,
                      }}>
                      {agent.rating}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ffffff",
                        opacity: 0.9,
                      }}>
                      rating
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 3 }}>
                    <AccessTime
                      sx={{ color: "#ffffff", opacity: 0.7, fontSize: 20 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ffffff",
                        opacity: 0.9,
                      }}>
                      Response time: {agent.responseTime}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4caf50",
                      mb: 2,
                      fontWeight: 600,
                    }}>
                    Specialties:
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {agent.specialties.map((specialty, idx) => (
                      <Chip
                        key={idx}
                        label={specialty}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(0, 255, 136, 0.1)",
                          color: "#4caf50",
                          border: "1px solid #4caf50",
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box> */}

        {/* FAQ Section */}
        <Box mb={8}>
          <Typography
            variant="h3"
            sx={{
              color: "#f8fafc",
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}>
            Frequently Asked Questions
          </Typography>

          <Paper
            sx={{
              background:
                "linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.6) 100%)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
              borderRadius: 4,
              backdropFilter: "blur(16px)",
            }}>
            {FREQUENT_QUESTIONS.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  backgroundColor: "transparent !important",
                  "&:before": {
                    display: "none",
                  },
                  "& .MuiAccordionSummary-root": {
                    color: "#f8fafc",
                    "&:hover": {
                      backgroundColor: "rgba(37, 99, 235, 0.12)",
                    },
                  },
                  "& .MuiAccordionDetails-root": {
                    color: "rgba(226, 232, 240, 0.85)",
                  },
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "#60a5fa" }} />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.65, color: "rgba(226, 232, 240, 0.85)" }}>
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
