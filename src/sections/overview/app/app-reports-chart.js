import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppReportsChart({ title, subheader, chart, ...other }) {
  const { series, options } = chart;

  const chartOptions = useChart({
    chart: {
      id: 'reports-chart',
      toolbar: { show: false },
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppReportsChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

