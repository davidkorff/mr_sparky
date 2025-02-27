import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Paper,
  Chip,
} from '@mui/material';
import {
  CheckCircle,
  ElectricBolt,
  Construction,
  Security,
  EmojiObjects,
  Power,
  HomeRepairService,
  SettingsRemote,
  AttachMoney,
} from '@mui/icons-material';

const services = [
  {
    id: 1,
    icon: <ElectricBolt fontSize="large" />,
    title: 'Electrical Repairs',
    description:
      'Our experienced electricians can diagnose and repair any electrical issues in your home or business, ensuring your electrical systems are safe and functioning properly.',
    features: [
      'Circuit breaker replacement',
      'Outlet and switch repair',
      'Wiring repairs and upgrades',
      'Electrical panel services',
      'Lighting fixture repairs',
    ],
    popular: true,
  },
  {
    id: 2,
    icon: <Construction fontSize="large" />,
    title: 'Installation Services',
    description:
      'We provide professional installation services for all electrical systems and fixtures, from lighting to entire home electrical systems.',
    features: [
      'Lighting installation',
      'Ceiling fan installation',
      'Electrical outlet installation',
      'Appliance installation',
      'Electrical wiring installation',
    ],
    popular: false,
  },
  {
    id: 3,
    icon: <Security fontSize="large" />,
    title: 'Safety Inspections',
    description:
      'Regular electrical safety inspections help prevent electrical hazards and ensure your electrical systems meet current code requirements.',
    features: [
      'Complete electrical system inspections',
      'Code compliance assessment',
      'Electrical hazard identification',
      'Safety improvement recommendations',
      'Documentation and reporting',
    ],
    popular: false,
  },
  {
    id: 4,
    icon: <EmojiObjects fontSize="large" />,
    title: 'Smart Home Solutions',
    description:
      'Transform your home with modern smart home electrical solutions that enhance convenience, comfort, and energy efficiency.',
    features: [
      'Smart lighting systems',
      'Automated thermostat installation',
      'Security system integration',
      'Voice-controlled electrical systems',
      'Smart home hub setup',
    ],
    popular: true,
  },
  {
    id: 5,
    icon: <Power fontSize="large" />,
    title: 'Emergency Services',
    description:
      'Electrical emergencies can happen at any time. Our 24/7 emergency electrical services ensure prompt response to keep you safe.',
    features: [
      'Available 24 hours, 7 days a week',
      'Fast response times',
      'Experienced emergency electricians',
      'Complete emergency repairs',
      'Temporary solutions when needed',
    ],
    popular: false,
  },
  {
    id: 6,
    icon: <HomeRepairService fontSize="large" />,
    title: 'Maintenance Plans',
    description:
      'Preventative maintenance plans to keep your electrical systems in top condition and prevent costly repairs.',
    features: [
      'Regular system inspections',
      'Preventative maintenance',
      'Priority scheduling',
      'Discounted repair services',
      'Detailed maintenance reports',
    ],
    popular: false,
  },
];

const commercialServices = [
  'Commercial electrical installations',
  'Office lighting solutions',
  'Electrical system upgrades',
  'Commercial safety inspections',
  'Energy efficiency assessments',
  'Backup power systems',
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: { xs: 6, md: 8 },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm-40 40l-1 1.732-17.32-10L2 84l17.32 10zM100 89v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundPosition: 'center',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              textAlign: 'center',
              animation: 'fadeIn 1s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              fontWeight="bold"
              gutterBottom
            >
              Our Electrical Services
            </Typography>
            <Typography
              variant="h5"
              sx={{ 
                mb: 4, 
                maxWidth: 800, 
                mx: 'auto',
                fontWeight: 300, 
              }}
            >
              We provide a comprehensive range of electrical services for residential and commercial clients
            </Typography>
            <Divider
              sx={{
                width: '80px',
                mx: 'auto',
                borderColor: theme.palette.secondary.main,
                borderWidth: 3,
                mb: 4,
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
              sx={{ 
                px: 4, 
                py: 1.5,
                boxShadow: theme.shadows[4], 
              }}
            >
              Get a Free Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Services Section */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            color="secondary"
            fontWeight="bold"
            sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
          >
            RESIDENTIAL SERVICES
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom>
            Quality Electrical Services
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Our team of licensed electricians provides reliable and professional electrical services for your home.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={service.id}
              sx={{
                mb: 4,
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s`,
                animationFillMode: 'both',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[3],
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                {service.popular && (
                  <Chip
                    label="Popular"
                    color="secondary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 2,
                    }}
                  />
                )}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    bgcolor: `${theme.palette.primary.main}08`,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      borderRadius: '50%',
                      width: 56,
                      height: 56,
                      mr: 2,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" fontWeight="600">
                    {service.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Our {service.title} include:
                  </Typography>

                  <List dense disablePadding>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ py: 0.75, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle
                            fontSize="small"
                            color="secondary"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.paper',
                    borderTop: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="/contact"
                    sx={{ py: 1 }}
                  >
                    Request This Service
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Commercial Services Section */}
        <Box sx={{ mt: 10, mb: 6 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: 400,
                  boxShadow: theme.shadows[4],
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(15, 48, 87, 0.7)',
                    zIndex: 1,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    zIndex: 2,
                    textAlign: 'center',
                  }}
                >
                  Add a commercial building image here
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="overline"
                  color="secondary"
                  fontWeight="bold"
                  sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
                >
                  FOR BUSINESSES
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  Commercial Electrical Services
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Our team specializes in commercial electrical services, providing businesses with reliable, efficient, and safe electrical solutions. From new installations to maintenance and repairs, we can handle projects of any size or complexity.
                </Typography>

                <Grid container spacing={2}>
                  {commercialServices.map((service, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          bgcolor: `${theme.palette.primary.main}08`,
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: 2,
                        }}
                      >
                        <CheckCircle
                          color="secondary"
                          fontSize="small"
                          sx={{ mr: 1.5 }}
                        />
                        <Typography variant="body2">{service}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/contact"
                    size="large"
                    endIcon={<AttachMoney />}
                    sx={{ mr: 2 }}
                  >
                    Request a Quote
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="/contact"
                    size="large"
                    endIcon={<SettingsRemote />}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Satisfaction Guarantee */}
        <Box
          sx={{
            mt: 10,
            mb: 6,
            p: 5,
            bgcolor: theme.palette.background.paper,
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: `0 0 60px 0 ${theme.palette.primary.main}15`,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Our Satisfaction Guarantee
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}
          >
            At Miller Lights, we stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our services, we'll make it right at no additional cost to you.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ mt: 2 }}
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 