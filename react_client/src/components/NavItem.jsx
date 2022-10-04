import routes from '@/services/Routes';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ open, icon, label, path, isActive }) => {
  const navigate = useNavigate();

  return (
    <ListItem
      disablePadding
      sx={{ display: 'block', px: 2, cornerRadius: 25 }}
      onClick={() => navigate(path)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            ...(isActive && { color: 'red' }),
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            opacity: open ? 1 : 0,
            ...(isActive && { color: 'red' }),
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

NavItem.propTypes = {
  open: PropTypes.bool.isRequired,
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.oneOf(Object.values(routes)),
  isActive: PropTypes.bool,
};

export default NavItem;
