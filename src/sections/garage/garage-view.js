"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useQuery } from "@tanstack/react-query";

import EmptyContent from "src/components/empty-content";
import Image from "src/components/image";
import { useSettingsContext } from "src/components/settings";
import { CarsService } from "src/services";

import GarageList from "./garage-list";

const ITEMS_PER_PAGE = 12;

const gradientForListing = (listing) =>
  listing === "buy"
    ? "linear-gradient(180deg, rgba(126, 58, 242, 0.92) 0%, rgba(147, 51, 234, 0.66) 45%, rgba(216, 180, 254, 0.12) 100%)"
    : "linear-gradient(180deg, rgba(37, 99, 235, 0.92) 0%, rgba(59, 130, 246, 0.7) 45%, rgba(191, 219, 254, 0.16) 100%)";

// ----------------------------------------------------------------------

export default function GarageView() {
  const settings = useSettingsContext();

  const [activeListing, setActiveListing] = useState("rent");
  const [page, setPage] = useState(1);
  const [displayedCars, setDisplayedCars] = useState([]);
  const loaderRef = useRef(null);

  const rentalCategories = [
    {
      key: "luxury",
      title: "Rent Luxury",
      image: "/assets/luxury-type.webp",
      keywords: ["luxury", "bentley", "mercedes", "premium"],
    },
    {
      key: "pickup",
      title: "Rent Pickup Truck",
      image: "/assets/pickup-type.webp",
      keywords: ["pickup", "truck", "raptor", "tundra"],
    },
    {
      key: "suv",
      title: "Rent SUV",
      image: "/assets/suv-type.webp",
      keywords: ["suv", "rangerover", "defender"],
    },
    {
      key: "monthly",
      title: "Rent Monthly",
      image: "/assets/monthy-type.webp",
      keywords: ["monthly", "long term", "lease"],
    },
    {
      key: "budget",
      title: "Cheap Rent A Car",
      image: "/assets/economy-type.webp",
      keywords: ["cheap", "budget", "economy"],
    },
    {
      key: "supercars",
      title: "Rent Supercars",
      image: "/assets/supercar-type-v2.webp",
      keywords: ["supercar", "hypercar", "lambo"],
    },
    {
      key: "convertible",
      title: "Rent Convertible",
      image: "/assets/convertible-type.webp",
      keywords: ["convertible", "roadster"],
    },
    {
      key: "electric",
      title: "Rent Electric",
      image: "/assets/electric-type.webp",
      keywords: ["electric", "ev", "tesla"],
    },
  ];

  const { data: cars = [], isLoading: loading } = useQuery({
    queryKey: ["cars", "all"],
    queryFn: async () => {
      const res = await CarsService.getAll();
      if (res?.data) {
        return res.data.filter((car) => car?.status !== "Paused") || [];
      }
      return [];
    },
    staleTime: 30 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const saleCars = useMemo(
    () => cars.filter((car) => (car?.category ?? "").toLowerCase() === "sale"),
    [cars]
  );

  const rentCars = useMemo(
    () => cars.filter((car) => (car?.category ?? "").toLowerCase() === "rent"),
    [cars]
  );

  const activeCars = useMemo(
    () => (activeListing === "buy" ? saleCars : rentCars),
    [activeListing, saleCars, rentCars]
  );

  useEffect(() => {
    setPage(1);
  }, [activeListing]);

  useEffect(() => {
    const endIndex = page * ITEMS_PER_PAGE;
    setDisplayedCars(activeCars.slice(0, endIndex));
  }, [activeCars, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (
          target?.isIntersecting &&
          !loading &&
          displayedCars.length < activeCars.length
        ) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const current = loaderRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [loading, displayedCars.length, activeCars.length]);

  const hasMore = displayedCars.length < activeCars.length;

  return (
    <Box sx={{ mt: { xs: 6, md: 8 } }}>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f3f0ff 0%, #ede9fe 100%)",
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
                    color: "#7c3aed",
                  }}
                >
                  Garage Tuned Autos
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.7rem", md: "3.6rem" },
                    color: "#1f2937",
                    lineHeight: 1.1,
                  }}
                >
                  Explore Our Vehicle Collection
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b5563",
                    fontSize: { xs: "1.05rem", md: "1.1rem" },
                    maxWidth: 540,
                  }}
                >
                  From adrenaline-fuelled supercars to chauffeur-grade luxury sedans,
                  discover vehicles curated for unforgettable journeys.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    onClick={() => setActiveListing("rent")}
                    sx={{
                      backgroundColor: "#111827",
                      color: "#fff",
                      px: 4,
                      py: 1.4,
                      borderRadius: "999px",
                      fontWeight: 700,
                      boxShadow: "0 12px 30px rgba(17, 24, 39, 0.25)",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                  >
                    Browse Rentals
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setActiveListing("buy")}
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
                    View Cars for Sale
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "78%",
                    height: "78%",
                    borderRadius: "32px",
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.18), transparent 60%)",
                    filter: "blur(32px)",
                  }}
                />
                <Image
                  alt="Garage hero"
                  src="/assets/bugati.png"
                  sx={{
                    position: "relative",
                    width: { xs: "80%", md: "90%" },
                    maxWidth: 520,
                    filter: "drop-shadow(0 26px 48px rgba(124, 58, 237, 0.35))",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Rental Categories */}
      <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 7 }, pb: { xs: 3, md: 5 } }}>
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#1f2937", fontWeight: 700 }}>
            Browse Rental Categories
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {rentalCategories.map((category) => {
            const count = rentCars.filter((car) => {
              const haystack = `${car?.title ?? ""} ${car?.name ?? ""} ${car?.carDetails?.brand ?? ""} ${
                car?.carDetails?.model ?? ""
              } ${car?.carDetails?.bodyStyle ?? ""} ${car?.carDetails?.vehicleType ?? ""}`
                .toLowerCase();
              return category.keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
            }).length;

            return (
              <Grid item xs={12} sm={6} md={3} key={category.key}>
                <Paper
                  elevation={2}
                  sx={{
                    px: 2,
                    py: 3,
                    borderRadius: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Image
                    alt={category.title}
                    src={category.image}
                    sx={{ width: "100%", maxWidth: 170, height: 110, objectFit: "contain" }}
                  />
                  <Stack spacing={0.5} alignItems="center">
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#1f2937" }}>
                      {category.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {count} Cars
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Toggle & Summary */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={3} alignItems="center">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant={activeListing === "buy" ? "contained" : "outlined"}
              onClick={() => setActiveListing("buy")}
              sx={{
                minWidth: 160,
                borderRadius: "999px",
                fontWeight: 700,
                backgroundColor:
                  activeListing === "buy" ? "#111827" : "transparent",
                color: activeListing === "buy" ? "#fff" : "#111827",
                borderColor: "#111827",
                "&:hover": {
                  backgroundColor:
                    activeListing === "buy" ? "#000" : "rgba(17, 24, 39, 0.1)",
                },
              }}
            >
              Buy ({saleCars.length})
            </Button>
            <Button
              variant={activeListing === "rent" ? "contained" : "outlined"}
              onClick={() => setActiveListing("rent")}
              sx={{
                minWidth: 160,
                borderRadius: "999px",
                fontWeight: 700,
                backgroundColor:
                  activeListing === "rent" ? "#111827" : "transparent",
                color: activeListing === "rent" ? "#fff" : "#111827",
                borderColor: "#111827",
                "&:hover": {
                  backgroundColor:
                    activeListing === "rent" ? "#000" : "rgba(17, 24, 39, 0.1)",
                },
              }}
            >
              Rent ({rentCars.length})
            </Button>
          </Stack>

          <Typography
            variant="body1"
            sx={{ color: "#4b5563", maxWidth: 680, textAlign: "center" }}
          >
            Toggle between our curated buying inventory and a rental fleet that
            comes detailed, delivered, and ready for the spotlight.
          </Typography>
        </Stack>
      </Container>

      {/* Vehicle Grid */}
      <Box
        sx={{
          background: gradientForListing(activeListing),
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {!displayedCars.length && !loading ? (
                <EmptyContent
                  filled
                  title="No vehicles available"
                  sx={{ py: 10, color: "#fff" }}
                />
              ) : (
                <GarageList
                  products={displayedCars}
                  loading={loading}
                  loaderRef={loaderRef}
                  hasMore={hasMore}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlight Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            px: { xs: 4, md: 8 },
            py: { xs: 5, md: 7 },
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(233, 213, 255, 0.22))",
          }}
        >
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#4c1d95" }}
            >
              Purple Carpet Delivery
            </Typography>
            <Typography variant="body1" sx={{ color: "#5b21b6", maxWidth: 640 }}>
              Every booking includes concierge communication, white-glove detailing,
              and door-to-door delivery so your vehicle arrives photo ready.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                px: 4,
                py: 1.4,
                fontWeight: 700,
                backgroundColor: "#7c3aed",
                color: "#fff",
                "&:hover": { backgroundColor: "#6d28d9" },
              }}
            >
              Talk to our Concierge
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
