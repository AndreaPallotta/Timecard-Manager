import Notification from '@/components/Notification';
import TabPanel from '@/components/TabPanel';
import NotificationContext from '@/contexts/Notification';
import useNotification from '@/hooks/useNotification';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

const a11yProps = (index) => ({
  id: `auth-tab-${index}`,
  'aria-controls': `auth-tabpanel-${index}`,
});

const AuthPage = () => {
  const [active, setActive] = useState(0);
  const [, close, notification, setNotification] = useNotification(true);

  const handleTabChange = (_, value) => {
    setActive(value);
  };

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Timecard Manager</Typography>
        <Grid container>
          <Grid item xs={false} md={4} />
          <Grid item xs={12} md={4}>
            <Box p={2} boxShadow={2}>
              <Tabs value={active} onChange={handleTabChange} centered>
                <Tab label="Sign In" {...a11yProps(0)} />
                <Tab label="Sign Up" {...a11yProps(1)} />
              </Tabs>

              <TabPanel value={active} index={0}>
                <LoginPage />
              </TabPanel>
              <TabPanel value={active} index={1}>
                <SignupPage />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Notification
        open={notification.open}
        onClose={close}
        message={notification.message}
        severity={notification.severity}
      />
    </NotificationContext.Provider>
  );
};

export default AuthPage;
