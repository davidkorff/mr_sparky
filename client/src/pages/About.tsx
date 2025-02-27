import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  Security as SecurityIcon,
  ThumbUp as ThumbUpIcon,
} from '@mui/icons-material';

const values = [
  {
    icon: <CheckCircleIcon color="primary" />,
    title: 'Quality Service',
    description: 'We deliver the highest quality electrical services with attention to detail.',
  },
  {
    icon: <TimerIcon color="primary" />,
    title: '24/7 Availability',
    description: 'Emergency electrical services available around the clock.',
  },
  {
    icon: <SecurityIcon color="primary" />,
    title: 'Safety First',
    description: 'Your safety is our top priority. All work meets or exceeds safety standards.',
  },
  {
    icon: <ThumbUpIcon color="primary" />,
    title: 'Customer Satisfaction',
    description: "We're not satisfied until you're satisfied with our work.",
  },
];

const team = [
  {
    name: 'John Miller',
    role: 'Founder & Master Electrician',
    image: '/images/john.jpg', // Add actual image path later
    description: '25+ years of experience in electrical services.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Technician',
    image: '/images/sarah.jpg', // Add actual image path later
    description: 'Certified electrician with expertise in smart home solutions.',
  },
  {
    name: 'Mike Thompson',
    role: 'Service Manager',
    image: '/images/mike.jpg', // Add actual image path later
    description: 'Ensures top-quality service delivery and customer satisfaction.',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Miller Lights
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your trusted electrical service provider since 1998
          </Typography>
        </Box>

        {/* Company Story */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Miller Lights was founded in 1998 with a simple mission: to provide reliable,
              high-quality electrical services to our community. What started as a small,
              family-owned business has grown into one of the most trusted electrical service
              providers in the region.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team of certified electricians brings decades of combined experience to every
              project. We stay up-to-date with the latest electrical technologies and safety
              standards to ensure we provide the best possible service to our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Add company image here later */}
            <Box
              sx={{
                height: 300,
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Company Image
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Team */}
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          bgcolor: 'primary.main',
                        }}
                      >
                        {member.name.charAt(0)}
                      </Avatar>
                    </Box>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      align="center"
                      gutterBottom
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 