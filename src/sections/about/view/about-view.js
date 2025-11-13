import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

const stats = [
  { label: "Vehicles curated", value: "1.2K+" },
  { label: "Unique builds delivered", value: "340" },
  { label: "Cities served", value: "22" },
  { label: "Concierge partners", value: "48" },
];

const pillars = [
  {
    title: "Factory-grade sourcing",
    description:
      "Every vehicle is inspected, certified, and documented with provenance. Our buyers secure allocations other garages can’t touch.",
  },
  {
    title: "In-house fabrication",
    description:
      "From aero to interiors, our technicians build, paint, and calibrate under one roof so quality never leaves our line of sight.",
  },
  {
    title: "Concierge experience",
    description:
      "Dedicated advisors coordinate shipping, financing, insurance, and aftercare, keeping you updated at every milestone.",
  },
];

const timeline = [
  {
    year: "2016",
    headline: "Garage Tuned Autos launches",
    copy:
      "Started as a two-bay tuning studio in Lahore, focused on performance ECU work and bespoke detailing.",
  },
  {
    year: "2018",
    headline: "Concierge import program",
    copy:
      "Introduced global sourcing, handling customs, logistics, and certification for high-spec exotics and classic restorations.",
  },
  {
    year: "2021",
    headline: "Full-service ecosystem",
    copy:
      "Added interior studio, wrap division, and 24/7 mobile concierge — becoming the region’s only end-to-end automotive partner.",
  },
  {
    year: "2024",
    headline: "Digital showroom & marketplace",
    copy:
      "Launched GTA’s online platform connecting clients to curated builds, service programs, and parts inventory in real time.",
  },
];

const leaders = [
  {
    name: "Asad Khan",
    role: "Founder & Lead Strategist",
    image: "/assets/images/about/about_lead_1.jpg",
  },
  {
    name: "Maryam Ali",
    role: "Head of Fabrication",
    image: "/assets/images/about/about_lead_2.jpg",
  },
  {
    name: "Faisal Qureshi",
    role: "Global Sourcing Director",
    image: "/assets/images/about/about_lead_3.jpg",
  },
];

export default function AboutView() {
  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%)",
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(45, 212, 191, 0.12) 100%)",
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Chip
                  label="About Garage Tuned Autos"
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "uppercase",
                    letterSpacing: 1.6,
                    fontWeight: 700,
                    bgcolor: "rgba(15, 23, 42, 0.08)",
                    color: "#0f172a",
                    px: 2.5,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.6rem", md: "3.6rem" },
                    lineHeight: 1.1,
                    color: "#0f172a",
                  }}
                >
                  The performance atelier trusted by drivers who demand more.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(71, 85, 105, 0.85)",
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  GTA blends concierge service with race-proven engineering,
                  delivering cars, parts, and experiences that feel bespoke from
                  the key in hand to the miles you clock.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  boxShadow: "0 45px 90px rgba(15, 23, 42, 0.12)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                }}
                component="img"
                alt="Garage Tuned Autos facility"
                src="/assets/images/about/about_hero.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid key={stat.label} item xs={12} sm={6} md={3}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 800, color: "#2563eb" }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "rgba(71, 85, 105, 0.9)", mt: 1 }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Story + Timeline */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 } }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="flex-start"
        >
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: "#2563eb", letterSpacing: 2 }}>
                Our story
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}
              >
                Built by enthusiasts, engineered for drivers.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(71, 85, 105, 0.85)", lineHeight: 1.8 }}
              >
                From a modest tuning studio to a full-scale automotive concierge,
                GTA has always chased the balance of obsessive craftsmanship and
                white-glove client service. Every evolution is guided by one
                promise: deliver a machine that feels singularly yours.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack
              spacing={4}
              divider={
                <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.4)" }} />
              }
            >
              {timeline.map((item) => (
                <Stack
                  key={item.year}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 3 }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#2563eb", minWidth: 80 }}
                  >
                    {item.year}
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a" }}>
                      {item.headline}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(71, 85, 105, 0.8)", lineHeight: 1.7 }}
                    >
                      {item.copy}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Pillars */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 } }}>
        <Typography
          variant="overline"
          sx={{ color: "#2563eb", letterSpacing: 2, textAlign: "center" }}
        >
          Why drivers choose GTA
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mt: 1,
            fontWeight: 800,
            color: "#0f172a",
          }}
        >
          Three pillars define every build and service.
        </Typography>

        <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
          {pillars.map((pillar) => (
            <Grid key={pillar.title} item xs={12} md={4}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
                  backgroundColor: "#ffffff",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    {pillar.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, color: "rgba(71, 85, 105, 0.85)", lineHeight: 1.7 }}
                  >
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 } }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: "#2563eb", letterSpacing: 2 }}>
                Leadership
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}
              >
                A multidisciplinary crew anchoring every GTA build.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(71, 85, 105, 0.85)", lineHeight: 1.8 }}
              >
                Our leads bring experience from factory race teams, OEM design
                houses, and high-volume logistics — ensuring every GTA delivery
                is as polished behind the scenes as it is on the road.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {leaders.map((leader) => (
                <Grid key={leader.name} item xs={12} sm={4}>
                  <Stack spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={leader.image}
                      alt={leader.name}
                      sx={{
                        width: "100%",
                        borderRadius: 4,
                        objectFit: "cover",
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 16px 50px rgba(15, 23, 42, 0.1)",
                      }}
                    />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#0f172a" }}>
                        {leader.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(71, 85, 105, 0.75)" }}>
                        {leader.role}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Closing CTA */}
      <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 } }}>
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid rgba(226, 232, 240, 0.9)",
            boxShadow: "0 32px 80px rgba(15, 23, 42, 0.08)",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(20,184,166,0.12) 100%)",
          }}
        >
          <CardContent
            sx={{
              py: { xs: 6, md: 8 },
              px: { xs: 3, md: 8 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}
            >
              Let’s build something unforgettable together.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(71, 85, 105, 0.85)",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Whether you’re importing a flagship supercar or refreshing a daily
              driver, the GTA team is ready to translate your blueprint into a
              road-ready reality.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.6,
                  fontWeight: 700,
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, rgba(79,70,229,1) 0%, rgba(16,185,129,1) 100%)",
                }}
              >
                Meet the concierge team
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.6,
                  fontWeight: 700,
                  borderRadius: 999,
                  borderColor: "rgba(99, 102, 241, 0.5)",
                  color: "#312e81",
                }}
              >
                Explore service programs
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
