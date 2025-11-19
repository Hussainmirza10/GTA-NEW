import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fNumber, fPercent, fCurrency } from 'src/utils/format-number';

import Chart from 'src/components/chart';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ 
  title, 
  subTitle, 
  imgSrc, 
  total, 
  percent, 
  isCurrency = false,
  chart, 
  sx, 
  ...other 
}) {
  const theme = useTheme();

  const isPositive = percent >= 0;

  const renderIcon = (
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        color: theme.palette.primary.main,
        mb: 2,
      }}
    >
      {imgSrc ? (
        <Image src={imgSrc} sx={{ width: 48, height: 48 }} />
      ) : (
        <Iconify icon="solar:car-bold-duotone" width={32} height={32} />
      )}
    </Box>
  );

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Stack spacing={2}>
        {renderIcon}
        
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            {subTitle}
          </Typography>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {isCurrency ? fCurrency(total) : fNumber(total)}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Iconify
              icon={isPositive ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
              sx={{
                width: 20,
                height: 20,
                color: isPositive ? 'success.main' : 'error.main',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: isPositive ? 'success.main' : 'error.main',
                fontWeight: 600,
              }}
            >
              {fPercent(Math.abs(percent))} {isPositive ? 'increase' : 'decrease'}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
  isCurrency: PropTypes.bool,
  chart: PropTypes.object,
  sx: PropTypes.object,
};
