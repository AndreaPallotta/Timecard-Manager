import CTextField from '@/components/Form/TextField';
import { iconToNode } from '@/styles/tranformations';
import {
  EmailTwoTone,
  FacebookOutlined,
  GitHub,
  Google,
  KeyTwoTone,
  LinkedIn,
} from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

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
      {/* <TextField sx={{ width: '100%' }}>Email</TextField> */}
      <CTextField
        value={email}
        label='Email Address'
        onChange={handleEmailChange}
        required
        type='email'
        error
        start={{
          icon: <EmailTwoTone />,
          aria: 'login-email-field',
        }}
        password
      />

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
