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
  useTheme,
  Paper,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  ElectricBolt,
  Construction,
  Security,
  EmojiObjects,
  CheckCircle,
  LocalPhone,
  ArrowForward,
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

const benefits = [
  'Licensed & Insured Professionals',
  '24/7 Emergency Service',
  'Upfront, Flat-Rate Pricing',
  'Satisfaction Guaranteed',
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, #0f3057 0%, #00587a 100%)',
          color: 'white',
          overflow: 'hidden',
          py: { xs: 10, md: 15 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundPosition: 'center',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                animation: 'fadeInLeft 1s ease-out',
                '@keyframes fadeInLeft': {
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' }
                }
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                Your Trusted Electrical Service Provider
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.9, 
                  fontWeight: 300,
                  lineHeight: 1.5 
                }}
              >
                Professional electrical services with a commitment to quality and safety
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Contact Us
                </Button>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{ 
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{ 
                animation: 'fadeInRight 1s ease-out',
                '@keyframes fadeInRight': {
                  from: { opacity: 0, transform: 'translateX(20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' }
                },
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  height: 350,
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                }}
              >
                <ElectricBolt 
                  sx={{ 
                    fontSize: 100, 
                    color: theme.palette.secondary.main,
                    opacity: 0.8 
                  }} 
                />
                <Typography
                  variant="body1"
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Add an image of your team or work here
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            color="secondary"
            fontWeight="bold"
            sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            color="textPrimary"
            gutterBottom
          >
            Our Services
          </Typography>
          <Divider 
            sx={{ 
              width: '80px', 
              mx: 'auto', 
              mt: 2, 
              mb: 4, 
              borderColor: theme.palette.primary.main,
              borderWidth: 2
            }} 
          />
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            We provide a wide range of electrical services for residential and commercial clients.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                '&:nth-of-type(1)': { 
                  animation: 'fadeInUp 0.6s ease-out',
                },
                '&:nth-of-type(2)': { 
                  animation: 'fadeInUp 0.6s ease-out 0.2s',
                  animationFillMode: 'both'
                },
                '&:nth-of-type(3)': { 
                  animation: 'fadeInUp 0.6s ease-out 0.4s',
                  animationFillMode: 'both'
                },
                '&:nth-of-type(4)': { 
                  animation: 'fadeInUp 0.6s ease-out 0.6s',
                  animationFillMode: 'both'
                },
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' }
                }
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Avatar
                    sx={{
                      mx: 'auto',
                      mb: 3,
                      bgcolor: `${theme.palette.primary.light}15`,
                      color: theme.palette.primary.main,
                      width: 70,
                      height: 70,
                    }}
                  >
                    {service.icon}
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    fontWeight="600"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <Button
                    component={RouterLink}
                    to="/services"
                    size="small"
                    color="primary"
                    endIcon={<ArrowForward />}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: 8,
          background: 'linear-gradient(90deg, rgba(15,48,87,0.02) 0%, rgba(255,158,67,0.05) 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 400,
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: 'grey.100',
                  boxShadow: theme.shadows[10],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1" color="textSecondary">
                  Add another image here
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                color="secondary"
                fontWeight="bold"
                sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
              >
                WHY CHOOSE US
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom>
                Reliable Electrical Services You Can Trust
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                At Miller Lights, we're committed to providing high-quality electrical services with a 
                focus on safety, reliability, and customer satisfaction. Our team of experienced electricians 
                is ready to help with all your electrical needs.
              </Typography>
              
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
              
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/about"
                sx={{ mt: 2 }}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 3, sm: .5 },
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                mb: 4, 
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Contact us today for a free consultation and estimate on your electrical project.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ px: 4, py: 1.5 }}
                >
                  Contact Us Now
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  href="tel:+1234567890"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={<LocalPhone />}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Call Us
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 