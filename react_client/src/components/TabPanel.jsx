import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const TabPanel = (props) => {
  const { children, value, index, panelName, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`${panelName ?? 'base'}-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  panelName: PropTypes.string,
};

export default TabPanel;
