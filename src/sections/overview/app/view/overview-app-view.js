'use client';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useSettingsContext } from 'src/components/settings';
import { useAuthContext } from 'src/auth/hooks';

import AppWidgetSummary from '../app-widget-summary';
import AppReportsChart from '../app-reports-chart';
import AppRecentActivity from '../app-recent-activity';
import AppRecentSales from '../app-recent-sales';
import AppBudgetReport from '../app-budget-report';
import AppWebsiteTraffic from '../app-website-traffic';
import AppWelcomeBanner from '../app-welcome-banner';
import AppSellCarSteps from '../app-sell-car-steps';
import AppAddCarGuide from '../app-add-car-guide';

// ----------------------------------------------------------------------

const RECENT_ACTIVITY = [
  { time: '32 min', description: 'New car listing added: Toyota Corolla 2023' },
  { time: '56 min', description: 'Car images uploaded for Honda Civic 2022' },
  { time: '2 hrs', description: 'Price updated for BMW 3 Series 2024' },
  { time: '1 day', description: 'Car listing approved: Mercedes-Benz C-Class 2023' },
  { time: '2 days', description: 'New customer inquiry received for Ford Mustang' },
  { time: '4 weeks', description: 'Monthly sales report generated for vehicle listings' },
];

const RECENT_SALES = [
  { id: '#2457', customer: 'Ahmed Ali', product: 'Toyota Corolla 2023', price: 2450000, status: 'Approved' },
  { id: '#2147', customer: 'Sara Khan', product: 'Honda Civic 2022', price: 1890000, status: 'Pending' },
  { id: '#2049', customer: 'Usman Butt', product: 'BMW 3 Series 2024', price: 8750000, status: 'Approved' },
  { id: '#2644', customer: 'Fatima Sheikh', product: 'Mercedes-Benz C-Class', price: 9200000, status: 'Rejected' },
  { id: '#2644', customer: 'Hassan Malik', product: 'Ford Mustang GT 2023', price: 12500000, status: 'Approved' },
];

export default function OverviewAppView() {
  const theme = useTheme();
  const settings = useSettingsContext();
  const auth = useAuthContext();
  const { user = {} } = auth?.user || {};
  const isUser = user?.role === 'user';

  // Customer Dashboard UI
  if (isUser) {
    const userName = user?.displayName || user?.name || user?.email?.split('@')[0] || 'User';

    return (
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {/* Welcome Banner */}
          <Grid xs={12}>
            <AppWelcomeBanner userName={userName} />
          </Grid>

          {/* Sell Car Steps Section */}
          <Grid xs={12}>
            <AppSellCarSteps />
          </Grid>

          {/* Detailed Add Car Guide */}
          <Grid xs={12}>
            <AppAddCarGuide />
          </Grid>
        </Grid>
      </Container>
    );
  }

  // Admin Dashboard UI (Existing)
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        {/* Top Row - KPI Cards */}
        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Add Car"
            subTitle="Information"
            imgSrc="/assets/images/home/cars.svg"
            total={145}
            percent={12}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Upload Car"
            subTitle="Images"
            imgSrc="/assets/images/home/photos.svg"
            total={3264}
            percent={8}
            isCurrency
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Enter Your"
            subTitle="Selling Price"
            imgSrc="/assets/images/home/price.svg"
            total={1244}
            percent={-12}
          />
        </Grid>

        {/* Middle Row - Charts and Activity */}
        <Grid xs={12} md={8}>
          <AppReportsChart
            title="Reports"
            subheader="Today"
            chart={{
              series: [
                {
                  name: 'Car Listings',
                  data: [10, 41, 35, 51, 49, 62, 69],
                  color: theme.palette.primary.main,
                },
                {
                  name: 'Revenue',
                  data: [8, 35, 40, 45, 44, 58, 65],
                  color: theme.palette.success.main,
                },
                {
                  name: 'Customers',
                  data: [5, 25, 30, 35, 32, 38, 42],
                  color: theme.palette.warning.main,
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppRecentActivity
            title="Recent Activity"
            subheader="Today"
            list={RECENT_ACTIVITY}
          />
        </Grid>

        {/* Bottom Row - Table and Charts */}
        <Grid xs={12} md={6} lg={5}>
          <AppRecentSales
            title="Recent Car Sales"
            subheader="Today"
            tableData={RECENT_SALES}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppBudgetReport
            title="Budget Report"
            subheader="This Month"
            chart={{
              categories: ['Car Listings', 'Marketing', 'Vehicle Management', 'Customer Support', 'Platform Maintenance', 'Administration'],
              series: [
                {
                  name: 'Allocated Budget',
                  data: [80, 75, 70, 65, 85, 75],
                },
                {
                  name: 'Actual Spending',
                  data: [90, 85, 75, 70, 80, 70],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={3}>
          <AppWebsiteTraffic
            title="Website Traffic"
            subheader="Today"
            chart={{
              series: [
                { label: 'Search Engine', value: 45, color: theme.palette.primary.main },
                { label: 'Direct Traffic', value: 25, color: theme.palette.warning.main },
                { label: 'Social Media', value: 15, color: theme.palette.text.secondary },
                { label: 'Referral Links', value: 10, color: theme.palette.info.main },
                { label: 'Email Campaigns', value: 5, color: theme.palette.success.main },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
