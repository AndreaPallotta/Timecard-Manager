import AppBar from '@/components/AppBar';
import Drawer from '@/components/Drawer';
import DrawerHeader from '@/components/DrawerHeader';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavLogoutButton from './NavLogoutButton';
import NavRoutesList from './NavRoutesList';

const NavDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(true);
  };

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={0}
        open={open}
        sx={{ backgroundColor: 'white' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenNav}
            edge="start"
            sx={{
              marginRight: 5,
              color: 'black',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleCloseNav}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NavRoutesList open={open} />
        <Divider />
        <NavLogoutButton open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, height: '100vh' }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default NavDrawer;
