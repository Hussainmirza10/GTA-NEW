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
import { useRouter } from "next/navigation";

const Services = () => {
  const services = [
    {
      id: 1,
      routeKey: "exterior-modification",
      title: "Exterior Modification",
      description:
        "Performance upgrades, ECU tuning, aero kits, and bespoke styling packages engineered by our in-house specialists to transform your vehicle.",
      image: "/assets/mechanicService.png",
      icon: <Build sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["ECU remapping", "Custom aero kits", "Suspension upgrades", "Carbon and forged components"],
      responseTime: "Consultation within 24 hrs",
    },
    {
      id: 2,
      routeKey: "leds",
      title: "LEDs",
      description:
        "Rapid-response flatbed and covered transport for supercars, classics, and daily drivers with full insurance coverage.",
      image: "/assets/towing.webp",
      icon: <DirectionsCar sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["24/7 recovery", "Covered transport", "GPS-tracked fleet", "Multi-vehicle capability"],
      responseTime: "Dispatched in 20-45 mins",
    },
    {
      id: 3,
      routeKey: "interior-modification",
      title: "Interior Modification",
      description:
        "Certified technicians fit performance parts, electronics, and protection packages with manufacturer-backed warranties.",
      image: "/assets/engine-designer.jpeg",
      icon: <Build sx={{ fontSize: 28, color: "#2563EB" }} />,
      features: ["OEM & aftermarket", "In-house fabrication", "Electronics calibration", "Ceramic & PPF"],
      responseTime: "Same-day appointments",
    },
    {
      id: 4,
      routeKey: "car studio",
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
      routeKey: "mechanical",
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
      routeKey: "call a mechanic",
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
    "exterior-modification": "/services/modify",
    leds: "/services/tow",
    "interior-modification": "/services/installation",
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
              { key: "exterior-modification", size: { xs: 12, md: 6 }, title: "Exterior Modification", accent: "#FFFFFF", image: "/assets/modify1.jpg", height: { xs: 200, md: 240 } },
              { key: "leds", size: { xs: 6, md: 3 }, title: "LEDs", accent: "#FFFFFF", image: "/assets/LEDs.webp" },
              { key: "interior-modification", size: { xs: 6, md: 3 }, title: "Interior Modification", accent: "#FFFFFF", image: "/assets/installation.jpg" },
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
                      tile.key === "leds"
                        ? "#FFFFFF"
                        : index === 2
                        ? "#FFFFFF"
                        : tile.key === "exterior-modification"
                        ? "#111827"
                        : tile.key === "call a mechanic"
                        ? "#FFFFFF"
                        : tile.key === "car studio"
                        ? "#FFFFFF"
                        : tile.key === "mechanical"
                        ? "#FFFFFF"
                        : tile.key === "interior-modification"
                        ? "#FFFFFF"
                        : "#F8FAFC",
                    textTransform: "none",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    px: tile.key === "exterior-modification" ? 0 : 3,
                    justifyContent: tile.key === "exterior-modification" ? "flex-start" : "flex-start",
                    alignItems: tile.key === "exterior-modification" ? "flex-start" : "flex-start",
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
                          : tile.key === "leds"
                          ? "rgba(17, 24, 39, 0.12)"
                          : "rgba(15, 23, 42, 0.22)",
                      opacity: 0,
                      transition: "opacity 0.35s ease",
                      zIndex: 1,
                    }}
                  />
                  {tile.key === "exterior-modification" ? (
                    <Box
                      className="tile-image"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${tile.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        opacity: 1,
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
                        opacity: 1,
                        transition: "opacity 0.35s ease",
                        zIndex: 0,
                      }}
                    />
                  ) : tile.key === "car studio" || tile.key === "mechanical" || tile.key === "interior-modification" || tile.key === "leds" ? (
                    <Box
                      className="tile-image"
                  sx={{
                    position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${tile.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition:
                          tile.key === "leds" ? "right -80px" : "center",
                        opacity: 1,
                        transition: "opacity 0.35s ease",
                        zIndex: 0,
                      }}
                    />
                  ) : null}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      color: "#FFFFFF",
                      textAlign: "left",
                    }}
                  >
                    {tile.key === "exterior-modification" ? (
                      <>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "3rem", md: "3.6rem" },
                            textTransform: "uppercase",
                            lineHeight: 1.05,
                          }}
                        >
                          Exterior
                        </Typography>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            mt: 0.5,
                            letterSpacing: 6,
                            fontWeight: 700,
                            fontSize: { xs: "3rem", md: "3.6rem" },
                            textTransform: "uppercase",
                            mt: 0.5,
                          }}
                        >
                          Modification
                        </Typography>
                      </>
                    ) : tile.key === "call a mechanic" ? (
                      <>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "2.2rem", md: "2.8rem" },
                            textTransform: "uppercase",
                          }}
                        >
                          CALL A
                        </Typography>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "2.2rem", md: "2.8rem" },
                            textTransform: "uppercase",
                          }}
                        >
                          MECHANIC
                        </Typography>
                      </>
                    ) : tile.key === "car studio" ? (
                      <>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "2.4rem", md: "3.1rem" },
                            textTransform: "uppercase",
                          }}
                        >
                          CAR
                        </Typography>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "2.4rem", md: "3.1rem" },
                            textTransform: "uppercase",
                          }}
                        >
                          STUDIO
                        </Typography>
                      </>
                    ) : tile.key === "mechanical" ? (
                      <Typography
                        variant="overline"
                        sx={{
                          display: "block",
                          letterSpacing: 6,
                          fontWeight: 900,
                          fontSize: { xs: "2.4rem", md: "3.1rem" },
                          textTransform: "uppercase",
                        }}
                      >
                        MECHANICAL
                      </Typography>
                    ) : tile.key === "interior-modification" ? (
                      <>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 900,
                            fontSize: { xs: "2rem", md: "2.4rem" },
                            textTransform: "uppercase",
                          }}
                        >
                          Interior
                        </Typography>
                        <Typography
                          variant="overline"
                          sx={{
                            display: "block",
                            letterSpacing: 6,
                            fontWeight: 700,
                            fontSize: { xs: "1.7rem", md: "2.1rem" },
                            textTransform: "uppercase",
                            mt: 0.5,
                          }}
                        >
                          Modification
                        </Typography>
                      </>
                    ) : tile.key === "leds" ? (
                      <Typography
                        variant="overline"
                        sx={{
                          display: "block",
                          letterSpacing: 6,
                          fontWeight: 900,
                          fontSize: { xs: "2.4rem", md: "3.1rem" },
                          textTransform: "uppercase",
                        }}
                      >
                        LED<span style={{ textTransform: "lowercase" }}>s</span>
                      </Typography>
                    ) : (
                      <Typography
                        variant="overline"
                        sx={{
                          letterSpacing: 6,
                          fontWeight: 900,
                          fontSize: "inherit",
                          textTransform: "uppercase",
                        }}
                      >
                        {tile.title}
                      </Typography>
                    )}
                  </Box>
                  {tile.key !== "exterior-modification" && tile.key !== "call a mechanic" && tile.key !== "leds" && tile.key !== "car studio" && tile.key !== "mechanical" && tile.key !== "interior-modification" && (
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
                      {services.find((service) =>
                        service.title.toLowerCase().includes(
                          tile.key.replace(/-/g, " ").toLowerCase()
                        )
                      )?.description ||
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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 10 },
          backgroundColor: "#080B13",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/rentcar.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.55)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(8,11,19,0.65) 0%, rgba(8,11,19,0.82) 45%, rgba(8,11,19,0.94) 100%)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 6,
                color: "rgba(191,219,254,0.92)",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              Tailored Programs
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#F9FAFB",
                textAlign: "center",
                maxWidth: 680,
              }}
            >
              Services engineered to keep you moving
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(226,232,240,0.78)",
                maxWidth: 720,
                textAlign: "center",
                lineHeight: 1.8,
              }}
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
                      borderRadius: 5,
                      backgroundColor: "rgba(15,23,42,0.75)",
                      border: "1px solid rgba(148,163,184,0.18)",
                      boxShadow: "0 32px 80px rgba(8,11,19,0.35)",
                      overflow: "hidden",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      flexDirection: "column",
                      transition: (theme) =>
                        theme.transitions.create(["transform", "box-shadow", "border"], {
                          duration: theme.transitions.duration.standard,
                        }),
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 40px 100px rgba(8,11,19,0.45)",
                        border: "1px solid rgba(191,219,254,0.45)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "58%",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          filter: "brightness(0.9)",
                          transform: "scale(1.02)",
                          transition: "transform 0.4s ease",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(8,11,19,0) 0%, rgba(8,11,19,0.65) 100%)",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: { xs: 3.5, md: 4 },
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        flexGrow: 1,
                      }}
                    >
                      <Stack spacing={1.6}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          {React.cloneElement(service.icon, { sx: { fontSize: 28, color: "#60A5FA" } })}
                          <Typography variant="h5" sx={{ fontWeight: 700, color: "#F9FAFB" }}>
                            {service.title}
                          </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: "rgba(226,232,240,0.78)", lineHeight: 1.75 }}>
                          {service.description}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: "#93C5FD" }}>
                          Typical response: {service.responseTime}
                        </Typography>
                      </Stack>

                      <Stack spacing={1.4}>
                        {service.features.slice(0, count).map((feature, index) => (
                          <Stack direction="row" spacing={1.5} alignItems="center" key={index}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#60A5FA",
                                boxShadow: "0 0 12px rgba(96,165,250,0.45)",
                              }}
                            />
                            <Typography variant="body2" sx={{ color: "#E2E8F0", fontWeight: 500 }}>
                              {feature}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mt="auto">
                        <Button
                          variant="contained"
                          startIcon={<WhatsApp />}
                          onClick={() => handleWhatsAppClick(service.title)}
                          sx={{
                            background: "linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)",
                            color: "#0B1220",
                            py: 1.2,
                            fontWeight: 700,
                            borderRadius: "999px",
                            flex: 1,
                            "&:hover": {
                              background: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
                            },
                          }}
                        >
                          Book via WhatsApp
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => handleTileClick(service.routeKey, service.title)}
                          sx={{
                            borderRadius: "999px",
                            px: 3,
                            color: "#E2E8F0",
                            borderColor: "rgba(226,232,240,0.55)",
                            flex: 1,
                            "&:hover": {
                              borderColor: "rgba(226,232,240,0.9)",
                              backgroundColor: "rgba(226,232,240,0.08)",
                            },
                          }}
                        >
                          View Service
                        </Button>
                      </Stack>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

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

    </Box>
  );
};

export default Services;
