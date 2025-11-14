'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
  Chip,
  Divider,
} from '@mui/material';
import ContactMap from '../contact-map';
import { _mapContact } from 'src/_mock';

const contactChannels = [
  {
    label: 'Concierge Hotline',
    value: '+92 326 333 3022',
    helper: '24/7 phone & WhatsApp support',
  },
  {
    label: 'Workshop Hours',
    value: 'Mon – Sat, 9am to 9pm',
    helper: 'Appointments recommended for service work',
  },
  {
    label: 'Experience Studio',
    value: 'Ferozepur Road, Lahore',
    helper: 'Private viewing bays & delivery lounge',
  },
];

const quickLinks = [
  { label: 'Book a service slot', action: 'Schedule concierge' },
  { label: 'Import consultation', action: 'Talk to sourcing' },
  { label: 'Aftercare support', action: 'Request follow-up' },
];

export default function ContactView() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'linear-gradient(180deg, #eef2ff 0%, #f8fafc 100%)',
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
                label="Reach the GTA concierge"
                sx={{
                  alignSelf: 'flex-start',
                  textTransform: 'uppercase',
                  letterSpacing: 1.6,
                  fontWeight: 700,
                  bgcolor: 'rgba(148, 163, 184, 0.16)',
                  color: '#0f172a',
                  px: 2.5,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: '#0f172a',
                  fontSize: { xs: '2.6rem', md: '3.4rem' },
                  lineHeight: 1.1,
                }}
              >
                We’re one message away from transforming your build.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(71, 85, 105, 0.85)',
                  lineHeight: 1.7,
                  maxWidth: 540,
                }}
              >
                Book a concierge call, request an import brief, or schedule a pit stop at
                our Lahore studio. The team responds within minutes during operating hours.
              </Typography>
              <Stack spacing={3}>
                {contactChannels.map((channel) => (
                  <Card
                    key={channel.label}
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 2.5,
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2" sx={{ color: '#2563eb', letterSpacing: 0.6 }}>
                        {channel.label}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                        {channel.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(71, 85, 105, 0.8)' }}>
                        {channel.helper}
                      </Typography>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/contact/hero.jpg"
              alt="Garage Tuned Autos studio"
              sx={{
                width: '100%',
                borderRadius: 5,
                objectFit: 'cover',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 40px 80px rgba(15, 23, 42, 0.12)',
              }}
            />
          </Grid>
        </Grid>

        {/* Contact actions and form */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ mt: { xs: 8, md: 10 } }}
        >
          <Grid item xs={12} md={5}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
                bgcolor: '#ffffff',
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                  Quick concierge links
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(71, 85, 105, 0.75)', mb: 3 }}>
                  Skip the queue and jump straight to the program you need.
                </Typography>
                <Stack spacing={2.5}>
                  {quickLinks.map((link) => (
                    <Stack
                      key={link.label}
                      spacing={0.5}
                      divider={<Divider flexItem sx={{ borderColor: 'rgba(226, 232, 240, 0.7)' }} />}
                    >
                      <Typography variant="subtitle2" sx={{ color: '#2563eb', textTransform: 'uppercase' }}>
                        {link.label}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 600 }}>
                        {link.action}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 30px 70px rgba(15, 23, 42, 0.08)',
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f172a' }}>
                    Tell us what you need and we’ll follow up.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(71, 85, 105, 0.75)' }}>
                    Share a few details about your project, preferred schedule, or import target.
                    Our concierge team typically replies within 15 minutes.
                  </Typography>
                </Stack>
                <Stack spacing={3} sx={{ mt: 4 }}>
                  <TextField fullWidth label="Your name" />
                  <TextField fullWidth label="Email or phone" />
                  <TextField fullWidth label="Interested in" placeholder="Import, tuning, detailing, etc." />
                  <TextField fullWidth label="How can we help?" multiline rows={4} />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      alignSelf: { xs: 'stretch', sm: 'flex-start' },
                      px: 4,
                      py: 1.6,
                      fontWeight: 700,
                      borderRadius: 999,
                      background:
                        'linear-gradient(135deg, rgba(79,70,229,1) 0%, rgba(20,184,166,1) 100%)',
                    }}
                  >
                    Send request
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map & studios */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ mt: { xs: 8, md: 10 } }}
        >
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ letterSpacing: 2, color: '#2563eb' }}>
                Visit the GTA studio
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                Tour the workshop, lounge, and delivery bays.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(71, 85, 105, 0.8)', lineHeight: 1.7 }}>
                Premium viewing spaces, dedicated handover lounge, and live fabrication floors
                mean every visit feels as bespoke as the build you’re planning.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 32px 70px rgba(15, 23, 42, 0.08)',
              }}
            >
              <ContactMap contacts={_mapContact} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
