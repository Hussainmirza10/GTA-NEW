import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function AppRecentActivity({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={2} sx={{ p: 3 }}>
        {list.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                mt: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.8),
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.time}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}

AppRecentActivity.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

