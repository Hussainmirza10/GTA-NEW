"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Paper,
} from "@mui/material";
import {
  WhatsApp,
  Build,
  DirectionsCar,
  LocalCarWash,
  Support,
} from "@mui/icons-material";
import Image from "src/components/image";
import CarRentSection from "../cars-filters/car-rent";
import { useRouter } from "next/navigation";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Modify",
      description:
        "Performance upgrades, ECU tuning, aero kits, and bespoke styling packages engineered by our in-house specialists to transform your vehicle.",
      image: "/assets/mechanicService.png",
      icon: <Build sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["ECU remapping", "Custom aero kits", "Suspension upgrades", "Carbon and forged components"],
      responseTime: "Consultation within 24 hrs",
    },
    {
      id: 2,
      title: "Tow",
      description:
        "Rapid-response flatbed and covered transport for supercars, classics, and daily drivers with full insurance coverage.",
      image: "/assets/towing.webp",
      icon: <DirectionsCar sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["24/7 recovery", "Covered transport", "GPS-tracked fleet", "Multi-vehicle capability"],
      responseTime: "Dispatched in 20-45 mins",
    },
    {
      id: 3,
      title: "Installation",
      description:
        "Certified technicians fit performance parts, electronics, and protection packages with manufacturer-backed warranties.",
      image: "/assets/engine-designer.jpeg",
      icon: <Build sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["OEM & aftermarket", "In-house fabrication", "Electronics calibration", "Ceramic & PPF"],
      responseTime: "Same-day appointments",
    },
    {
      id: 4,
      title: "Car Studio",
      description:
        "Concours-level detailing, paint correction, ceramic coatings, and interior rejuvenation tailored to your schedule.",
      image: "/assets/car-studio.png",
      icon: <LocalCarWash sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["Multi-stage correction", "Ceramic protection", "Interior deep clean", "Show-car finishing"],
      responseTime: "Detailing slots daily",
    },
    {
      id: 5,
      title: "Mechanical",
      description:
        "Dealer-grade diagnostics, preventative maintenance, and complex repairs delivered by master technicians.",
      image: "/assets/mechanicService.png",
      icon: <Build sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["Computer diagnostics", "Engine & driveline", "Fluid services", "Performance health checks"],
      responseTime: "Workshop booking within 24 hrs",
    },
    {
      id: 6,
      title: "Call a Mechanic",
      description:
        "Mobile technicians arrive with a full toolkit to resolve roadside issues, perform inspections, and get you moving fast.",
      image: "/assets/Call-a-mechanic.png",
      icon: <Support sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["Roadside diagnostics", "Battery & tyre support", "Fluid top-ups", "On-location repairs"],
      responseTime: "Technician ETA 30 mins",
    },
  ];

  const handleWhatsAppClick = (serviceName) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/+923263330222?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const router = useRouter();

  const tileRoutes = {
    modify: "/services/modify",
    tow: "/services/tow",
    installation: "/services/installation",
    "call a mechanic": "/services/call-a-mechanic",
    mechanical: "/services/mechanical",
    "car studio": "/services/car-studio",
  };

  const handleTileClick = (key, title) => {
    const target = tileRoutes[key];
    if (target) {
      router.push(target);
      return;
    }
    handleWhatsAppClick(title);
  };
  return (
    <Box sx={{ backgroundColor: "#F8FAFC" }}>
      {/* Hero */}
    <Box
      sx={{
          background:
            "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(191, 219, 254, 0.24) 40%, rgba(249, 250, 251, 1) 100%)",
          py: { xs: 8, md: 12 },
        }}
      >
      <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
          <Typography
                  variant="overline"
            sx={{
                    letterSpacing: 4,
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  Signature Services
          </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.6rem", md: "3.5rem" },
                    color: "#111827",
                    lineHeight: 1.1,
                  }}
                >
                  Concierge Care for Every Drive
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4B5563",
                    fontSize: { xs: "1.05rem", md: "1.1rem" },
                    maxWidth: 540,
                  }}
                >
                  From emergency roadside response to show-car detailing, our specialists
                  curate every experience to keep your vehicle performing and presenting at its best.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<WhatsApp />}
                    onClick={() => handleWhatsAppClick("concierge services")}
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
                    Talk to Concierge
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleWhatsAppClick("service quote")}
                    sx={{
                      borderRadius: "999px",
                      px: 4,
                      py: 1.4,
                      fontWeight: 600,
                      borderColor: "rgba(17, 24, 39, 0.4)",
                      color: "#111827",
                      "&:hover": {
                        borderColor: "#111827",
                        backgroundColor: "rgba(17, 24, 39, 0.08)",
                      },
                    }}
                  >
                    Request a Quote
                  </Button>
                </Stack>
            </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "40px",
                  overflow: "hidden",
                  height: { xs: 260, md: 360 },
                  boxShadow: "0 30px 70px rgba(15, 23, 42, 0.25)",
                }}
              >
                <Image
                  alt="Service banner"
                  src="/assets/service banner.jpg"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: "#0F172A",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        </Box>

      {/* Forza-style Tile Grid */}
      <Box
                sx={{
          position: "relative",
          py: { xs: 6, md: 7 },
          backgroundColor: "rgba(8, 11, 19, 0.85)",
                  overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/background2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.65,
            filter: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(8, 11, 19, 0.6) 50%, rgba(10, 12, 20, 0.55) 100%)",
          }}
        />
        <Container maxWidth="xl">
          <Box sx={{ position: "relative" }}>
          <Grid container spacing={1.5}>
            {[
              { key: "modify", size: { xs: 12, md: 6 }, title: "Modify", accent: "#FFFFFF", image: "/assets/modify1.jpg", height: { xs: 200, md: 240 } },
              { key: "tow", size: { xs: 6, md: 3 }, title: "Tow", accent: "#FFFFFF", image: "/assets/towing.jpg" },
              { key: "installation", size: { xs: 6, md: 3 }, title: "Installation", accent: "#FFFFFF", image: "/assets/installation.jpg" },
              { key: "call a mechanic", size: { xs: 6, md: 4 }, title: "Call A Mechanic", accent: "#FFFFFF", image: "/assets/callmech.jpg" },
              { key: "mechanical", size: { xs: 6, md: 4 }, title: "Mechanical", accent: "#FFFFFF", image: "/assets/mechanical.jpg" },
              { key: "car studio", size: { xs: 12, md: 4 }, title: "Car Studio", accent: "#FFFFFF", image: "/assets/carstudio.jpg", height: { xs: 200, md: 240 } },
            ].map((tile, index) => (
              <Grid item {...tile.size} key={tile.key}>
                <Button
                  fullWidth
                  onClick={() => handleTileClick(tile.key, tile.title)}
                  sx={{
                    position: "relative",
                    height: tile.height || { xs: 200, md: 240 },
                    borderRadius: 0,
                    backgroundColor: tile.accent,
                    color:
                      tile.key === "tow"
                        ? "#FFFFFF"
                        : index === 2
                        ? "#FFFFFF"
                        : tile.key === "modify"
                        ? "#111827"
                        : tile.key === "call a mechanic"
                        ? "#FFFFFF"
                        : tile.key === "car studio"
                        ? "#FFFFFF"
                        : tile.key === "mechanical"
                        ? "#FFFFFF"
                        : tile.key === "installation"
                        ? "#FFFFFF"
                        : "#F8FAFC",
                    textTransform: "none",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    px: tile.key === "modify" ? 0 : 3,
                    justifyContent: tile.key === "modify" ? "flex-start" : "flex-start",
                    alignItems: tile.key === "modify" ? "flex-start" : "flex-start",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    overflow: "hidden",
                    transition: (theme) =>
                      theme.transitions.create(["transform", "border"], {
                        duration: theme.transitions.duration.short,
                      }),
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "rgba(30, 58, 138, 0.45)",
                    },
                    "&:hover .tile-overlay": {
                      opacity: tile.key === "mechanical" ? 0.65 : 0.45,
                    },
                    "&:hover .tile-image": {
                      opacity: tile.key === "mechanical" ? 0.25 : 0.35,
                    },
                  }}
                >
                  <Box
                    className="tile-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor:
                        tile.key === "call a mechanic" || tile.key === "car studio" || tile.key === "mechanical"
                          ? "rgba(15, 23, 42, 0.6)"
                          : tile.key === "tow"
                          ? "rgba(17, 24, 39, 0.12)"
                          : "rgba(15, 23, 42, 0.22)",
                      opacity: tile.key === "car studio" ? 0.1 : tile.key === "mechanical" ? 0.2 : 0,
                      transition: "opacity 0.35s ease",
                      zIndex: 1,
                    }}
                  />
                  {tile.key === "modify" ? (
                    <Box
                      className="tile-image"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${tile.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        opacity: 0.9,
                        transition: "opacity 0.35s ease",
                        zIndex: 0,
                      }}
                    />
                  ) : null}
                  {tile.key === "call a mechanic" ? (
                    <Box
                      className="tile-image"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${tile.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        opacity: 0.85,
                        transition: "opacity 0.35s ease",
                        zIndex: 0,
                      }}
                    />
                  ) : tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation" || tile.key === "tow" ? (
                    <Box
                      className="tile-image"
                  sx={{
                    position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${tile.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        opacity: tile.key === "tow" ? 0.75 : tile.key === "mechanical" ? 0.7 : 0.85,
                        transition: "opacity 0.35s ease",
                        zIndex: 0,
                      }}
                    />
                  ) : null}
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: tile.key === "modify" ? 8 : tile.key === "tow" ? 6 : 6,
                      fontWeight: 900,
                      fontSize:
                        tile.key === "modify"
                          ? { xs: "3.4rem", md: "4.2rem" }
                          : tile.key === "call a mechanic"
                          ? { xs: "2.2rem", md: "2.8rem" }
                          : tile.key === "car studio" || tile.key === "mechanical" || tile.key === "tow"
                          ? { xs: "2.4rem", md: "3.1rem" }
                          : tile.key === "installation"
                          ? { xs: "2.6rem", md: "3.3rem" }
                          : "inherit",
                      position: "relative",
                      zIndex: 2,
                      color:
                        tile.key === "modify"
                          ? "#FFFFFF"
                          : tile.key === "call a mechanic"
                          ? "#FFFFFF"
                          : tile.key === "tow" || tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation"
                          ? "#FFFFFF"
                          : "inherit",
                      width:
                        tile.key === "modify" || tile.key === "call a mechanic" || tile.key === "tow" || tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation"
                          ? "100%"
                          : "auto",
                      textAlign:
                        tile.key === "modify"
                          ? "left"
                          : tile.key === "call a mechanic"
                          ? "left"
                          : tile.key === "tow" || tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation"
                          ? "left"
                          : "inherit",
                      px:
                        tile.key === "modify"
                          ? { xs: 1.5, md: 2 }
                          : tile.key === "call a mechanic" || tile.key === "tow" || tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation"
                          ? { xs: 1.5, md: 2 }
                          : 0,
                      pt:
                        tile.key === "modify"
                          ? { xs: 1.5, md: 2 }
                          : tile.key === "call a mechanic" || tile.key === "tow" || tile.key === "car studio" || tile.key === "mechanical" || tile.key === "installation"
                          ? { xs: 1.5, md: 2 }
                          : 0,
                      lineHeight: tile.key === "call a mechanic" ? 1.05 : 1.2,
                      textTransform: tile.key === "call a mechanic" ? "none" : "uppercase",
                    }}
                  >
                    {tile.key === "call a mechanic" ? (
                      <>
                        <span style={{ display: "block" }}>CALL A</span>
                        <span style={{ display: "block" }}>MECHANIC</span>
                      </>
                    ) : tile.key === "car studio" ? (
                      <>
                        <span style={{ display: "block" }}>CAR</span>
                        <span style={{ display: "block" }}>STUDIO</span>
                      </>
                    ) : tile.key === "mechanical" ? (
                      <span style={{ display: "block" }}>MECHANICAL</span>
                    ) : tile.key === "installation" ? (
                      <span style={{ display: "block" }}>INSTALLATION</span>
                    ) : tile.key === "tow" ? (
                      <span style={{ display: "block" }}>TOWING</span>
                    ) : (
                      tile.title.toUpperCase()
                    )}
                  </Typography>
                  {tile.key !== "modify" && tile.key !== "call a mechanic" && tile.key !== "tow" && tile.key !== "car studio" && tile.key !== "mechanical" && tile.key !== "installation" && (
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        color: "rgba(248, 250, 252, 0.8)",
                        maxWidth: 220,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {services.find((service) => service.title.toLowerCase().includes(tile.key))?.description ||
                        "Tap to connect with our team."}
                    </Typography>
                  )}
                </Button>
              </Grid>
            ))}
          </Grid>
          </Box>
        </Container>
      </Box>

      {/* Services Overview */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#2563EB", fontWeight: 700 }}>
            Tailored Programs
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "#111827", textAlign: "center", maxWidth: 640 }}
          >
            Services engineered to keep you moving
                    </Typography>
                    <Typography
                      variant="body1"
            sx={{ color: "#4B5563", maxWidth: 680, textAlign: "center" }}
          >
            Select from our most-requested concierge offerings. Every package is backed by certified experts,
            transparent pricing, and rapid response support.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service) => {
            const count = service.features.length;
            return (
              <Grid item xs={12} md={4} key={service.id}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(17, 24, 39, 0.08)",
                    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                    overflow: "hidden",
                    transition: (theme) =>
                      theme.transitions.create(["transform", "box-shadow", "border"], {
                        duration: theme.transitions.duration.short,
                      }),
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 24px 55px rgba(37, 99, 235, 0.2)",
                      border: "1px solid rgba(37, 99, 235, 0.35)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "60%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </Box>

                  <Box sx={{ p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 3, flexGrow: 1 }}>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        {service.icon}
                        <Typography variant="h5" sx={{ fontWeight: 700, color: "#111827" }}>
                          {service.title}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: "#4B5563", lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "#2563EB" }}>
                        Typical response: {service.responseTime}
                    </Typography>
                    </Stack>

                    <Stack spacing={1.5}>
                      {service.features.slice(0, count).map((feature, index) => (
                        <Stack direction="row" spacing={1.5} alignItems="center" key={index}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#2563EB",
                              boxShadow: "0 0 12px rgba(37, 99, 235, 0.45)",
                            }}
                          />
                          <Typography variant="body2" sx={{ color: "#1F2937", fontWeight: 500 }}>
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                  <Button
                    variant="contained"
                    startIcon={<WhatsApp />}
                    onClick={() => handleWhatsAppClick(service.title)}
                    sx={{
                        mt: "auto",
                        backgroundColor: "#111827",
                        color: "#FFFFFF",
                        py: 1.4,
                        fontWeight: 600,
                        borderRadius: "999px",
                        "&:hover": { backgroundColor: "#000" },
                      }}
                    >
                      Book via WhatsApp
                  </Button>
                  </Box>
                </Paper>
            </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Support CTA */}
      <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            px: { xs: 4, md: 8 },
            py: { xs: 5, md: 7 },
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(191, 219, 254, 0.25))",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack spacing={1.5} textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#1E3A8A" }}>
                Need the team on stand-by?
          </Typography>
              <Typography variant="body1" sx={{ color: "#1F2937", maxWidth: 520 }}>
                Our concierge managers are available around the clock to coordinate
                roadside support, vehicle swaps, or custom detailing packages.
          </Typography>
            </Stack>
          <Button
            variant="contained"
              startIcon={<Support />}
              onClick={() => handleWhatsAppClick("support team")}
            sx={{
                backgroundColor: "#111827",
                color: "#FFFFFF",
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Contact Support
          </Button>
          </Stack>
        </Paper>
      </Container>

      <CarRentSection />
    </Box>
  );
};

export default Services;
