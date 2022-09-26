import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CTextField = (props) => {
  const {
    label,
    value,
    onChange,
    defaultValue,
    password,
    type,
    required,
    readOnly,
    error,
    start,
    end,
    ...other
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((...prevState) => !prevState);
  };

  const prevDefault = (event) => {
    event.preventDefault();
  };

  const formatAdornment = (adornment, position) => (
    <InputAdornment position={position}>
      {typeof adornment === 'string' ? (
        adornment
      ) : (
        <IconButton
          aria-label={adornment.aria}
          edge={position}
          onClick={adornment.onClick}
          onMouseDown={prevDefault}
        >
          {adornment.icon}
        </IconButton>
      )}
    </InputAdornment>
  );

  const passwordAdornment = () =>
    formatAdornment(
      {
        icon: showPassword ? <VisibilityOff /> : <Visibility />,
        onClick: handleToggleShowPassword,
        aria: 'toggle-password-field-visibility',
      },
      'end'
    );

  const isAdornmentValid = (adornment) => {
    if (typeof adornment === 'string') return adornment.trim().length > 0;

    return typeof adornment === 'object' && adornment.icon !== undefined;
  };

  return (
    <FormControl>
      <InputLabel htmlFor={`c-text-field-${label}}`}>{label}</InputLabel>
      <OutlinedInput
        defaultValue={defaultValue}
        error={error || false}
        fullWidth
        id={`c-text-field-${label}}`}
        label={label}
        margin='dense'
        name={label.toLowerCase()}
        onChange={onChange}
        readOnly={readOnly || false}
        required={required ?? false}
        value={value}
        variant='outlined'
        {...(type && { type })}
        {...(password && {
          type: 'password',
        })}
        {...(isAdornmentValid(start) && {
          startAdornment: formatAdornment(start, 'start'),
        })}
        {...(isAdornmentValid(end) && {
          startAdornment: formatAdornment(end, 'end'),
        })}
        {...(password &&
          value && {
            endAdornment: passwordAdornment(),
          })}
        {...other}
      />
    </FormControl>
  );
};

CTextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  password: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  start: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      onClick: PropTypes.func,
      aria: PropTypes.string,
    }),
  ]),
  end: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      onClick: PropTypes.func,
      aria: PropTypes.string,
    }),
  ]),
};

export default CTextField;
