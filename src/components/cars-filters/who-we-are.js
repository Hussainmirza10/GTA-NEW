import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{ 
      py: 8, 
      background: "linear-gradient(135deg, #F0FDF4 0%, #FAF5FF 50%, #F0FDF4 100%)"
    }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: 'url(/assets/WhoWeAre.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: 4,
            p: 6,
            color: '#1F2937',
            position: 'relative',
            boxShadow: "0 12px 40px rgba(147, 51, 234, 0.2)",
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -3,
              left: -3,
              right: -3,
              bottom: -3,
              background: 'linear-gradient(135deg, #10B981 0%, #9333EA 100%)',
              borderRadius: 4,
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              borderRadius: 4,
              zIndex: 1
            },
            '& > *': {
              position: 'relative',
              zIndex: 2
            }
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700, 
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: "2rem", md: "2.5rem" }
            }}
          >
            Who We Are
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3, color: '#374151' }}>
            Welcome to <strong style={{ 
              background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700
            }}>Garage Tuned Autos</strong> — your all-in-one destination for premium automotive care, performance, and passion.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#374151' }}>
            At Garage Tuned Autos, we specialize in professional car tuning, detailing, repairs, and maintenance services, helping every vehicle reach its peak performance and appearance. From engine tuning and diagnostics to ceramic coating, detailing, and custom modifications, our expert technicians bring precision, experience, and innovation to every job.
          </Typography>
          {!isMobile && (
            <>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#374151' }}>
            We're also proud to offer a wide range of high-quality automotive chemicals and care products, including engine oils, detailing supplies, and performance additives — trusted by professionals and car lovers alike for reliability and results.
          </Typography>
         
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#374151' }}>
            But that's not all — we go beyond the workshop! Explore our Car Listings section to buy or sell vehicles with confidence, and check out our Car Rental Service to experience top-tier cars for daily drives, business needs, or special occasions.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, color: '#374151' }}>
            At Garage Tuned Autos, we don't just maintain cars — we build trust, performance, and a community of passionate drivers.
          </Typography>
          </>
            )}
          <Typography 
            variant="h5" 
            sx={{ 
              background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
            Garage Tuned Autos — Tuned for Performance, Built for You.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default WhoWeAre