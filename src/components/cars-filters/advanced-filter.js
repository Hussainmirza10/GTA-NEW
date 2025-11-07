"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  Autocomplete,
  Typography,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
} from "@mui/material";
import {
  Search,
  DirectionsCar,
  AttachMoney,
  Speed,
  CalendarToday,
  LocalGasStation,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { paths } from "src/routes/paths";

const AdvancedFilter = () => {
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
    <Box
      sx={{
        position: "relative",
        mt: -8,
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            border: "2px solid",
            borderColor: "rgba(147, 51, 234, 0.2)",
            boxShadow: "0 20px 60px rgba(147, 51, 234, 0.15)",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#1F2937",
                mb: 1,
              }}
            >
              Find Your Perfect Car
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
              }}
            >
              Use advanced filters to search through our extensive inventory
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {/* Make */}
            <Grid item xs={12} sm={6} md={3}>
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
            <Grid item xs={12} sm={6} md={3}>
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
            <Grid item xs={6} sm={3} md={1.5}>
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
            <Grid item xs={6} sm={3} md={1.5}>
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
            <Grid item xs={6} sm={6} md={2}>
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
            <Grid item xs={6} sm={6} md={2}>
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
            <Grid item xs={12} sm={6} md={2}>
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
            <Grid item xs={6} sm={6} md={2}>
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
            <Grid item xs={6} sm={6} md={2}>
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
            <Grid item xs={12} sm={6} md={2}>
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
                Search
              </Button>
            </Grid>

            {/* Reset Button */}
            <Grid item xs={12} sm={6} md={2}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                onClick={handleReset}
                sx={{
                  height: "56px",
                  borderColor: "#9333EA",
                  color: "#9333EA",
                  fontWeight: 700,
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "#7E22CE",
                    borderWidth: 2,
                    background: "rgba(147, 51, 234, 0.05)",
                  },
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdvancedFilter;

