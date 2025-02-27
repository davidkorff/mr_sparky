import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

// Hide AppBar on scroll down
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ 
      width: 250, 
      paddingTop: 6,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <ElectricBoltIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" color="primary" fontWeight="bold">
          Miller Lights
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              button
              component={RouterLink}
              to={item.path}
              key={item.text}
              sx={{
                my: 0.5,
                borderRadius: 2,
                color: isActive ? 'primary.main' : 'text.primary',
                bgcolor: isActive ? 'primary.light' : 'transparent',
                '&:hover': {
                  bgcolor: isActive ? 'primary.light' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: isActive ? 600 : 400,
                  textAlign: 'center',
                }} 
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" color="default" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 70 }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                background: 'linear-gradient(90deg, rgba(15,48,87,0.05) 0%, rgba(255,158,67,0.05) 100%)',
                py: 1,
                px: 2,
                borderRadius: 2
              }}>
                <ElectricBoltIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    flexGrow: 1,
                    textDecoration: 'none',
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Miller Lights
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Button
                        key={item.text}
                        color="inherit"
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          mx: 1,
                          position: 'relative',
                          color: isActive ? 'primary.main' : 'text.secondary',
                          fontWeight: isActive ? 600 : 500,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: isActive ? '80%' : '0%',
                            height: '3px',
                            bottom: '0',
                            left: '10%',
                            backgroundColor: 'primary.main',
                            transition: 'width 0.3s ease',
                            borderRadius: '3px',
                          },
                          '&:hover::after': {
                            width: '80%',
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    );
                  })}
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/contact"
                    sx={{ 
                      ml: 2,
                      px: 3,
                    }}
                  >
                    Get a Quote
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 