import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const GUIDE_SECTIONS = [
  {
    title: 'Step 1: Add Car Information',
    icon: 'solar:car-bold-duotone',
    details: [
      { text: 'Select the car make (e.g., Toyota, Honda, BMW)', icon: 'solar:car-front-bold-duotone' },
      { text: 'Choose the model and variant', icon: 'solar:car-badge-bold-duotone' },
      { text: 'Enter year of manufacture', icon: 'solar:calendar-bold-duotone' },
      { text: 'Specify engine capacity (in CC)', icon: 'solar:engine-bold-duotone' },
      { text: 'Select fuel type (Petrol, Diesel, Electric, Hybrid)', icon: 'solar:fuel-bold-duotone' },
      { text: 'Choose transmission type (Automatic, Manual, CVT)', icon: 'solar:settings-bold-duotone' },
      { text: 'Enter the car color', icon: 'solar:pallete-2-bold-duotone' },
      { text: 'Add registered city', icon: 'solar:map-point-bold-duotone' },
      { text: 'Select condition (Excellent, Good, Fair, Poor)', icon: 'solar:shield-check-bold-duotone' },
      { text: 'Enter mileage (in kilometers)', icon: 'solar:speedometer-bold-duotone' },
      { text: 'Add your contact phone number', icon: 'solar:phone-bold-duotone' },
    ],
    tips: [
      'Be accurate with car details to attract serious buyers',
      'Include all standard features and extras',
      'Mention any modifications or special characteristics',
    ],
  },
  {
    title: 'Step 2: Upload Car Images',
    icon: 'solar:gallery-bold-duotone',
    details: [
      { text: 'Upload minimum 3 images (maximum 9 images)', icon: 'solar:gallery-add-bold-duotone' },
      { text: 'Include exterior shots from all angles', icon: 'solar:camera-bold-duotone' },
      { text: 'Add interior photos (dashboard, seats, steering)', icon: 'solar:sofa-3-bold-duotone' },
      { text: 'Take photos in good lighting', icon: 'solar:lightbulb-bolt-bold-duotone' },
      { text: 'Include images of the engine bay', icon: 'solar:engine-bold-duotone' },
      { text: 'Show any damage or scratches if present', icon: 'solar:info-circle-bold-duotone' },
    ],
    tips: [
      'Use high-quality, clear images for better response',
      'Take photos during daylight for best results',
      'Show the car from different angles',
      'Include close-ups of special features',
      'Be honest - include any imperfections',
    ],
  },
  {
    title: 'Step 3: Enter Your Selling Price',
    icon: 'solar:tag-bold-duotone',
    details: [
      { text: 'Research similar cars in your area', icon: 'solar:search-bold-duotone' },
      { text: 'Set a competitive but fair price', icon: 'solar:dollar-circle-bold-duotone' },
      { text: 'Consider the car condition and mileage', icon: 'solar:chart-2-bold-duotone' },
      { text: 'Factor in market demand', icon: 'solar:graph-up-bold-duotone' },
      { text: 'Leave room for negotiation if needed', icon: 'solar:hand-stars-bold-duotone' },
      { text: 'For rentals: Set daily, weekly, and monthly rates', icon: 'solar:calendar-mark-bold-duotone' },
    ],
    tips: [
      'Check current market prices for similar vehicles',
      'Price competitively to attract buyers quickly',
      'Be open to reasonable offers',
      'Include additional costs (if any) in description',
    ],
  },
];

const ADDITIONAL_INFO = [
  {
    title: 'Description Tips',
    icon: 'solar:document-bold-duotone',
    points: [
      'Write a detailed and honest description',
      'Highlight key features and selling points',
      'Mention service history and maintenance records',
      'Include any warranty or certification details',
      'Be transparent about any issues or repairs needed',
    ],
  },
  {
    title: 'Location & Contact',
    icon: 'solar:map-point-bold-duotone',
    points: [
      'Add your accurate location and postal code',
      'Provide a valid contact phone number',
      'Be responsive to inquiries from potential buyers',
      'Schedule viewings at convenient times',
    ],
  },
  {
    title: 'Listing Requirements',
    icon: 'solar:check-circle-bold-duotone',
    points: [
      'All required fields must be filled',
      'Minimum 3 images required (maximum 9)',
      'Price must be specified (for sale listings)',
      'Description should be at least 50 characters',
      'Valid contact information is mandatory',
    ],
  },
];

// ----------------------------------------------------------------------

export default function AppAddCarGuide({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box sx={{ ...sx }} {...other}>
      <Stack spacing={4}>
        {/* Header Section */}
        <Box>
          <Stack direction="row" spacing={2} alignItems="center" mb={1}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                color: theme.palette.primary.main,
              }}
            >
              <Iconify
                icon="solar:book-bold-duotone"
                width={24}
                height={24}
                sx={{ color: theme.palette.primary.main }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                }}
              >
                How to Add Your Car - Complete Guide
              </Typography>
            </Box>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              ml: 7,
            }}
          >
            Follow these detailed steps to create an effective car listing that attracts buyers quickly
          </Typography>
        </Box>

        {/* Detailed Step-by-Step Guide */}
        {GUIDE_SECTIONS.map((section, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: theme.customShadows.z8,
            }}
          >
            <Stack spacing={3}>
              {/* Section Header */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    color: theme.palette.primary.main,
                  }}
                >
                  <Iconify
                    icon={section.icon}
                    width={28}
                    height={28}
                    sx={{ color: theme.palette.primary.main }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Chip
                    label={`Step ${index + 1}`}
                    size="small"
                    sx={{
                      mt: 0.5,
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Stack>

              <Divider />

              {/* What to Include */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Iconify icon="solar:list-check-bold-duotone" width={20} />
                  What to Include:
                </Typography>
                <List disablePadding>
                  {section.details.map((detail, idx) => {
                    const detailText = typeof detail === 'string' ? detail : detail.text;
                    const detailIcon = typeof detail === 'string' ? 'solar:check-circle-bold-duotone' : detail.icon;
                    
                    return (
                      <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Iconify
                            icon={detailIcon}
                            width={20}
                            sx={{ color: theme.palette.primary.main }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={detailText}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>

              {/* Tips */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 1.5,
                  bgcolor: alpha(theme.palette.info.main, 0.08),
                  border: `1px solid ${alpha(theme.palette.info.main, 0.16)}`,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: 'info.main',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Iconify icon="solar:lightbulb-bolt-bold-duotone" width={20} />
                  Pro Tips:
                </Typography>
                <List disablePadding>
                  {section.tips.map((tip, idx) => (
                    <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Iconify
                          icon="solar:star-bold-duotone"
                          width={16}
                          sx={{ color: theme.palette.warning.main }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={tip}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Card>
        ))}

        {/* Additional Information Cards */}
        <Box>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Iconify
              icon="solar:info-circle-bold-duotone"
              width={24}
              sx={{ color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Additional Information
            </Typography>
          </Stack>
          <Stack spacing={2}>
            {ADDITIONAL_INFO.map((info, index) => (
              <Card
                key={index}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  boxShadow: theme.customShadows.z4,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      color: theme.palette.primary.main,
                      flexShrink: 0,
                    }}
                  >
                    <Iconify
                      icon={info.icon}
                      width={20}
                      height={20}
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {info.title}
                    </Typography>
                    <List disablePadding>
                      {info.points.map((point, idx) => (
                        <ListItem key={idx} disablePadding sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <Iconify
                              icon="solar:arrow-right-bold-duotone"
                              width={14}
                              sx={{ color: 'text.disabled' }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={point}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Call to Action */}
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.primary.main, 0.04)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
          }}
        >
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Iconify
              icon="solar:rocket-2-bold-duotone"
              width={48}
              sx={{ color: theme.palette.primary.main }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 0.5,
                }}
              >
                Ready to List Your Car?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Start creating your listing now and get it in front of thousands of potential buyers
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              href={paths.dashboard.cars.my.add}
              variant="contained"
              size="large"
              startIcon={<Iconify icon="solar:add-circle-bold-duotone" />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Add Your Car Now
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

AppAddCarGuide.propTypes = {
  sx: PropTypes.object,
};

