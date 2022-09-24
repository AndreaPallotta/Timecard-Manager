import { iconToNode } from '@/styles/tranformations';
import {
  FacebookOutlined,
  GitHub,
  Google,
  LinkedIn,
} from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';

const federatedOptions = [
  {
    icon: FacebookOutlined,
    color: '#3b5999',
  },
  {
    icon: Google,
    color: 'red',
  },
  {
    icon: GitHub,
    color: '#131418',
  },
  {
    icon: LinkedIn,
    color: '#0077B5',
  },
];

const LoginPage = () => {
  return (
    <Box
      p={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField sx={{ width: '100%' }}>Email</TextField>
      <TextField>Password</TextField>

      <Button>Sign In</Button>

      <Typography>Or continue with</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {federatedOptions.map(({ icon, color }, index) => (
          <IconButton
            key={index}
            aria-label={`federated-auth-${index}`}
            size='medium'
          >
            {iconToNode(icon, color)}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default LoginPage;
