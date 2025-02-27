import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ElectricBolt,
  Construction,
  Security,
  EmojiObjects,
  Check,
} from '@mui/icons-material';

const services = [
  {
    title: 'Electrical Repairs',
    icon: <ElectricBolt sx={{ fontSize: 40 }} />,
    description: 'Expert electrical repair services for residential and commercial properties.',
    image: '/images/electrical-repair.jpg', // Add actual image path later
    features: [
      'Emergency repair services available 24/7',
      'Circuit breaker repairs and replacements',
      'Outlet and switch repairs',
      'Wiring repairs and upgrades',
      'Electrical panel services',
    ],
  },
  {
    title: 'Installation Services',
    icon: <Construction sx={{ fontSize: 40 }} />,
    description: 'Professional installation of electrical systems and fixtures.',
    image: '/images/installation.jpg', // Add actual image path later
    features: [
      'Lighting installation and upgrades',
      'Ceiling fan installation',
      'Generator installation',
      'EV charging station installation',
      'Smart home device installation',
    ],
  },
  {
    title: 'Safety Inspections',
    icon: <Security sx={{ fontSize: 40 }} />,
    description: 'Comprehensive electrical safety inspections and certifications.',
    image: '/images/safety-inspection.jpg', // Add actual image path later
    features: [
      'Complete electrical system inspections',
      'Code compliance checks',
      'Safety certifications',
      'Insurance inspection reports',
      'Preventive maintenance inspections',
    ],
  },
  {
    title: 'Smart Solutions',
    icon: <EmojiObjects sx={{ fontSize: 40 }} />,
    description: 'Modern smart home electrical solutions and upgrades.',
    image: '/images/smart-solutions.jpg', // Add actual image path later
    features: [
      'Smart lighting systems',
      'Home automation integration',
      'Energy monitoring systems',
      'Smart thermostat installation',
      'Voice-controlled electrical systems',
    ],
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Professional electrical services with a commitment to quality and safety
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  mb: 4,
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    minHeight: { xs: 200, md: 300 },
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {service.icon}
                </CardMedia>
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    paragraph
                  >
                    {service.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex}>
                        <ListItemIcon>
                          <Check color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services; 