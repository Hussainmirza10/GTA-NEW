import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
}));

// ----------------------------------------------------------------------

export default function AppBudgetReport({ title, subheader, chart, ...other }) {
  const theme = useTheme();

  const { series, categories, options } = chart;

  const chartOptions = useChart({
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: categories.map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <StyledChart
        dir="ltr"
        type="radar"
        series={series}
        options={chartOptions}
        width="100%"
        height={340}
      />
    </Card>
  );
}

AppBudgetReport.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

