import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Miller Lights
            </Typography>
            <Typography variant="body2">
              Your trusted electrical service provider. Available 24/7 for emergency services.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Link href="tel:+1234567890" color="inherit" underline="hover">
                (123) 456-7890
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="mailto:contact@millerlights.com" color="inherit" underline="hover">
                contact@millerlights.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Electric Ave, Cityville, ST 12345
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                aria-label="Facebook"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Miller Lights. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 