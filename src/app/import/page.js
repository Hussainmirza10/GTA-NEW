import { Container, Stack, Typography, Button, Box, Card, CardContent, Grid, Chip } from "@mui/material";
import Link from "next/link";
import CustomLayout from "../custom-layout";
import MainLayout from "src/layouts/main";
import ImportDreamBanner from "src/components/import/import-dream-banner";
import ImportAccessoriesBanner from "src/components/import/import-accessories-banner";

// ----------------------------------------------------------------------

export const metadata = {
  title: "garage tuned autos - Import",
  description:
    "Discover our tailored import services and learn how Garage Tuned Autos brings premium vehicles right to your driveway.",
};

export default function ImportPage() {
  const carTiles = [
    {
      title: "Ford Raptor",
      subtitle:
        "Twin-turbo Baja legend imported with Fox Live Valve suspension, long-travel arms, and desert-ready extras.",
      image: "/assets/fordraptorP.jpg",
      badge: "Off-Road",
    },
    {
      title: "Toyota Tundra",
      subtitle:
        "TRD Pro adventure spec featuring overland armor, snorkel intake, and premium towing and camping upgrades.",
      image: "/assets/raptorP.jpeg",
      badge: "Overland",
    },
    {
      title: "BMW M4",
      subtitle:
        "Competition package coupe with carbon buckets, CSL aero kit, and certified European delivery provenance.",
      image: "/assets/bmwP.jpg",
      badge: "Performance",
    },
    {
      title: "Mercedes C180 Convertible",
      subtitle:
        "Elegant AMG-line drop-top, Burmester audio, and bespoke leather trim tailored for year-round city cruising.",
      image: "/assets/c180P.webp",
      badge: "Luxury",
    },
  ];

  const accessoryTiles = [
    {
      title: "Performance Engines",
      subtitle: "VO6 long-blocks and crate motors, dyno-tested with warranty support and installation guidance.",
      image: "/assets/engine.jpg",
      badge: "Power",
    },
    {
      title: "Suspension Kits",
      subtitle: "KW, Ohlins, Bilstein, and Air Lift systems tailored for road, track, and stance builds.",
      image: "/assets/suspension-kit.jpg",
      badge: "Handling",
    },
    {
      title: "Carbon Aero & Body",
      subtitle: "Forged carbon spoilers, diffusers, and wide-body conversions with perfect fitment.",
      image: "/assets/carbon-aero.jpg",
      badge: "Aero",
    },
    {
      title: "Interior & Tech",
      subtitle: "Recaro seats, infotainment upgrades, steering wheels, and Alcantara trim shipped with install support.",
      image: "/assets/interior-upgrade.jpg",
      badge: "Lifestyle",
    },
  ];

  return (
    <CustomLayout>
      <MainLayout>
        <Box sx={{ pt: 6 }}>
          <ImportDreamBanner />
          <ImportAccessoriesBanner />
          <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  Signature Import Portfolio
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 720 }}>
                  Four halo models ready for bespoke import, each curated with provenance reports,
                  inspection videos, and global logistics support.
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {carTiles.map((tile) => (
                  <Grid item xs={12} sm={6} md={3} key={tile.title}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 12px 40px rgba(15, 23, 42, 0.12)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.16)",
                        },
                      }}>
                      <Box
                        component="img"
                        src={tile.image}
                        alt={tile.title}
                        sx={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {tile.title}
                          </Typography>
                          <Chip
                            size="small"
                            label={tile.badge}
                            sx={{
                              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                              color: "#fff",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          />
                        </Stack>
                        <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
                          {tile.subtitle}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={3}>
                {accessoryTiles.map((tile) => (
                  <Grid item xs={12} sm={6} md={3} key={tile.title}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 12px 40px rgba(37, 99, 235, 0.12)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 60px rgba(37, 99, 235, 0.18)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={tile.image}
                        alt={tile.title}
                        sx={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {tile.title}
                          </Typography>
                          <Chip
                            size="small"
                            label={tile.badge}
                            sx={{
                              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                              color: "#fff",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          />
                        </Stack>
                        <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
                          {tile.subtitle}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
          <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
            <Stack spacing={3}>
              <Stack spacing={3}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#0B0F19",
                    fontWeight: 600,
                    letterSpacing: 2,
                  }}
                >
                  Import Services
                </Typography>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2.5} alignItems="flex-start">
                  <Box sx={{ flex: 1, pr: { md: 2 } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2.5rem", md: "3.25rem" },
                        lineHeight: 1.2,
                        mb: 1.5,
                      }}
                    >
                      Bring Your Next Dream Car Home
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 720 }}>
                      From sourcing exclusive models to handling customs and compliance, our import concierge team
                      manages every detail. Explore curated inventories, request bespoke procurement, and stay updated
                      with transparent tracking at every milestone.
                    </Typography>
                  </Box>
                  <Stack spacing={2} alignItems={{ xs: "flex-start", md: "flex-start" }}>
                    <Box
                      component="img"
                      src="/assets/certified1.png"
                      alt="Certified Import Partner"
                      sx={{
                        height: { xs: 86, md: 110 },
                        width: { xs: "auto", md: 280 },
                        objectFit: "contain",
                      }}
                    />
                    <Box
                      sx={{
                        border: "1px solid rgba(37, 99, 235, 0.35)",
                        borderRadius: 3,
                        p: { xs: 2.5, md: 3 },
                        maxWidth: 320,
                        background:
                          "linear-gradient(135deg, rgba(219, 234, 254, 0.25) 0%, rgba(219, 234, 254, 0.05) 100%)",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                        Licensed and certified import facilitator managing inspections, compliance, customs clearance,
                        and white-glove delivery worldwide.
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                {/* Paragraph moved above to align directly under heading */}
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  href="/contact-us"
                  size="large"
                  variant="contained"
                  sx={{ px: 4 }}>
                  Talk to a Specialist
                </Button>
                <Button
                  component={Link}
                  href="/cars"
                  size="large"
                  variant="outlined"
                  sx={{ px: 4 }}>
                  Explore Garage Inventory
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </MainLayout>
    </CustomLayout>
  );
}

