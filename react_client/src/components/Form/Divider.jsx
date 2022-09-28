import { Divider, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CDivider = (props) => {
  const { content, chip, align, orientation, noFlex } = props;

  return (
    <Divider
      textAlign={align || 'center'}
      orientation={orientation || 'horizontal'}
      flexItem={noFlex === true ? false : true}
    >
      {chip ? (
        <Chip label={content} />
      ) : (
        <Typography variant="body2">{content}</Typography>
      )}
    </Divider>
  );
};

CDivider.propTypes = {
  content: PropTypes.string.isRequired,
  chip: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  orientation: PropTypes.string,
  noFlex: PropTypes.bool,
};

export default CDivider;
