import useNotification from '@/hooks/useNotification';
import { api } from '@/services/ApiHandler';
import routes from '@/services/Routes';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from './Form/Button';

const NavLogoutButton = ({ open }) => {
  const [showNotification] = useNotification();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await api.post('/auth/signout', { email: '' });
      localStorage.clear();
      navigate(routes.auth);
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{
        justifyContent: open ? 'center' : 'center',
        px: open ? 0 : 5,
        marginTop: 4,
      }}
    >
      <CButton
        onClick={handleSignOut}
        variant={open ? 'contained' : 'text'}
        label={open ? 'Log Out' : ''}
        start={<LogoutRoundedIcon />}
        style={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      />
    </ListItem>
  );
};

NavLogoutButton.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default NavLogoutButton;
