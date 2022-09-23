import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h2'>
              {error.statusText || error.message}
            </Typography>
            <Typography variant='h6'>
              The page you are looking for does not exist!
            </Typography>
            <Typography variant='subtitle2' style={{ marginTop: '0.3rem' }}>
              {error.statusText || error.message}
            </Typography>
            <Button sx={{ marginTop: '1rem' }} variant='contained'>
              Go to Homepage
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src='https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg'
              alt='404_not_found'
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
