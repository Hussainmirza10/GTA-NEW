"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import Iconify from "src/components/iconify";

const NewsReviewsSection = () => {
  const articles = [
    {
      category: "News",
      title: "Latest Automotive Trends in Pakistan 2025",
      description: "Discover the newest trends shaping the automotive industry in Pakistan this year.",
      image: "/assets/cars-squad-1.jpg",
      date: "Nov 6, 2025",
      readTime: "5 min read",
      color: "#10B981",
    },
    {
      category: "Reviews",
      title: "Top 5 Cars for City Driving in Lahore",
      description: "Our expert review of the best vehicles suited for urban navigation and fuel efficiency.",
      image: "/assets/cars-squad-2.jpg",
      date: "Nov 5, 2025",
      readTime: "8 min read",
      color: "#9333EA",
    },
    {
      category: "Discussions",
      title: "Community Tips: Maintaining Your Car in Summer",
      description: "Join the discussion on how to keep your vehicle in top shape during hot weather.",
      image: "/assets/cars-squad-3.jpg",
      date: "Nov 4, 2025",
      readTime: "6 min read",
      color: "#EC4899",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          textAlign="center"
          mb={8}
          sx={{
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
          }}
        >
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
            News, Reviews & Discussions
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
            Stay updated with the latest automotive insights and community discussions
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "2px solid transparent",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  animation: `fadeInSlide 0.8s ease-out ${index * 0.15}s backwards`,
                  "@keyframes fadeInSlide": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(40px) scale(0.95)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0) scale(1)",
                    },
                  },
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.02)",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
                    border: "2px solid transparent",
                    "& .article-image": {
                      transform: "scale(1.1)",
                    },
                    "& .read-more": {
                      transform: "translateX(8px)",
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: 240,
                    overflow: "hidden",
                    position: "relative",
                    bgcolor: "#F3F4F6",
                  }}
                >
                  <Box
                    className="article-image"
                    component="img"
                    src={article.image}
                    alt={article.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  {/* Category Badge */}
                  <Chip
                    label={article.category}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: article.color,
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      px: 1,
                    }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3 }}>
                  {/* Date & Read Time */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Iconify
                        icon="mdi:calendar"
                        sx={{ fontSize: 16, color: "#9CA3AF" }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: "#9CA3AF", fontSize: "0.85rem" }}
                      >
                        {article.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Iconify
                        icon="mdi:clock-outline"
                        sx={{ fontSize: 16, color: "#9CA3AF" }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: "#9CA3AF", fontSize: "0.85rem" }}
                      >
                        {article.readTime}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1F2937",
                      mb: 2,
                      lineHeight: 1.4,
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                    }}
                  >
                    {article.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6B7280",
                      lineHeight: 1.7,
                      mb: 3,
                      fontSize: "1rem",
                    }}
                  >
                    {article.description}
                  </Typography>

                  {/* Read More Link */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: article.color,
                      fontWeight: 700,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.95rem" }}>Read More</Typography>
                    <Iconify
                      className="read-more"
                      icon="eva:arrow-forward-fill"
                      sx={{ fontSize: 18, transition: "transform 0.3s ease" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
            animation: "fadeInUp 0.8s ease-out 0.6s backwards",
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
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<Iconify icon="eva:arrow-forward-fill" />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 700,
              borderColor: "#9333EA",
              color: "#9333EA",
              borderWidth: 2,
              borderRadius: 2,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                borderWidth: 2,
                bgcolor: "#9333EA",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(147, 51, 234, 0.3)",
              },
            }}
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsReviewsSection;

