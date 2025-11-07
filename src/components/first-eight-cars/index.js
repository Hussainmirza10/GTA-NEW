"use client";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Card,
  CardContent,
  Stack,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { useGetAllCars } from "src/hooks/use-cars";
import { useRouter } from "next/navigation";
import { WhatsApp } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "src/components/iconify";
import { paths } from "src/routes/paths";
import GarageItem from "src/sections/garage/garage-item";

export default function LastestEightCars() {
  const { data: allCarsData, isLoading, error } = useGetAllCars();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  // Filter cars based on selected tab
  const getFilteredCars = () => {
    const baseCars =
      allCarsData?.data?.filter((c) => c?.status !== "Paused" && c?.carDetails?.isFeatured) || [];

    // First filter by sale category
    const saleCars = baseCars.filter(
      (car) => car.category?.toLowerCase() === "sale"
    );

    switch (activeTab) {
      case 0: // In Stock
        return saleCars.filter(
          (car) => car.status === "Active" || car.status === "In Stock"
        );
      case 1: // New Cars
        return saleCars.filter((car) => car.carDetails?.carType === "new");
      case 2: // Used Cars
        return saleCars.filter((car) => car.carDetails?.carType === "used");
      default:
        return saleCars;
    }
  };

  const filteredCars = getFilteredCars();

  // Calculate slidesToShow based on available cars
  const getSlidesToShow = (defaultValue) => {
    return Math.min(defaultValue, filteredCars.length);
  };

  // Check if we have only one car
  const isSingleCar = filteredCars.length === 1;

  const sliderSettings = {
    dots: false,
    infinite: filteredCars.length > 4,
    speed: 500,
    slidesToShow: getSlidesToShow(4),
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: getSlidesToShow(3),
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: getSlidesToShow(2),
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: getSlidesToShow(1),
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Reset slider when tab changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [activeTab, filteredCars.length]);

  if (isLoading) {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}>
          <Typography variant="h6" color="error">
            Error loading cars
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box  sx={{
      py: { xs: 6, md: 10 },
      background: "linear-gradient(180deg, #A855F7 0%, #C084FC 30%, #E9D5FF 70%, #F3E8FF 100%)",
      position: "relative",
    }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box 
          sx={{ 
            mb: 8, 
            textAlign: "center",
            animation: "fadeInUp 0.8s ease-out",
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
              fontWeight: 400,
              color: "#000000",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
              fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: `
                -2px -2px 0 #FFFFFF,
                2px -2px 0 #FFFFFF,
                -2px 2px 0 #FFFFFF,
                2px 2px 0 #FFFFFF,
                0 0 10px rgba(255, 255, 255, 0.8)
              `,
            }}>
            Explore All Vehicles
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}>
            Discover our extensive collection of premium vehicles
          </Typography>
        </Box>

        {/* Tabs Navigation with Arrow Controls */}
        <Box sx={{ mb: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}>
            <Box
              sx={{
                flex: 1,
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "#F3F4F6",
                p: 0.5,
              }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  minHeight: "auto",
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                  "& .MuiTab-root": {
                    color: "#6B7280",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    textTransform: "none",
                    minHeight: "48px",
                    borderRadius: 1.5,
                    transition: "all 0.3s ease",
                    "&.Mui-selected": {
                      color: "#FFFFFF",
                      bgcolor: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    },
                    "&:hover": {
                      bgcolor: "#E5E7EB",
                    },
                  },
                }}>
                <Tab label="All Vehicles" />
                <Tab label="New Cars" />
                <Tab label="Used Cars" />
              </Tabs>
            </Box>

            {!isSingleCar && filteredCars.length > 0 && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 1.5,
                }}>
                <IconButton
                  onClick={() => sliderRef.current?.slickPrev()}
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "white",
                    border: "2px solid #E5E7EB",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#10B981",
                      borderColor: "#10B981",
                      "& svg": {
                        color: "white",
                      },
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    },
                  }}>
                  <Iconify
                    icon="eva:arrow-back-fill"
                    sx={{ fontSize: 20, color: "#1F2937", transition: "color 0.3s ease" }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => sliderRef.current?.slickNext()}
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "white",
                    border: "2px solid #E5E7EB",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#10B981",
                      borderColor: "#10B981",
                      "& svg": {
                        color: "white",
                      },
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    },
                  }}>
                  <Iconify
                    icon="eva:arrow-forward-fill"
                    sx={{ fontSize: 20, color: "#1F2937", transition: "color 0.3s ease" }}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>

        {/* Cars Display */}
        {filteredCars.length > 0 ? (
          <Box sx={{ mb: 6, position: "relative", width: "100%", pb: 8 }}>
            {isSingleCar ? (
              // Single car display - center it without full width
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Box sx={{ maxWidth: "350px", width: "100%" }}>
                  <GarageItem product={filteredCars[0]} />
                </Box>
              </Box>
            ) : (
              <>
                {/* Mobile View - Vertical Stack */}
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}>
                  <Stack spacing={3} alignItems="center">
                    {filteredCars.slice(0, 10).map((car, idx) => (
                      <Box
                        key={car._id}
                        sx={{ 
                          width: "100%", 
                          maxWidth: "400px",
                          animation: `fadeInSlide 0.6s ease-out ${idx * 0.1}s backwards`,
                          "@keyframes fadeInSlide": {
                            "0%": {
                              opacity: 0,
                              transform: "translateX(-30px)",
                            },
                            "100%": {
                              opacity: 1,
                              transform: "translateX(0)",
                            },
                          },
                        }}>
                        <GarageItem product={car} />
                      </Box>
                    ))}
                  </Stack>
                </Box>

                {/* Desktop View - Slider */}
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}>
                  <Slider
                    key={`slider-${activeTab}-${filteredCars.length}`}
                    ref={sliderRef}
                    {...sliderSettings}
                    style={{ width: "100%", display: "flex !important" }}>
                    {filteredCars.slice(0, 10).map((car, idx) => (
                      <Box
                        key={car._id}
                        sx={{ 
                          px: 1, 
                          display: "flex !important",
                          animation: `fadeInScale 0.6s ease-out ${idx * 0.1}s backwards`,
                          "@keyframes fadeInScale": {
                            "0%": {
                              opacity: 0,
                              transform: "scale(0.9) translateY(30px)",
                            },
                            "100%": {
                              opacity: 1,
                              transform: "scale(1) translateY(0)",
                            },
                          },
                        }}>
                        <GarageItem product={car} />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
              bgcolor: "#F9FAFB",
              borderRadius: 3,
              p: 4,
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}>
              <Iconify
                icon="eva:car-outline"
                sx={{ fontSize: 40, color: "#9CA3AF" }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: "#6B7280",
                fontWeight: 600,
                mb: 1,
              }}>
              No Vehicles Found
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#9CA3AF",
                textAlign: "center",
              }}>
              Try selecting a different category
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
