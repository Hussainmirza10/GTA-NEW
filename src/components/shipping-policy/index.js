import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LocalShipping,
  Speed,
  TrackChanges,
  Phone,
  Email,
  WhatsApp,
  Shield,
  AccessTime,
  CheckCircle,
} from "@mui/icons-material";

const tiers = [
  {
    name: "Standard",
      price: "₨1,800",
    window: "3 – 5 business days",
    perks: [
      "Free above ₨18,000",
      "Tracked handoff and signature",
      "Automated status alerts",
    ],
    icon: <LocalShipping sx={{ color: "#2563eb" }} />,
  },
  {
    name: "Express",
      price: "₨3,600",
    window: "1 – 2 business days",
    perks: [
      "Priority picking and packing",
      "Dedicated courier network",
      "Weekend dispatch available",
    ],
    icon: <Speed sx={{ color: "#0f766e" }} />,
  },
  {
    name: "Premium",
      price: "₨7,200",
    window: "Same-day (select cities)",
    perks: [
      "Direct-to-door concierge",
      "Photo confirmation on delivery",
      "On-site inspection on request",
    ],
    icon: <TrackChanges sx={{ color: "#ea580c" }} />,
  },
];

const assurances = [
  "All parcels travel with foam-in-place packaging and sealed crates for sensitive components.",
  "Every order receives a live tracking link the moment it leaves our warehouse.",
  "Flexible delivery windows — choose evening or weekend drop-offs in major metros.",
  "Customs-ready documentation for international consignments and import builds.",
];

const checkpoints = [
  { label: "Order confirmed", detail: "Instant email + SMS acknowledgement" },
  { label: "Prepared for dispatch", detail: "Technician inspection & packing" },
  { label: "Courier collected", detail: "Tracking ID activated" },
  { label: "In-transit updates", detail: "Location refreshed at key hubs" },
  { label: "Delivered", detail: "Signature and photo proof saved to your account" },
];

const contactOptions = [
  { icon: <Phone fontSize="small" />, label: "Concierge line", value: "+92 326 333 3456" },
  { icon: <WhatsApp fontSize="small" />, label: "WhatsApp updates", value: "+92 326 333 3456" },
  { icon: <Email fontSize="small" />, label: "Support mailbox", value: "customersupport@garagetunedautos.com" },
];

export default function ShippingPolicy() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #eef2ff 0%, #f8fafc 50%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Chip
                label="Shipping & delivery promise"
                sx={{
                  alignSelf: "flex-start",
                  textTransform: "uppercase",
                  letterSpacing: 1.6,
                  fontWeight: 700,
                  bgcolor: "rgba(148, 163, 184, 0.18)",
                  color: "#0f172a",
                  px: 2.5,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#0f172a",
                  fontSize: { xs: "2.6rem", md: "3.6rem" },
                  lineHeight: 1.1,
                }}
              >
                Performance parts, delivered like the builds we tune.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(71, 85, 105, 0.85)",
                  lineHeight: 1.7,
                  maxWidth: 540,
                }}
              >
                GTA partners with premium couriers across Pakistan and the GCC,
                ensuring every package is protected, tracked, and delivered on
                your schedule. Expect studio-grade handling, whether it’s a
                ceramic kit or a full aero assembly.
              </Typography>
              <Grid container spacing={2}>
                {contactOptions.map((item) => (
                  <Grid key={item.label} item xs={12} sm={4}>
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          sx={{ display: "flex", alignItems: "center", gap: 1, color: "#2563eb" }}
                        >
                          {item.icon}
                          {item.label}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 600, color: "#0f172a" }}>
                          {item.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/about/about_vision.jpg"
              alt="Shipping operations"
              sx={{
                width: "100%",
                borderRadius: 5,
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 40px 80px rgba(15, 23, 42, 0.12)",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        {/* Delivery tiers */}
              <Typography
          variant="overline"
          sx={{ color: "#2563eb", letterSpacing: 2, mt: { xs: 8, md: 10 }, display: "block" }}
        >
          Options tailored to your timeline
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 4 }}>
          Choose the lane that matches your build schedule.
              </Typography>

              <Grid container spacing={3}>
          {tiers.map((tier) => (
            <Grid key={tier.name} item xs={12} md={4}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    {tier.icon}
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a" }}>
                      {tier.name}
                    </Typography>
                  </Stack>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#2563eb" }}>
                    {tier.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(71, 85, 105, 0.75)", mt: 1, mb: 2 }}
                  >
                    {tier.window}
                  </Typography>
                  <List dense>
                    {tier.perks.map((perk) => (
                      <ListItem key={perk} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircle sx={{ color: "#16a34a", fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText primary={perk} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
                </Grid>

        {/* Assurances */}
        <Card
          elevation={0}
          sx={{
            mt: { xs: 8, md: 10 },
            borderRadius: 4,
            border: "1px solid rgba(226, 232, 240, 0.9)",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
            backgroundColor: "#ffffff",
          }}
        >
          <CardContent>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="flex-start">
              <Box sx={{ minWidth: { md: 240 } }}>
                <Typography variant="overline" sx={{ color: "#2563eb", letterSpacing: 2 }}>
                  Our guarantee
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a", mt: 1 }}>
                  What every GTA shipment includes.
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {assurances.map((item) => (
                  <Grid key={item} item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        p: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(37, 99, 235, 0.08)",
                      }}
                    >
                      <Shield sx={{ color: "#2563eb", mt: 0.5 }} />
                      <Typography variant="body2" sx={{ color: "rgba(30, 41, 59, 0.9)", lineHeight: 1.7 }}>
                        {item}
                  </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            </CardContent>
          </Card>

        {/* Process timeline */}
        <Grid
          container
          spacing={3}
          sx={{ mt: { xs: 8, md: 10 } }}
        >
          {checkpoints.map((step) => (
            <Grid key={step.label} item xs={12} md={4}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 16px 45px rgba(15, 23, 42, 0.06)",
                  backgroundColor: "#ffffff",
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#2563eb", textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    {step.label}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", mt: 0.5 }}>
                    {step.detail}
              </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Operating hours & support */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ mt: { xs: 8, md: 10 } }}
        >
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                backgroundColor: "#ffffff",
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ color: "#2563eb", letterSpacing: 2 }}>
                  Operating hours
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a", mt: 1 }}>
                  Dispatch windows & cut-off times.
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTime sx={{ color: "#2563eb" }} />
                    <Typography variant="body1" sx={{ color: "rgba(30, 41, 59, 0.85)" }}>
                      Orders placed before 2pm ship same day (Mon – Sat)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTime sx={{ color: "#2563eb" }} />
                    <Typography variant="body1" sx={{ color: "rgba(30, 41, 59, 0.85)" }}>
                      Express cut-off extended to 5pm for Lahore & Islamabad
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTime sx={{ color: "#2563eb" }} />
                    <Typography variant="body1" sx={{ color: "rgba(30, 41, 59, 0.85)" }}>
                      Premium same-day slots confirmed by concierge after booking
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(20,184,166,0.12) 100%)",
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ color: "#2563eb", letterSpacing: 2 }}>
                  Need a custom quote?
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mt: 1 }}>
                  We handle oversized kits and international freight daily.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(71, 85, 105, 0.8)", lineHeight: 1.7, mt: 2 }}
                >
                  Share build sheets, sourcing invoices, or delivery specs with the concierge
                  team for bespoke routing and insurance coverage.
                </Typography>
                <Stack spacing={1.5} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone fontSize="small" /> +92 326 333 3456
                  </Typography>
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email fontSize="small" /> logistics@garagetunedautos.com
                  </Typography>
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <WhatsApp fontSize="small" /> Instant updates via concierge chat
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                      }}>
                      <CheckCircle color="success" sx={{ mr: 2 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Delivery Timeline Table */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}>
                <Schedule color="primary" />
                Delivery Timeline
              </Typography>

              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Step</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Description
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {deliveryTimeline.map((step, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}>
                            {step.icon}
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: "medium" }}>
                              {step.step}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={step.time}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {step.description}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} lg={4}>
          {/* Free Shipping Banner */}
          <Card sx={{ mb: 4, backgroundColor: "success.main", color: "white" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <LocalOffer sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Free Shipping
              </Typography>
              <Typography variant="body1">
                On all orders over ₨18,000
              </Typography>
            </CardContent>
          </Card>

          {/* Shipping Tips */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}>
                <Info color="info" />
                Shipping Tips
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "info.main" }}>
                    📦 Package Protection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All packages are carefully wrapped and protected for safe
                    delivery.
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "info.main" }}>
                    📱 Tracking Updates
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Receive real-time updates via email and SMS throughout the
                    delivery process.
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "info.main" }}>
                    🏠 Delivery Options
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Choose between home delivery, office delivery, or pickup
                    from local collection points.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Customer Support */}
          <Card sx={{ backgroundColor: "primary.main", color: "white" }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}>
                <SupportAgent />
                Need Help?
              </Typography>
              <Typography variant="body2" paragraph>
                Our Customer Support Team is available to assist you with any
                shipping questions.
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" />
                  +923263333456
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email fontSize="small" />
                  customersupport@gtaAutos.co.uk
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <WhatsApp fontSize="small" />
                  +923263333456
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        textAlign="center"
        mt={6}
        p={3}
        sx={{ backgroundColor: "grey.50", borderRadius: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}>
          Fast & Reliable Shipping from Garage Tuned Autos! 🚚📦
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're committed to getting your automotive parts and accessories to
          you quickly and safely.
        </Typography>
      </Box>
    </Container>
  );
};

export default ShippingPolicy;
