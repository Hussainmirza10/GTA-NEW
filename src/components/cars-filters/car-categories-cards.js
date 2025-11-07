"use client";
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { ArrowForward, DirectionsCar, Key, Speed } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

const CarCategoriesCards = () => {
  const router = useRouter();

  const categories = [
    {
      title: "Used Cars",
      description: "Quality pre-owned vehicles inspected and verified for your peace of mind",
      icon: <DirectionsCar sx={{ fontSize: 60 }} />,
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      bgColor: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
      iconColor: "#F59E0B",
      image: "/assets/ToyotaCorolla.webp",
      link: `${paths.cars.root}?category=used`,
      stats: "500+ Vehicles",
    },
    {
      title: "Rental Cars",
      description: "Premium vehicles available for rent - daily, weekly, or monthly packages",
      icon: <Key sx={{ fontSize: 60 }} />,
      gradient: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
      bgColor: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)",
      iconColor: "#9333EA",
      image: "/assets/KiaCerato.webp",
      link: paths.rent,
      stats: "50+ Vehicles",
    },
    {
      title: "New Cars",
      description: "Brand new vehicles with latest features, technology and full warranty",
      icon: <Speed sx={{ fontSize: 60 }} />,
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      bgColor: "linear-gradient(135deg, #F0FDF4 0%, #D1FAE5 100%)",
      iconColor: "#10B981",
      image: "/assets/raize.webp",
      link: `${paths.cars.root}?category=new`,
      stats: "200+ Vehicles",
    },
  ];

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #F0FDF4 0%, #FAF5FF 50%, #FFF1F2 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/assets/serviceBg.webp)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.05,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "#000000",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
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
            }}
          >
            Explore Our Collection
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Choose from our wide range of vehicles to match your needs and budget
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                onClick={() => handleCardClick(category.link)}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: category.bgColor,
                  border: "2px solid transparent",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  animation: `fadeInSlide 0.8s ease-out ${index * 0.15}s backwards`,
                  "@keyframes fadeInSlide": {
                    "0%": {
                      opacity: 0,
                      transform: "translateX(-30px) translateY(30px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateX(0) translateY(0)",
                    },
                  },
                  "&:hover": {
                    transform: "translateY(-20px) scale(1.03)",
                    boxShadow: "0 28px 70px rgba(0, 0, 0, 0.2)",
                    border: "2px solid transparent",
                    "& .category-icon": {
                      transform: "scale(1.2)",
                    },
                    "& .arrow-icon": {
                      transform: "translateX(8px)",
                    },
                    "& .car-image": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                {/* Background Car Image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    opacity: 0.3,
                  }}
                >
                  <img
                    className="car-image"
                    src={category.image}
                    alt={category.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    p: 5,
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 400,
                  }}
                >
                  {/* Icon */}
                  <Box
                    className="category-icon"
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      color: category.iconColor,
                      transition: "all 0.4s ease",
                      boxShadow: `0 8px 24px ${category.iconColor}40`,
                    }}
                  >
                    {category.icon}
                  </Box>

                  {/* Stats Badge */}
                  <Box
                    sx={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      px: 2.5,
                      py: 1,
                      borderRadius: "50px",
                      background: category.gradient,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {category.stats}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      color: "#000000",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    {category.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000000",
                      lineHeight: 1.8,
                      mb: 4,
                      fontSize: "1rem",
                      flex: 1,
                    }}
                  >
                    {category.description}
                  </Typography>

                  {/* Button */}
                  <Button
                    variant="contained"
                    endIcon={
                      <ArrowForward
                        className="arrow-icon"
                        sx={{
                          transition: "transform 0.3s ease",
                        }}
                      />
                    }
                    sx={{
                      background: category.gradient,
                      color: "#FFFFFF",
                      py: 1.5,
                      px: 4,
                      fontWeight: 700,
                      fontSize: "1rem",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      boxShadow: `0 4px 16px ${category.iconColor}40`,
                      "&:hover": {
                        background: category.gradient,
                        boxShadow: `0 8px 24px ${category.iconColor}60`,
                      },
                    }}
                  >
                    Explore Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CarCategoriesCards;

