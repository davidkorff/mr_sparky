import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  Snackbar,
  Alert,
  Paper,
  Divider,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Check,
  ScheduleSend,
} from '@mui/icons-material';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialFormValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({ ...formErrors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await axios.post('/api/contact', formValues);
      setSnackbar({
        open: true,
        message: 'Your message has been sent. We will contact you soon!',
        severity: 'success',
      });
      setFormValues(initialFormValues);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'There was an error sending your message. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
              Contact Us
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
              We're here to answer your questions and provide the electrical services you need
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

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Contact Information */}
          <Grid 
            item 
            xs={12} 
            md={5}
            sx={{
              animation: 'fadeInLeft 1s ease-out',
              '@keyframes fadeInLeft': {
                from: { opacity: 0, transform: 'translateX(-20px)' },
                to: { opacity: 1, transform: 'translateX(0)' }
              }
            }}
          >
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%', 
                borderRadius: 3,
                bgcolor: theme.palette.mode === 'dark' 
                  ? theme.palette.background.paper 
                  : 'white',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box 
                sx={{ 
                  bgcolor: theme.palette.primary.main,
                  py: 4,
                  px: 3,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
                  },
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
                  We'd love to hear from you. Contact us using any of the methods below.
                </Typography>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <LocationOn fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        Our Location
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        1234 Electrical Avenue<br />
                        Sparkville, TX 75001
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <Email fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        Email Us
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        info@millerlights.com<br />
                        support@millerlights.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      <Phone fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        Call Us
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        (123) 456-7890<br />
                        Mon-Fri: 8am - 6pm, Sat: 9am - 5pm
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Emergency Services
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    For after-hours emergency electrical services, please call our 24/7 emergency line:
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="tel:+18001234567"
                    startIcon={<Phone />}
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    (800) 123-4567
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid 
            item 
            xs={12} 
            md={7}
            sx={{
              animation: 'fadeInRight 1s ease-out',
              '@keyframes fadeInRight': {
                from: { opacity: 0, transform: 'translateX(20px)' },
                to: { opacity: 1, transform: 'translateX(0)' }
              }
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                position: 'relative',
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph sx={{ mb: 4 }}>
                Fill out the form below, and we'll get back to you as soon as possible.
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      error={!!formErrors.name}
                      helperText={formErrors.name}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      error={!!formErrors.phone}
                      helperText={formErrors.phone}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formValues.message}
                      onChange={handleChange}
                      error={!!formErrors.message}
                      helperText={formErrors.message}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={isMobile}
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      sx={{ 
                        py: 1.5, 
                        px: 4,
                        borderRadius: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': loading ? {} : {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateX(-100%)',
                          animation: 'shimmer 2s infinite',
                        },
                        '@keyframes shimmer': {
                          '100%': {
                            transform: 'translateX(100%)',
                          },
                        },
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>

            {/* Business Hours */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                mt: 4,
                borderRadius: 3,
                bgcolor: theme.palette.mode === 'dark' 
                  ? `${theme.palette.primary.dark}30` 
                  : `${theme.palette.primary.light}08`,
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleSend fontSize="small" sx={{ mr: 1 }} />
                Business Hours
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary" component="div">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary" component="div">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                      <span>Emergency Service:</span>
                      <span>24/7</span>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section - Placeholder */}
        <Box
          sx={{
            mt: 8,
            height: 400,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: theme.shadows[3],
            bgcolor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Map will be displayed here - You can integrate Google Maps or another mapping service
          </Typography>
        </Box>
      </Container>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
          icon={snackbar.severity === 'success' ? <Check /> : undefined}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 