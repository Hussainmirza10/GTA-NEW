import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Add Car Information',
    icon: 'solar:car-bold-duotone',
    description: 'Enter your car details and specifications',
  },
  {
    title: 'Upload Car Images',
    icon: 'solar:gallery-bold-duotone',
    description: 'Add photos of your vehicle',
  },
  {
    title: 'Enter Your Selling Price',
    icon: 'solar:tag-bold-duotone',
    description: 'Set your desired price',
  },
];

// ----------------------------------------------------------------------

export default function AppSellCarSteps({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box sx={{ ...sx }} {...other}>
      {/* Main Heading with Icon */}
      <Stack spacing={1} alignItems="center" mb={2}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.main,
            mb: 1,
          }}
        >
          <Iconify
            icon="solar:route-bold-duotone"
            width={32}
            height={32}
            sx={{ color: theme.palette.primary.main }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          Sell your Car With 3 Easy & Simple Steps!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          It's free and takes less than a minute
        </Typography>
      </Stack>

      {/* Three Step Cards */}
      <Grid container spacing={3}>
        {STEPS.map((step, index) => (
          <Grid xs={12} md={4} key={index}>
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 2.5,
                boxShadow: theme.customShadows.z8,
                position: 'relative',
                bgcolor: 'background.paper',
                transition: theme.transitions.create(['transform', 'box-shadow'], {
                  duration: theme.transitions.duration.shorter,
                }),
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.customShadows.z24,
                },
              }}
            >
              <Stack spacing={2.5} alignItems="center">
                {/* Step Number Badge - Purple with white number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.primary.main, // Purple-700
                    color: 'common.white',
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: theme.customShadows.z8,
                  }}
                >
                  {index + 1}
                </Box>

                {/* Icon Container - Light blue square with rounded corners */}
                <Box
                  sx={{
                    width: 96,
                    height: 96,
                    borderRadius: 2.5, // Slightly rounded square
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: alpha('#4FC3F7', 0.12), // Light blue background - more visible
                    border: `2px solid ${alpha('#4FC3F7', 0.2)}`,
                    mb: 1,
                    position: 'relative',
                  }}
                >
                  <Iconify
                    icon={step.icon}
                    width={48}
                    height={48}
                    sx={{ color: '#4FC3F7' }} // Light blue color
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 280,
                    mx: 'auto',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

AppSellCarSteps.propTypes = {
  sx: PropTypes.object,
};

