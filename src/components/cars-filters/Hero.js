"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import {
  Search,
  DirectionsCar,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

const Hero = () => {
  const router = useRouter();
  
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    city: "",
    bodyType: "",
    transmission: "",
    fuelType: "",
  });

  const carMakes = [
    "Toyota",
    "Honda",
    "Suzuki",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Hyundai",
    "Kia",
    "MG",
    "Nissan",
    "Mitsubishi",
  ];

  const bodyTypes = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Crossover",
    "Coupe",
    "Van",
    "Truck",
    "Convertible",
  ];

  const transmissionTypes = ["Automatic", "Manual"];
  const fuelTypes = ["Petrol", "Diesel", "Hybrid Electric", "Electric", "CNG"];

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => currentYear - i);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    router.push(`${paths.cars.root}?${queryParams.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      make: "",
      model: "",
      yearFrom: "",
      yearTo: "",
      priceFrom: "",
      priceTo: "",
      city: "",
      bodyType: "",
      transmission: "",
      fuelType: "",
    });
  };

  return (
    <Box sx={{ 
      mb: 4,
      py: 4,
      background: "#FFFFFF",
    }}>
      <Container
        sx={{
          borderRadius: "20px",
          display: "flex",
          minHeight: { xs: "auto", md: 750 },
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={0}>
          {/* Left Side - Image with Text */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: { xs: 400, md: 750 },
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                  backgroundImage: "url(/assets/Gemini_Generated_Image_9cwk0u9cwk0u9cwk.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Search Filters */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                minHeight: { xs: "auto", md: 750 },
                background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "#1F2937",
                    mb: 1,
                    fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Find Your Perfect Car
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6B7280",
                    fontWeight: 500,
                  }}
                >
                  Use advanced filters to search through our extensive inventory
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {/* Make */}
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={carMakes}
                    value={filters.make}
                    onChange={(e, newValue) =>
                      setFilters({ ...filters, make: newValue || "" })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Make"
                        placeholder="Select Make"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <DirectionsCar sx={{ color: "#9333EA" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Body Type */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Body Type</InputLabel>
                    <Select
                      value={filters.bodyType}
                      label="Body Type"
                      onChange={(e) =>
                        setFilters({ ...filters, bodyType: e.target.value })
                      }
                    >
                      <MenuItem value="">All Types</MenuItem>
                      {bodyTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Year From */}
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Year From</InputLabel>
                    <Select
                      value={filters.yearFrom}
                      label="Year From"
                      onChange={(e) =>
                        setFilters({ ...filters, yearFrom: e.target.value })
                      }
                    >
                      <MenuItem value="">Any</MenuItem>
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Year To */}
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Year To</InputLabel>
                    <Select
                      value={filters.yearTo}
                      label="Year To"
                      onChange={(e) =>
                        setFilters({ ...filters, yearTo: e.target.value })
                      }
                    >
                      <MenuItem value="">Any</MenuItem>
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Price From */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Price From"
                    type="number"
                    value={filters.priceFrom}
                    onChange={(e) =>
                      setFilters({ ...filters, priceFrom: e.target.value })
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">PKR</InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Price To */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Price To"
                    type="number"
                    value={filters.priceTo}
                    onChange={(e) =>
                      setFilters({ ...filters, priceTo: e.target.value })
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">PKR</InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={cities}
                    value={filters.city}
                    onChange={(e, newValue) =>
                      setFilters({ ...filters, city: newValue || "" })
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="City" placeholder="Select City" />
                    )}
                  />
                </Grid>

                {/* Transmission */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Transmission</InputLabel>
                    <Select
                      value={filters.transmission}
                      label="Transmission"
                      onChange={(e) =>
                        setFilters({ ...filters, transmission: e.target.value })
                      }
                    >
                      <MenuItem value="">All</MenuItem>
                      {transmissionTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Fuel Type */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Fuel Type</InputLabel>
                    <Select
                      value={filters.fuelType}
                      label="Fuel Type"
                      onChange={(e) =>
                        setFilters({ ...filters, fuelType: e.target.value })
                      }
                    >
                      <MenuItem value="">All</MenuItem>
                      {fuelTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Search Button */}
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleSearch}
                    sx={{
                      height: "56px",
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                        boxShadow: "0 6px 25px rgba(16, 185, 129, 0.4)",
                      },
                    }}
                    startIcon={<Search />}
                  >
                    Search Cars
                  </Button>
                </Grid>

                {/* Reset Button */}
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    onClick={handleReset}
                    sx={{
                      height: "56px",
                      borderColor: "#000000",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      borderWidth: 2,
                      bgcolor: "#000000",
                      "&:hover": {
                        borderColor: "#000000",
                        borderWidth: 2,
                        bgcolor: "#1F2937",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    Reset Filters
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
