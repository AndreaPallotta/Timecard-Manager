import { createElement } from 'react';

export const iconToNode = (icon, color) =>
  createElement(icon, {
    ...(color && { htmlColor: color }),
  });
