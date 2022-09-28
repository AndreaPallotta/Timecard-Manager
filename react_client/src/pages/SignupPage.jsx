import CButton from '@/components/Form/Button';
import CTextField from '@/components/Form/TextField';
import PasswordValidator from '@/components/PasswordValidator';
import validations from '@/utils/regex';
import { isFormValid } from '@/utils/validation';
import { EmailTwoTone, KeyTwoTone } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useState } from 'react';

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const fieldValidations = {
    firstName: form.firstName.trim().length > 0,
    lastName: form.lastName.trim().length > 0,
    email: validations.email(form.email),
    password: validations.password(form.password),
    confirm:
      validations.password(form.confirmPassword) &&
      form.confirmPassword === form.password,
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
        value={form.firstName}
        label="First Name"
        onChange={handleFormChange}
        required
        error={!fieldValidations.firstName}
        start={{
          icon: <EmailTwoTone />,
          aria: 'signup-first-name-field',
        }}
      />

      <CTextField
        value={form.lastName}
        label="Last Name"
        onChange={handleFormChange}
        required
        error={!fieldValidations.lastName}
        start={{
          icon: <EmailTwoTone />,
          aria: 'signup-last-name-field',
        }}
      />

      <CTextField
        value={form.email}
        label="Email"
        onChange={handleFormChange}
        required
        error={!fieldValidations.email}
        start={{
          icon: <EmailTwoTone />,
          aria: 'signup-email-field',
        }}
      />

      <CTextField
        value={form.password}
        label="Password"
        onChange={handleFormChange}
        required
        error={!fieldValidations.password}
        password
        start={{
          icon: <KeyTwoTone />,
          aria: 'signup-password-field',
        }}
      />

      <CTextField
        value={form.confirmPassword}
        label="Confirm Password"
        onChange={handleFormChange}
        required
        error={!fieldValidations.confirm}
        password
        start={{
          icon: <KeyTwoTone />,
          aria: 'signup-password-field',
        }}
      />

      {form.password.trim() && !validations.password(form.password) && (
        <PasswordValidator password={form.password} />
      )}

      <CButton
        label="Sign Up"
        disabled={!isFormValid(fieldValidations)}
        onClick={console.log}
        my={0.5}
      />
    </Box>
  );
};

export default SignupPage;
