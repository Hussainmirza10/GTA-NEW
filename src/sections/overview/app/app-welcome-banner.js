import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AppWelcomeBanner({ userName, sx, ...other }) {
  const theme = useTheme();
  const firstLetter = userName?.charAt(0)?.toUpperCase() || 'U';

  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 3,
        minHeight: { xs: 200, md: 240 },
        background: 'linear-gradient(135deg, rgba(123, 31, 162, 0.4) 0%, rgba(139, 69, 19, 0.3) 30%, rgba(59, 130, 246, 0.3) 60%, rgba(139, 69, 19, 0.2) 100%)',
        boxShadow: theme.customShadows.z24,
        ...sx,
      }}
      {...other}
    >
      {/* Cityscape illustration background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(123, 31, 162, 0.3) 0%, rgba(139, 69, 19, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: 'relative',
          zIndex: 2,
          p: { xs: 3, md: 4 },
          height: '100%',
        }}
      >
        <Stack spacing={1} sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Iconify
              icon="solar:hand-stars-bold-duotone"
              width={28}
              sx={{ color: 'common.white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Welcome
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {userName || 'User'}
          </Typography>
        </Stack>

        {/* User Avatar */}
        <Avatar
          sx={{
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            bgcolor: alpha(theme.palette.primary.main, 0.9),
            color: 'common.white',
            fontSize: { xs: 24, md: 28 },
            fontWeight: 700,
            boxShadow: theme.customShadows.z8,
          }}
        >
          {firstLetter}
        </Avatar>
      </Stack>
    </Card>
  );
}

AppWelcomeBanner.propTypes = {
  userName: PropTypes.string,
  sx: PropTypes.object,
};

