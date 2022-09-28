import CButton from '@/components/Form/Button';
import CDivider from '@/components/Form/Divider';
import CTextField from '@/components/Form/TextField';
import { iconToNode } from '@/styles/transformations';
import validations from '@/utils/regex';
import { isFormValid } from '@/utils/validation';
import {
  EmailTwoTone,
  FacebookOutlined,
  GitHub,
  Google,
  KeyTwoTone,
  LinkedIn,
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
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

  const fieldValidations = {
    email: validations.email(email),
    password: validations.password(password),
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      p={3}
      m={3}
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

      <CButton
        label="Sign In"
        disabled={!isFormValid(fieldValidations)}
        onClick={console.log}
        my={0.5}
      />
      <CDivider chip content="Or continue with" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        mt={2}
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
