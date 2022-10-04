import routes from '@/services/Routes';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { List } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

const items = [
  {
    path: routes.home,
    icon: <HomeRoundedIcon />,
    label: 'Home',
  },
  {
    path: routes.manage,
    icon: <GridViewRoundedIcon />,
    label: 'Manage',
  },
];

const NavRoutesList = ({ open }) => {
  const location = useLocation();

  return (
    <List>
      {items.map(({ path, icon, label }, index) => (
        <NavItem
          key={index}
          open={open}
          path={path}
          icon={icon}
          label={label}
          isActive={path === location.pathname}
        />
      ))}
    </List>
  );
};

NavRoutesList.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default NavRoutesList;
