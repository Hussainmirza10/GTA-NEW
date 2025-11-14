'use client'
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

export default function MainLayout({ children, hideFooter = false }) {
  const pathname = usePathname();

  const homePage = pathname === '/';

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: 1,
      backgroundColor: '#F8FAFB',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <Header />

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#F8FAFB',
          ...(!homePage && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

     {
      !hideFooter && (
        <Footer />
      )
     }
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
