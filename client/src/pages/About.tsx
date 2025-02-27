import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
  useTheme,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  LocationOn,
  Phone,
  HistoryEdu,
  Groups,
  Engineering,
  Lightbulb,
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'John Miller',
    title: 'Founder & Master Electrician',
    description: "With over 25 years of experience, John founded Miller Lights to provide quality electrical services to the community.",
    image: '/images/team/john.jpg', // Add actual image path later
    social: {
      email: 'john@millerlights.com',
      linkedin: 'https://linkedin.com/in/johnmiller',
    },
  },
  {
    name: 'Sarah Johnson',
    title: 'Operations Manager',
    description: "Sarah ensures our day-to-day operations run smoothly and our clients receive the best service possible.",
    image: '/images/team/sarah.jpg', // Add actual image path later
    social: {
      email: 'sarah@millerlights.com',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
    },
  },
  {
    name: 'Mike Rodriguez',
    title: 'Lead Technician',
    description: "We're not satisfied until you're satisfied with our work.",
    image: '/images/team/mike.jpg', // Add actual image path later
    social: {
      email: 'mike@millerlights.com',
      linkedin: 'https://linkedin.com/in/mikerodriguez',
    },
  },
  {
    name: 'Lisa Chen',
    title: 'Customer Service Specialist',
    description: "Lisa is dedicated to ensuring every customer has an excellent experience with Miller Lights.",
    image: '/images/team/lisa.jpg', // Add actual image path later
    social: {
      email: 'lisa@millerlights.com',
      linkedin: 'https://linkedin.com/in/lisachen',
    },
  },
];

const values = [
  {
    title: 'Quality Service',
    description: 'We deliver exceptional workmanship and use premium materials for all our electrical services.',
    icon: <Engineering fontSize="large" />,
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in every aspect of our business.',
    icon: <HistoryEdu fontSize="large" />,
  },
  {
    title: 'Innovation',
    description: 'We stay updated with the latest electrical technologies to provide modern solutions.',
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority, and we strive to exceed your expectations.',
    icon: <Groups fontSize="large" />,
  },
];

const About = () => {
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
              About Miller Lights
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
              Your trusted local electrical service provider since 2010
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
          </Box>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={6} 
          alignItems="center" 
          sx={{ mb: 10 }}
        >
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
              variant="overline"
              color="secondary"
              fontWeight="bold"
              sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
            >
              OUR STORY
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom>
              A Journey of Excellence
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Miller Lights was founded in 2010 by John Miller, a master electrician with a passion for quality workmanship and customer satisfaction. What started as a small, family-operated business has grown into a trusted electrical service provider in the region.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Our journey has been guided by our commitment to excellence, integrity, and innovation. We take pride in our team of skilled electricians who are dedicated to providing the highest quality electrical services to our residential and commercial clients.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ color: 'text.secondary' }}
            >
              Today, Miller Lights continues to grow while maintaining the personal touch and attention to detail that has been our hallmark since day one. We look forward to serving you and exceeding your expectations.
            </Typography>
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
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: 400,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: theme.shadows[10],
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color="textSecondary">
                Add a company image here
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Our Values Section */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="overline"
              color="secondary"
              fontWeight="bold"
              sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
            >
              OUR VALUES
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom>
              What Drives Us
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our core values guide every decision we make and every service we provide
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s`,
                  animationFillMode: 'both',
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6],
                    },
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
                      width: 80,
                      height: 80,
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    fontWeight="bold"
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Team Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="overline"
              color="secondary"
              fontWeight="bold"
              sx={{ letterSpacing: 2, display: 'block', mb: 1 }}
            >
              OUR TEAM
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom>
              Meet the Experts Behind Miller Lights
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our team of skilled professionals is committed to providing you with the best electrical services
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1 + 0.3}s`,
                  animationFillMode: 'both',
                }}
              >
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      pt: '100%', // 1:1 Aspect Ratio
                      bgcolor: 'grey.200',
                      overflow: 'hidden',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'text.secondary',
                      }}
                    >
                      Team member photo
                    </Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom
                      fontWeight="bold"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="secondary"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {member.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      p: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      href={`mailto:${member.social.email}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Email />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                      sx={{ ml: 1 }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            my: 8,
            p: 5,
            bgcolor: `${theme.palette.background.paper}`,
            borderRadius: 3,
            boxShadow: `0 0 50px 0 ${theme.palette.primary.main}15`,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                fontWeight="bold"
              >
                Get In Touch With Us
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Have any questions or want to learn more about our services? We'd love to hear from you. Reach out to us using any of the contact methods below.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="secondary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                  1234 Electrical Avenue, Sparkville, TX 75001
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone color="secondary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                  (123) 456-7890
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="secondary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                  info@millerlights.com
                </Typography>
              </Box>
              
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/contact"
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'grey.200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1" color="textSecondary">
                  Add a map or contact image here
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 