import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  ElectricBolt,
  Construction,
  Security,
  EmojiObjects,
} from '@mui/icons-material';

const services = [
  {
    icon: <ElectricBolt fontSize="large" />,
    title: 'Electrical Repairs',
    description: 'Expert electrical repair services for your home or business.',
  },
  {
    icon: <Construction fontSize="large" />,
    title: 'Installation',
    description: 'Professional installation of electrical systems and fixtures.',
  },
  {
    icon: <Security fontSize="large" />,
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety inspections and certifications.',
  },
  {
    icon: <EmojiObjects fontSize="large" />,
    title: 'Smart Solutions',
    description: 'Modern smart home electrical solutions and upgrades.',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                Your Trusted Electrical Service Provider
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Professional electrical services with a commitment to quality and safety
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                Contact Us
              </Button>
              <Button
                component={RouterLink}
                to="/services"
                variant="outlined"
                color="inherit"
                size="large"
              >
                Our Services
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add an image here later */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    align="center"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    component={RouterLink}
                    to="/services"
                    size="small"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Contact us today for a free consultation and estimate.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Contact Us Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 