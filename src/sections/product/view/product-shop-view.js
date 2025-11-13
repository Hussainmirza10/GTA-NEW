"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";

import ProductService from "src/services/products/products.service";

import EmptyContent from "src/components/empty-content";
import { useSettingsContext } from "src/components/settings";

import { useCheckoutContext } from "../../checkout/context";
import { Box, Grid, Button, useMediaQuery, useTheme, IconButton, TextField } from "@mui/material";
import { useResponsive } from "src/hooks/use-responsive";
import { SplashScreen } from "src/components/loading-screen";
import Iconify from "src/components/iconify";
import ShopProductList from "../Shop-product-list";
import ShopHero from "../shop-hero";
import LatestProductsSection from "src/components/cars-filters/latest-products";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ProductShopView() {
  const searchParams = useSearchParams();
  
  const defaultFilters = {
    priceRange: [0, 50000],
    category: "chemicals",
    searchByTitle: "",
    year: [1940, new Date().getFullYear()],
    fuelType: "",
    mileage: [0, 200000000],
    makeType: "",
    availableItems: [],
    priceRangeOption: "",
    popularTags: [],
    activeFilter: "chemicals",
  };

  useEffect(() => {
    <SplashScreen />;
  }, []);

  const settings = useSettingsContext();

  const checkout = useCheckoutContext();

  // Safety check for settings context
  if (!settings) {
    return (
      <Container maxWidth="lg">
        <div>Loading settings...</div>
      </Container>
    );
  }

  const [filters, setFilters] = useState(defaultFilters);
  const [reset, setReset] = useState(false);
  const quickFilters = useMemo(
    () => [
      { label: "Chemicals", value: "chemicals" },
      { label: "Accessories", value: "accessories" },
      { label: "LEDs", value: "leds" },
      { label: "Wheels", value: "wheels" },
      { label: "Comic", value: "comic" },
    ],
    []
  );
  const [selectedQuickFilter, setSelectedQuickFilter] = useState(quickFilters[0].value);

  // Read search parameters from URL and apply them to filters
  useEffect(() => {
    const searchText = searchParams.get("searchText");
    
    if (searchText) {
      setFilters((prev) => ({
        ...prev,
        searchByTitle: searchText,
        activeFilter: searchText,
      }));
    }
  }, [searchParams]);

  // Pagination settings
  const ITEMS_PER_PAGE = 12;
  
  // State for products and loading
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const loaderRef = useRef(null);

  // Fetch all products initially
  const fetchAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      // Fetch a large batch of products or implement progressive loading
      const response = await ProductService.getAll({
        page: 1,
        limit: 100, // Fetch more products initially
        ...filters,
      });

      if (response && response.products) {
        setAllProducts(response.products);
        setHasMoreProducts(response.pagination?.pages > 1);
      } else if (response && response.data) {
        setAllProducts(response.data);
        setHasMoreProducts(false);
      } else {
        setAllProducts([]);
        setHasMoreProducts(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllProducts([]);
      setHasMoreProducts(false);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Initial fetch
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // Update displayed products when data or page changes
  useEffect(() => {
    if (allProducts.length > 0) {
      const endIndex = page * ITEMS_PER_PAGE;
      setDisplayedProducts(allProducts.slice(0, endIndex));
    }
  }, [allProducts, page]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && displayedProducts.length < allProducts.length) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, displayedProducts.length, allProducts.length]);

  const hasMore = displayedProducts.length < allProducts.length;

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
    setReset((prev) => !prev);
  }, []);

  // Use displayed products
  const dataFiltered = useMemo(() => {
    if (selectedQuickFilter === "accessories") {
      return displayedProducts.filter((product) => {
        const categories = product?.categories || [];
        const hasChemical = categories.some((cat) =>
          ["chemicals", "chemical"].includes(cat?.slug?.toLowerCase() || cat?.name?.toLowerCase())
        );
        return !hasChemical;
      });
    }
    return displayedProducts;
  }, [displayedProducts, selectedQuickFilter]);

  const canReset = () => {
    setFilters({ ...defaultFilters });
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const lgUp = useResponsive("up", "lg");

  const handleQuickFilter = useCallback(
    (value) => {
      setSelectedQuickFilter(value);
      setFilters((prevState) => ({
        ...prevState,
        category: value === "accessories" ? "" : value,
        searchByTitle: "",
        activeFilter: value === "accessories" ? "" : value,
      }));
      setDisplayedProducts([]);
      setPage(1);
      setHasMoreProducts(true);
    },
    []
  );

  return (
    <Box sx={{ display: "" }}>
      <ShopHero />
      {/* <HeroBottom /> */}
 <Box sx={{
        
      }}>
      <LatestProductsSection isShop={true} titleText="Latest Products" />
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 3 },
          mt: { xs: 4, md: 6 },
        }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center">
          <IconButton
            onClick={() => {
              const currentIndex = quickFilters.findIndex(
                (filter) => filter.value === selectedQuickFilter
              );
              const nextIndex =
                (currentIndex - 1 + quickFilters.length) % quickFilters.length;
              handleQuickFilter(quickFilters[nextIndex].value);
            }}
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid rgba(16, 185, 129, 0.4)",
              color: "#059669",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateX(-4px)",
                borderColor: "rgba(16, 185, 129, 0.8)",
                boxShadow: "0 12px 24px rgba(16,185,129,0.25)",
              },
            }}>
            <Iconify icon="eva:arrow-ios-back-fill" width={28} />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
              fontSize: { xs: "2.2rem", sm: "2.6rem" },
              textTransform: "uppercase",
              letterSpacing: { xs: 4, sm: 6 },
              color: "#111827",
              textShadow: "none",
            }}>
            {quickFilters.find((filter) => filter.value === selectedQuickFilter)?.label ||
              "Chemicals"}
          </Typography>
          <IconButton
            onClick={() => {
              const currentIndex = quickFilters.findIndex(
                (filter) => filter.value === selectedQuickFilter
              );
              const nextIndex = (currentIndex + 1) % quickFilters.length;
              handleQuickFilter(quickFilters[nextIndex].value);
            }}
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid rgba(16, 185, 129, 0.4)",
              color: "#059669",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateX(4px)",
                borderColor: "rgba(16, 185, 129, 0.8)",
                boxShadow: "0 12px 24px rgba(16,185,129,0.25)",
              },
            }}>
            <Iconify icon="eva:arrow-ios-forward-fill" width={28} />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mt: 3, px: { xs: 2, md: 0 } }}>
          {quickFilters.map((filter) => {
            const isActive = selectedQuickFilter === filter.value;
            return (
              <Button
                key={filter.value}
                onClick={() => handleQuickFilter(filter.value)}
                variant={isActive ? "contained" : "outlined"}
                sx={{
                  fontFamily: "'Pricedown', 'Bebas Neue', 'Impact', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  px: { xs: 2.5, md: 3.5 },
                  py: 1,
                  borderRadius: "999px",
                  borderWidth: 2,
                  borderColor: isActive ? "transparent" : "rgba(17, 24, 39, 0.35)",
                  color: isActive ? "#ffffff" : "#0f172a",
                  background:
                    isActive
                      ? {
                          chemicals:
                            "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                          accessories:
                            "linear-gradient(135deg, #0f172a 0%, #1f2937 100%)",
                          leds:
                            "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                          wheels:
                            "linear-gradient(135deg, #b45309 0%, #f97316 100%)",
                          comic:
                            "linear-gradient(135deg, #be185d 0%, #ec4899 100%)",
                        }[filter.value] || "linear-gradient(135deg, #111827 0%, #111827 100%)"
                      : "rgba(255, 255, 255, 0.85)",
                  boxShadow: isActive
                    ? "0 12px 30px rgba(17, 24, 39, 0.18)"
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffffff",
                    borderColor: "transparent",
                    background:
                      {
                        chemicals:
                          "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
                        accessories:
                          "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
                        leds:
                          "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        wheels:
                          "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
                        comic:
                          "linear-gradient(135deg, #db2777 0%, #f472b6 100%)",
                      }[filter.value] || "linear-gradient(135deg, #111827 0%, #111827 100%)",
                    boxShadow: "0 16px 40px rgba(17, 24, 39, 0.22)",
                    transform: "translateY(-2px)",
                  },
                }}>
                {filter.label}
              </Button>
            );
          })}
        </Stack>
      </Box>
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "100%",
          ml: isSmallScreen ? 0 : "auto",
        }}>
        <Container
          maxWidth="xl"
          sx={{
            mb: 15,
            pt: { xs: 0, md: 0 },
            px: { xs: 0, md: 0 },
            position: "relative",
          }}>
          <Grid container>
            {/* Cart icon (optional) */}
            {/* <Grid item xs={12}>
            <CartIcon totalItems={checkout.totalItems} />
          </Grid> */}

            {/* Title */}
            <Grid item xs={12}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "32px",
                }}>
                {/* <Typography
                  variant="h4"
                  sx={{
                    my: { xs: 3, md: 5 },
                    color: "#fff",
                    fontSize: "32px !important",
                  }}>
                  Shop
                </Typography> */}

                <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }} />
              </Stack>
            </Grid>
            <Stack
              spacing={2.5}
              sx={{
                mb: { xs: 3, md: 5 },
                width: "100%",
              }}>

              {/* {canReset && renderResults} */}
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", md: "center" }}
              justifyContent="space-between"
              sx={{
                width: "100%",
                mb: { xs: 3, md: 4 },
                px: { xs: 2, md: 3 },
              }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search products..."
                value={filters.searchByTitle}
                onChange={(event) => handleFilters("searchByTitle", event.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: 3,
                    bgcolor: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 600,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0f172a",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0f172a",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0f172a",
                    },
                  },
                }}
                sx={{
                  maxWidth: { xs: "100%", md: 380 },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(15, 23, 42, 0.6)",
                  },
                }}
              />
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  color: "#111827",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}>
                <Typography variant="body2" sx={{ color: "#111827", fontWeight: 700 }}>
                  Products Found: {allProducts.length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#111827", fontWeight: 700 }}>
                  Sort by: Featured
                </Typography>
              </Stack>
            </Stack>

            {/* <CategoryOffers /> */}
            <Box width="100%">
              {/* <ProductList
                products={dataFiltered}
                loading={loading}
                itemsPerPage={4}
              /> */}
              {/* <LatestProductsSection /> */}
              <Box
                sx={{
                  mt: { xs: 0, md: 0 },
                  borderRadius: 0,
                  px: {
                    xs: 0,
                    md: 0,
                  },
                  py: {
                    xs: selectedQuickFilter === "chemicals" ? 4 : 0,
                    md: selectedQuickFilter === "chemicals" ? 6 : 0,
                  },
                  background: (() => {
                    switch (selectedQuickFilter) {
                      case "chemicals":
                        return "linear-gradient(180deg, rgba(71, 124, 0, 0.96) 0%, rgba(71, 124, 0, 0.72) 25%, rgba(71, 124, 0, 0.32) 65%, rgba(236, 253, 245, 0.08) 100%)";
                      case "accessories":
                        return "linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.68) 35%, rgba(55, 65, 81, 0.32) 70%, rgba(229, 231, 235, 0.08) 100%)";
                      case "leds":
                        return "linear-gradient(180deg, rgba(29, 78, 216, 0.95) 0%, rgba(37, 99, 235, 0.68) 35%, rgba(59, 130, 246, 0.3) 70%, rgba(224, 231, 255, 0.08) 100%)";
                      case "wheels":
                        return "linear-gradient(180deg, rgba(217, 119, 6, 0.92) 0%, rgba(251, 146, 60, 0.68) 35%, rgba(253, 186, 116, 0.32) 70%, rgba(255, 247, 237, 0.08) 100%)";
                      case "comic":
                        return "linear-gradient(180deg, rgba(214, 31, 105, 0.95) 0%, rgba(236, 72, 153, 0.7) 35%, rgba(244, 114, 182, 0.32) 70%, rgba(255, 228, 242, 0.1) 100%)";
                      default:
                        return "transparent";
                    }
                  })(),
                  boxShadow:
                    selectedQuickFilter === "chemicals"
                      ? "0 24px 50px rgba(16, 185, 129, 0.22)"
                      : selectedQuickFilter === "accessories"
                      ? "0 24px 50px rgba(17, 24, 39, 0.22)"
                      : selectedQuickFilter === "leds"
                      ? "0 24px 50px rgba(29, 78, 216, 0.22)"
                      : selectedQuickFilter === "wheels"
                      ? "0 24px 50px rgba(217, 119, 6, 0.22)"
                    : selectedQuickFilter === "comic"
                      ? "0 24px 50px rgba(219, 39, 119, 0.24)"
                      : "none",
                  transition: "all 0.4s ease",
                }}>
                {/* Render NotFound component if no results */}
                <Grid container>
                  <Grid item xs={12}>
                    {!dataFiltered?.length && !loading ? (
                      <EmptyContent
                        filled
                        title="No Data"
                        sx={{ py: 10, color: "#fff" }}
                      />
                    ) : (
                      <ShopProductList
                        products={dataFiltered}
                        loading={loading}
                        loaderRef={loaderRef}
                        hasMore={hasMore}
                        onAddOrRemoveFav={() => {
                          fetchAllProducts();
                        }}
                        sx={{ my: 5, px: { xs: 2, md: 3 } }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Container>
        {/* <CTA /> */}
      </Box>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          mt: { xs: 8, md: 12 },
          mx: { xs: 2, md: 6 },
          borderRadius: { xs: 4, md: 6 },
          backgroundColor: "#000000",
          minHeight: { xs: 320, md: 280 },
        }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(5, minmax(0, 1fr))",
            },
            gridAutoRows: "1fr",
            backgroundColor: "#FFFFFF",
          }}>
          {[
              { src: "/assets/shopHeroCard.png", alt: "Premium Products" },
              { src: "/assets/chemical-bg.png", alt: "Chemical Solutions" },
              { src: "/assets/chomic_bg.jpeg", alt: "Comic Collaborations" },
              { src: "/assets/bmwled.webp", alt: "LED Upgrades" },
              { src: "/assets/bmwwheel.jpg", alt: "Forged Wheels" },
            ].map((segment) => (
            <Box
              key={segment.alt}
              sx={{
                position: "relative",
                backgroundImage: `url(${segment.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          ))}
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 6 },
            textAlign: "center",
          }}>
          <Stack spacing={3} alignItems="center" sx={{ maxWidth: 760 }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 6,
                fontWeight: 700,
                color: "rgba(248, 250, 252, 0.8)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#FFFFFF",
                },
              }}>
              Experience The Motion
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3rem" },
                lineHeight: 1.15,
                color: "#FFFFFF",
                transition: "text-shadow 0.3s ease",
                "&:hover": {
                  textShadow: "0 8px 24px rgba(148, 163, 184, 0.45)",
                },
              }}>
              Discover the Next Wave of GTA Accessories
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(226, 232, 240, 0.82)",
                fontSize: { xs: "1rem", md: "1.05rem" },
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#FFFFFF",
                },
              }}>
              From chemical care to neon LEDs, forged wheels, and comic collabs — scroll, explore, and tap into
              the collections tailored to your build. Everything updates in real time the moment you switch focus.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, filters, sortBy }) {
  const {
    gender,
    category,
    colors,
    priceRange,
    rating,
    searchByTitle,
    year,
    fuelType,
    mileage,
    makeType,
    availableItems,
    priceRangeOption,
    popularTags,
    activeFilter,
  } = filters;

  const min = priceRange[0];
  const max = priceRange[1];

  // FILTERS

  // Category filter
  if (category && category !== "" && category !== "all") {
    inputData = inputData.filter((product) =>
      product?.categories?.some(
        (cat) => cat?.name?.toUpperCase() === category?.toUpperCase()
      )
    );
  }

  // Price range filter
  inputData = inputData.filter((product) => {
    const productPrice = Number(product.price) || 0;
    const isInRange = productPrice >= min && productPrice <= max;
    return isInRange;
  });

  // Price range option filter (radio button selections)
  if (priceRangeOption && priceRangeOption !== "") {
    inputData = inputData.filter((product) => {
      const productPrice = Number(product.price) || 0;

      let isInRange = false;
      switch (priceRangeOption) {
        case "Under Pkr.500":
          isInRange = productPrice < 500;
          break;
        case "Pkr.501 to Pkr.1,000":
          isInRange = productPrice >= 501 && productPrice <= 1000;
          break;
        case "Pkr.1,001 to Pkr.2,000":
          isInRange = productPrice >= 1001 && productPrice <= 2000;
          break;
        case "Pkr.2,001 to Pkr.5,000":
          isInRange = productPrice >= 2001 && productPrice <= 5000;
          break;
        case "Pkr.5,001 to Pkr.10,000":
          isInRange = productPrice >= 5001 && productPrice <= 10000;
          break;
        case "Above Pkr.10,000":
          isInRange = productPrice > 10000;
          break;
        case "All Price":
        default:
          isInRange = true;
          break;
      }

      return isInRange;
    });
  }

  // Search filter
  if (searchByTitle) {
    inputData = inputData.filter(
      (product) =>
        product.name?.toLowerCase().includes(searchByTitle?.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(searchByTitle?.toLowerCase())
    );
  }

  // Available items filter
  if (availableItems && availableItems.length > 0) {
    const checkedItems = availableItems
      .filter((item) => item.checked)
      .map((item) => item.name);
    if (checkedItems.length > 0) {
      inputData = inputData.filter((product) =>
        checkedItems.some(
          (item) =>
            product.name?.toLowerCase().includes(item.toLowerCase()) ||
            product.description?.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  }

  // Popular tags filter
  if (popularTags && popularTags.length > 0) {
    inputData = inputData.filter((product) =>
      popularTags.some(
        (tag) =>
          product.name?.toLowerCase().includes(tag.toLowerCase()) ||
          product.description?.toLowerCase().includes(tag.toLowerCase()) ||
          product.categories?.some((cat) =>
            cat.name?.toLowerCase().includes(tag.toLowerCase())
          )
      )
    );
  }

  // Active filter
  if (activeFilter && activeFilter !== "") {
    inputData = inputData.filter(
      (product) =>
        product.name?.toLowerCase().includes(activeFilter.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(activeFilter.toLowerCase()) ||
        product.categories?.some((cat) =>
          cat.name?.toLowerCase().includes(activeFilter.toLowerCase())
        )
    );
  }

  // Filter by status (published products only)
  inputData = inputData.filter((p) => p.status === "published");

  return inputData;
}
