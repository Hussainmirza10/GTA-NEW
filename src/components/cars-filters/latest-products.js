import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  CardContent,
  Card,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import ProductItem from "src/sections/product/product-item";
import { ProductItemSkeleton } from "src/sections/product/product-skeleton";
import ProductService from "src/services/products/products.service";
import { WhatsApp } from "@mui/icons-material";
import ProductList from "src/sections/product/product-list";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "src/components/iconify";

// Custom ProductList for Latest Products with slider view
const LatestProductsList = ({ products, loading, title, isShop = false }) => {
  const sliderRef = useRef(null);

  // Calculate slidesToShow based on available products
  const getSlidesToShow = (defaultValue) => {
    return Math.min(defaultValue, products.length);
  };

  // Check if we have only one product
  const isSingleProduct = products.length === 1;

  const sliderSettings = {
    dots: false,
    infinite: products.length > 4,
    speed: 500,
    slidesToShow: getSlidesToShow(4),
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Disable default arrows
    variableWidth: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: getSlidesToShow(3),
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: getSlidesToShow(2),
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: getSlidesToShow(1),
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return (
      <>
        {/* Section Title */}
        <Box 
          sx={{ 
            mb: 8,
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
              mb: 1,
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
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}>
            {isShop ? "Browse our premium selection" : "Discover the newest arrivals"}
          </Typography>
        </Box>

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
      </>
    );
  }

  if (products.length === 0) {
    return (
      <>
        {/* Section Title */}
        <Box 
          sx={{ 
            mb: 8,
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
              mb: 1,
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
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}>
            {isShop ? "Browse our premium selection" : "Discover the newest arrivals"}
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}>
          <Typography variant="h6" color="grey.400">
            No products found
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      {/* Section Title with Navigation */}
      <Box 
        sx={{ 
          mb: 8, 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
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
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "#000000",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 1,
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
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}>
            {isShop ? "Browse our premium selection" : "Discover the newest arrivals"}
          </Typography>
        </Box>
        
        {!isSingleProduct && products.length > 4 && !loading && (
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}>
            <IconButton
              onClick={() => {
                console.log("Previous clicked, sliderRef:", sliderRef.current);
                sliderRef.current?.slickPrev();
              }}
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
              onClick={() => {
                console.log("Next clicked, sliderRef:", sliderRef.current);
                sliderRef.current?.slickNext();
              }}
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
            <ProductItem product={products[0]} />
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
              { products.slice(0, 8).map((product) => (
                <Box
                  key={product._id}
                  sx={{ 
                    width: "100%", 
                    maxWidth: "400px",
                    minWidth: "280px",
                    display: "flex",
                    justifyContent: "center"
                  }}>
                  <ProductItem product={product} />
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
              key={`slider-${products.length}`}
              ref={sliderRef}
              {...sliderSettings}
              style={{ width: "100%", display: "flex !important" }}>
              {products.map((product, idx) => (
                <Box
                  key={product._id}
                  sx={{ 
                    px: 1, 
                    display: "flex !important",
                    height: "100%",
                    minHeight: "400px",
                    animation: `fadeInScale 0.6s ease-out ${idx * 0.1}s backwards`,
                    "@keyframes fadeInScale": {
                      "0%": {
                        opacity: 0,
                        transform: "scale(0.9) translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "scale(1) translateY(0)",
                      },
                    },
                  }}>
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <ProductItem product={product} />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </>
      )}
      </Box>
    </>
  );
};

export default function LatestProductsSection({
  titleText = " Latest Products",
  isShop = false,
}) {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstTenProducts, setFirstTenProducts] = useState([]);
  const [loadingFirstTen, setLoadingFirstTen] = useState(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
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
        let filtered = products.filter(
          (product) =>
            Array.isArray(product.categories) &&
            product.categories.some(
              (cat) =>
                cat &&
                (cat.name?.toLowerCase() === "chemicals" ||
                  cat.slug?.toLowerCase() === "chemicals")
            )
        );

        // Sort by createdAt descending if available, else just take first 4
        if (filtered && filtered.length > 0) {
          // If products have a createdAt field, sort by it
          if (filtered[0]?.createdAt) {
            filtered = filtered
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              );
          }
          setLatestProducts(filtered);
        } else {
          setLatestProducts([]);
        }
      } catch (error) {
        setLatestProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  useEffect(() => {
    const fetchFirstTenProducts = async () => {
      setLoadingFirstTen(true);
      try {
        // Fetch more products to ensure we get enough non-chemical products
        const response = await ProductService.getAll({ limit: 100 });
        let products = [];
        if (response && response.products) {
          products = response.products;
        } else if (response && response.data) {
          products = response.data;
        }
        
        // Filter out products that have a category with name "Chemicals"
        const nonChemicalProducts = products.filter(
          (product) => {
            const hasCategories = Array.isArray(product.categories);
            if (!hasCategories) {
              return true; // Include products without categories
            }
            
            const hasChemicalCategory = product.categories.some(
              (cat) => {
                return cat &&
                  (cat.name?.toLowerCase() === "chemicals" ||
                    cat.slug?.toLowerCase() === "chemicals");
              }
            );
            
            return !hasChemicalCategory;
          }
        );
        
        // Take up to 40 non-chemical products
        if (nonChemicalProducts && nonChemicalProducts.length > 0) {
          setFirstTenProducts(nonChemicalProducts.slice(0, 40));
        } else {
          setFirstTenProducts([]);
        }
      } catch (error) {
        setFirstTenProducts([]);
      } finally {
        setLoadingFirstTen(false);
      }
    };

    fetchFirstTenProducts();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        // backgroundColor: "black",
        minHeight: "600px",
      }}>
       {!isShop && (
         <Box sx={{ position: "relative", zIndex: 2 }}>
          <Grid item xs={12}>
            <LatestProductsList 
              products={latestProducts} 
              loading={loading} 
              title="Latest Products"
              isShop={false}
            />
          </Grid>
        </Box>
      )}

      {/* Shop Section */}
      {isShop && (
        <Box sx={{ position: "relative", zIndex: 2, mt: 8 }}>
          <Grid item xs={12}>
            <LatestProductsList
              products={firstTenProducts}
              loading={loadingFirstTen}
              title="Shop"
              isShop={true}
            />
          </Grid>
        </Box>
      )}
    </Container>
  );
}
