import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import axios from 'axios';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9-+()]*$/, 'Please enter a valid phone number')
    .min(10, 'Phone number should be at least 10 digits')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await axios.post('/api/contact', values);
        setSubmitStatus({
          open: true,
          message: 'Message sent successfully! We will contact you soon.',
          severity: 'success',
        });
        resetForm();
      } catch (error) {
        setSubmitStatus({
          open: true,
          message: 'Failed to send message. Please try again later.',
          severity: 'error',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSubmitStatus({ ...submitStatus, open: false });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Get in touch with us for all your electrical needs
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>
                Our Contact Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  <strong>Address:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Electric Ave
                  <br />
                  Cityville, ST 12345
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  <strong>Phone:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (123) 456-7890
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" gutterBottom>
                  <strong>Email:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  contact@millerlights.com
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper' }}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="message"
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LoadingButton
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={formik.isSubmitting}
                    >
                      Send Message
                    </LoadingButton>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={submitStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.severity}
          sx={{ width: '100%' }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 