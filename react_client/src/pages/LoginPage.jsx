import CDivider from '@/components/Form/Divider';
import CTextField from '@/components/Form/TextField';
import { iconToNode } from '@/styles/tranformations';
import validations from '@/utils/regex';
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      p={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CTextField
        value={email}
        label="Email"
        onChange={handleEmailChange}
        required
        error={!validations.email(email)}
        type="email"
        start={{
          icon: <EmailTwoTone />,
          aria: 'login-email-field',
        }}
      />

      <CTextField
        value={password}
        label="Password"
        onChange={handlePasswordChange}
        required
        error={!validations.password(password)}
        password
        start={{
          icon: <KeyTwoTone />,
          aria: 'login-password-field',
        }}
      />

      <Button>Sign In</Button>

      <CDivider chip content="Or continue with" />

      {/* <Typography>Or continue with</Typography> */}
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
            size="medium"
          >
            {iconToNode(icon, color)}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default LoginPage;
