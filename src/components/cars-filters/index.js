"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import Container from "@mui/material/Container";
import MuxPlayer from "@mux/mux-player-react";
import {
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Stack,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import Iconify from "../iconify";
import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";
import ServicesSection from "./services-section";
import FeaturedCarsSection from "./featured-cars";
import SellYourCarSection from "./sell-your-car";
import Hero from "./Hero";
import { useGetCarBodyList } from "src/hooks/use-cars";
import SearchByModels from "./search-by-models";
import LatestProductsSection from "./latest-products";
import { WhatsApp } from "@mui/icons-material";
import HeroBottom from "../heroBottom";
import CategoryOffers from "src/sections/categoryOffers";
import CTA from "../cta";
import Discounted from "../discounted";
import BrandCards from "./brand-cards";
import CarCategoriesCards from "./car-categories-cards";
import StatsSection from "./stats-section";
import WhyChooseUs from "./why-choose-us";
import CTABanner from "./cta-banner";
import LastestEightCars from "../first-eight-cars";
import NewsReviewsSection from "./news-reviews-section";
import GetAppSection from "./get-app-section";

export default function CarsFiltersPage() {
  const { data: carBodyList = [], isLoading: carBodyLoading } =
    useGetCarBodyList();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop playback IDs for 2 slides
  const desktopPlaybackIds = ["CR7wgz029UVdMH01e2ZbZG02hSozEYnSNOuF02vEvMtZZ01w"];

  // Mobile playback ID
  const mobilePlaybackId = "gzB22KDrzm1XR4sfmnGnmQ1vF0000yNzo00f02rcNO2VlXg";

  // Auto-advance slides for desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % desktopPlaybackIds.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const getCurrentPlaybackId = () => {
    if (isMobile) {
      return mobilePlaybackId;
    }
    return desktopPlaybackIds[currentSlide];
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* 1. Brands We Deal In */}
      <BrandCards />

      {/* 2. Explore All Vehicles */}
      <LastestEightCars />

      {/* 3. Explore Our Collection */}
      <CarCategoriesCards />

      {/* 3.5. Stats Section - Happy Customers, Total Cars, etc */}
      <StatsSection />

      {/* 4. Latest Products */}
      <LatestProductsSection isShop={false} />

      {/* 5. Shop */}
      <LatestProductsSection isShop={true} />

      {/* 6. Import Your Dream Car Banner */}
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            mt: "56px",
            display: { md: "block", xs: "none" },
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
            sx={{
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              borderRadius: 4,
              mb: 4,
              height: "100%",
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
                background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
              },
            }}>
            <CardContent
              sx={{
                p: { xs: 4, md: "32px" },
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}>
              <Stack direction="row" gap={2} alignItems="center">
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
                  <img 
                    width={560}  
                    style={{ 
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                    }} 
                    src="/assets/bugati.png" 
                    alt="Import Car" 
                  />
                </Box>

                <Box
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
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      lineHeight: 1.2,
                      fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
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
                    variant="h5"
                    sx={{
                      color: "#F0FDF4",
                      fontSize: "16px !important",
                      mb: 4,
                      fontWeight: 400,
                      maxWidth: 800,
                      mx: "auto",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}>
                    From luxury brands to your everyday ride, we make importing
                    your dream car a reality. Expert guidance, competitive
                    pricing, and seamless process.
                  </Typography>
                </Box>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    animation: "fadeInUp 0.8s ease-out 0.5s backwards",
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
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp sx={{ fontSize: 28 }} />}
                    onClick={() => {
                      const message =
                        "Hi! I'm interested in importing a car. Can you help me?";
                      const whatsappUrl = `https://wa.me/923263333456?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, "_blank");
                    }}
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
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* 7. Import Your Desire Accessories Banner */}
        <Box
          sx={{
            width: "100%",
            mt: "32px",
            display: { md: "block", xs: "none" },
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
            sx={{
              background: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
              borderRadius: 4,
              mb: 4,
              height: "100%",
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
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
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
                direction="row"
                gap={2}
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
                  <img 
                    width={560} 
                    style={{ 
                      transition: "transform 0.4s ease",
                    }} 
                    src="/assets/car-accessories-png-car-parts-clipart.png" 
                    alt="Car Accessories" 
                  />
                </Box>

                <Box
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
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      lineHeight: 1.2,
                      fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
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
                    variant="h5"
                    sx={{
                      color: "#FAF5FF",
                      fontSize: "16px !important",
                      mb: 4,
                      fontWeight: 400,
                      maxWidth: 800,
                      mx: "auto",
                      lineHeight: 1.6,
                      textAlign: "center",
                      maxWidth: 400,
                    }}>
                    From genuine OEM parts to aftermarket upgrades, we source
                    and import quality car parts for all brands.
                  </Typography>
                </Box>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    animation: "fadeInUp 0.8s ease-out 0.5s backwards",
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
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp sx={{ fontSize: 28 }} />}
                    onClick={() => {
                      const message =
                        "Hi! I'm interested in importing car parts. Can you help me find the parts I need?";
                      const whatsappUrl = `https://wa.me/923263331000?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    sx={{
                      background: "#FFFFFF",
                      border: "2px solid #FFFFFF",
                      color: "#9333EA",
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
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* 8. Why Choose Garage Tuned Autos */}
      <WhyChooseUs />

      {/* 9. News, Reviews & Discussions */}
      <NewsReviewsSection />

      {/* 10. Get The GTA App */}
      <GetAppSection />
    </>
  );
}

// function SearchByCarBody({ reset = false, carBodyList = [] }) {
//   const [selectedCarBody, setSelectedBody] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     if (selectedCarBody) {
//       router.push(`${paths.cars.root}?makeType=${selectedCarBody}&tab=two`);
//     }
//   }, [selectedCarBody]);

//   return (
//     <>
//       <Autocomplete
//         fullWidth
//         options={carBodyList}
//         value={selectedCarBody}
//         onChange={(event, newValue) => {
//           setSelectedBody(newValue);
//         }}
//         getOptionLabel={(option) => option}
//         renderInput={(params) => (
//           <TextField {...params} label="Car Body" margin="none" />
//         )}
//         renderOption={(props, option) => (
//           <li {...props} key={option}>
//             {option}
//           </li>
//         )}
//       />
//     </>
//   );
// }
