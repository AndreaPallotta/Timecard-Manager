import StatusTypography from '@/components/Form/StatusTypography';
import { passwordConditions } from '@/utils/regex';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import React from 'react';

const PasswordValidator = ({ password }) => {
  return (
    <Stack p={2} m={1} boxShadow={1} spacing={1}>
      <StatusTypography
        content="At least 1 lowercase letter"
        isValid={passwordConditions.lowercase.test(password)}
      />
      <StatusTypography
        content="At least 1 uppercase letter"
        isValid={passwordConditions.uppercase.test(password)}
      />
      <StatusTypography
        content="At least 1 digit"
        isValid={passwordConditions.digit.test(password)}
      />
      <StatusTypography
        content="At least 8 characters long"
        isValid={password.trim().length >= 8}
      />
    </Stack>
  );
};

PasswordValidator.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordValidator;
