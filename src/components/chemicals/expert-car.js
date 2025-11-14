"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ProductItem from "src/sections/product/product-item";
import { ProductItemSkeleton } from "src/sections/product/product-skeleton";
import ProductService from "src/services/products/products.service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "src/components/iconify";

const ExpertCar = () => {
  const [chemicalProducts, setChemicalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchChemicalProducts = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAll();
        let products = [];
        if (response && response.products) {
          products = response.products;
        } else if (response && response.data) {
          products = response.data;
        }
        // Filter products that have a category with name "Chemicals"
        const filtered = products.filter(
          (product) =>
            Array.isArray(product.categories) &&
            product.categories.some(
              (cat) =>
                cat &&
                (cat.name?.toLowerCase() === "chemicals" ||
                  cat.slug?.toLowerCase() === "chemicals")
            )
        );
        setChemicalProducts(filtered);
      } catch (error) {
        setChemicalProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChemicalProducts();
  }, []);

  // Calculate slidesToShow based on available products
  const getSlidesToShow = (defaultValue) => {
    return Math.min(defaultValue, chemicalProducts.length);
  };

  // Check if we have only one product
  const isSingleProduct = chemicalProducts.length === 1;

  const sliderSettings = {
    dots: false,
    infinite: chemicalProducts.length > 4,
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

  return (
    <Box 
      id="products"
      sx={{ 
        py: { xs: 8, md: 12 },
        px: 2,
        background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
        position: "relative",
      }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      
      <Box sx={{ maxWidth: "1400px", mx: "auto", position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-block",
              mb: 2,
              px: 2,
              py: 0.75,
              borderRadius: 2,
              bgcolor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}>
            <Typography
              sx={{
                color: "#10B981",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1.2,
              }}>
              Our Products
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              color: "#000000",
              fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.2,
              textShadow: `
                -2px -2px 0 #FFFFFF,
                2px -2px 0 #FFFFFF,
                -2px 2px 0 #FFFFFF,
                2px 2px 0 #FFFFFF,
                0 0 10px rgba(255, 255, 255, 0.8)
              `,
            }}>
            Premium Automotive Chemicals
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6B7280",
              maxWidth: 800,
              mx: "auto",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}>
            From luxury brands to your everyday ride — professional-grade products for exceptional results
          </Typography>
        </Box>

      <Box sx={{ width: "100%", mx: "auto" }}>
        <Grid item xs={12}>
          {loading ? (
            <Box sx={{ position: "relative", width: "100%", pb: 8 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  overflowX: "auto",
                  overflowY: "hidden",
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                  pb: 2,
                }}>
                {[...Array(4)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      flexShrink: 0,
                      width: { xs: "280px", sm: "320px" },
                      scrollSnapAlign: "start",
                    }}>
                    <ProductItemSkeleton />
                  </Box>
                ))}
              </Box>
            </Box>
          ) : chemicalProducts.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
                bgcolor: "#FFFFFF",
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
                  icon="mdi:flask-empty"
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
                No Products Available
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#9CA3AF",
                  textAlign: "center",
                }}>
                Check back soon for new products
              </Typography>
            </Box>
          ) : (
            <Box sx={{ position: "relative", width: "100%", pb: 8 }}>
               
              {isSingleProduct ? (
                // Single product display - center it
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Box sx={{ maxWidth: "350px", width: "100%" }}>
                    <ProductItem product={chemicalProducts[0]} />
                  </Box>
                </Box>
              ) : (
                // Multiple products - use slider
                <Slider
                  key={`slider-${chemicalProducts.length}`}
                  ref={sliderRef}
                  {...sliderSettings}
                  style={{ width: "100%", display: "flex !important" }}>
                  {chemicalProducts.map((product) => (
                    <Box
                      key={product._id}
                      sx={{ px: 1, display: "flex !important" }}>
                      <ProductItem product={product} />
                    </Box>
                  ))}
                </Slider>
              )}

              {/* Custom Navigation Buttons */}
              {!isSingleProduct && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -80,
                    right: 0,
                    display: "flex",
                    gap: 1.5,
                    zIndex: 10,
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
          )}
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default ExpertCar;
