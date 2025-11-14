import { useMemo } from "react";
import Slider from "react-slick";
import { Box, Typography, Stack, Button } from "@mui/material";
import Iconify from "src/components/iconify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopHero = () => {
  const slides = useMemo(
    () => [
      {
        id: "chemicals",
        label: "Lab-Grade Detailing",
        title: "Advanced Chemical Solutions",
        subtitle: "Biodegradable foams, ceramic coats & interior protection engineered for pros.",
        cta: {
          text: "Shop Chemicals",
          href: "/shop?category=chemicals",
        },
        gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        accent: "rgba(15, 23, 42, 0.08)",
        image: "/assets/chemical-bg.png",
      },
      {
        id: "leds",
        label: "Illuminate the Streets",
        title: "HyperBright LED Upgrades",
        subtitle: "Neon ambient kits, laser headlights & smart DRLs for every build.",
        cta: {
          text: "Explore LEDs",
          href: "/shop?category=lighting",
        },
        gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        accent: "rgba(15, 23, 42, 0.08)",
        image: "/assets/background/overlay_4.jpg",
      },
      {
        id: "wheels",
        label: "Blueprint Your Stance",
        title: "Wheels",
        subtitle: "Spin in Style – Premium GTA Wheels Await",
        cta: {
          text: "View Wheels",
          href: "/shop?category=tyres-wheels",
        },
        gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        accent: "rgba(15, 23, 42, 0.08)",
        image: "/assets/Adobe Express - file.png",
      },
      {
        id: "comics",
        label: "Limited Edition Drops",
        title: "Comic",
        subtitle: "Collaborations, wraps and collectibles inspired by retro neon culture.",
        cta: {
          text: "Discover Specials",
          href: "/shop?search=comic",
        },
        gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        accent: "rgba(15, 23, 42, 0.08)",
        image: "/assets/background/overlay_2.jpg",
      },
      {
        id: "accessories",
        label: "Complete Your Build",
        title: "Accessories",
        subtitle: "Neon trims, infotainment upgrades, and curated lifestyle gear now in stock.",
        cta: {
          text: "Browse Accessories",
          href: "/shop?category=accessories",
        },
        gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        accent: "rgba(15, 23, 42, 0.08)",
        image: "/assets/background/overlay_accessories.jpg",
      },
    ],
    []
  );

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      adaptiveHeight: false,
    }),
    []
  );

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        pt: { xs: 0, md: 0 },
        pb: { xs: 0, md: 0 },
      }}>
      <Box
        sx={{
          width: "100%",
          px: 0,
        }}>
        <Box
          sx={{
            ".slick-slider": {
              width: "100%",
            },
            ".slick-track": {
              display: "flex",
            },
            ".slick-slide": {
              height: "auto",
            },
            ".slick-dots": {
              bottom: { xs: 12, md: 18 },
            },
            ".slick-dots li button:before": {
              fontSize: 10,
              color: "#e5e7eb",
              opacity: 0.4,
            },
            ".slick-dots li.slick-active button:before": {
              color: "#ffffff",
              opacity: 1,
            },
            ".slick-list": {
              borderRadius: 0,
              overflow: "hidden",
            },
            ".slick-slide > div": {
              padding: 0,
            },
          }}>
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <Box
                key={slide.id}
                sx={{
                  px: 0,
                }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 0,
                    minHeight: { xs: 360, md: 520 },
                    display: "flex",
                    alignItems: "stretch",
                    background: "#FFFFFF",
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 16s ease infinite",
                    "@keyframes gradientShift": {
                      "0%": { backgroundPosition: "0% 50%" },
                      "50%": { backgroundPosition: "100% 50%" },
                      "100%": { backgroundPosition: "0% 50%" },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                    background: "rgba(15, 23, 42, 0.04)",
                    opacity: 1,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'%3E%3Cpath d='M0 80h160M80 0v160'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3C/g%3E%3C/svg%3E")`,
                      mixBlendMode: "overlay",
                      opacity: 0.35,
                    },
                  }}>
        <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems="stretch"
                    sx={{ position: "relative", width: "100%" }}>
                    <Box
                      sx={{
                        flex: { xs: "0 0 auto", md: "0 0 55%" },
                        p: { xs: 4, md: 6 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 2.5,
                        color: "#111827",
                      }}>
            <Typography
                        variant="overline"
              sx={{
                          letterSpacing: 4,
                fontWeight: 700,
                        opacity: 0.8,
                        color: "#0f172a",
                          textTransform: "uppercase",
              }}>
                        {slide.label}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                          fontWeight: 800,
                          fontSize: { xs: "2.2rem", md: "3.2rem" },
                lineHeight: 1.1,
                color: "#111827",
              }}>
                        {slide.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          maxWidth: 540,
                        color: "#374151",
                          fontWeight: 400,
                          lineHeight: 1.5,
                        }}>
                        {slide.subtitle}
            </Typography>
                      <Button
                        href={slide.cta.href}
                        variant="contained"
                        size="large"
                        endIcon={<Iconify icon="solar:arrow-right-up-bold-duotone" />}
                        sx={{
                          alignSelf: { xs: "flex-start", md: "flex-start" },
                          mt: 1,
                          px: 4,
                          py: 1.5,
                          borderRadius: "999px",
                          fontWeight: 700,
                        backgroundColor: "#111827",
                        color: "#FFFFFF",
                          "&:hover": {
                            backgroundColor: "#000000",
                            transform: "translateY(-2px)",
                            boxShadow: "0 16px 30px rgba(17, 24, 39, 0.25)",
                          },
                          transition: "all 0.3s ease",
                        }}>
                        {slide.cta.text}
                      </Button>
          </Box>

            <Box
              sx={{
                        flex: { xs: "0 0 auto", md: "0 0 45%" },
                        position: "relative",
                display: "flex",
                alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 1.5, md: 4 },
              }}>
              <Box
                component="img"
                        src={slide.image}
                        alt={slide.title}
                sx={{
                          width: "100%",
                          maxWidth: { xs: 360, md: 460 },
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: 2,
                }}
              />
            </Box>
        </Stack>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopHero;
