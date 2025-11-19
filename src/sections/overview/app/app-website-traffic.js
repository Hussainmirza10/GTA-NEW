import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 320;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
}));

// ----------------------------------------------------------------------

export default function AppWebsiteTraffic({ title, subheader, chart, ...other }) {
  const { series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors: series.map((i) => i.color),
    labels: series.map((i) => i.label),
    stroke: { colors: ['transparent'] },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value) => `${value}`,
        title: {
          formatter: (seriesName) => `${seriesName}: `,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (value) => `${value}`,
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `${sum}`;
              },
            },
          },
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
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width="100%"
        height={280}
      />
    </Card>
  );
}

AppWebsiteTraffic.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

