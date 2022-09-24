import { closeTransition, openTransition } from '@/styles/animations';
import { drawerWidth } from '@/utils/constants';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

const handleOpen = (theme) => ({
  width: drawerWidth,
  transition: openTransition(theme, 'width'),
  overflowX: 'hidden',
});

const handleClose = (theme) => ({
  transition: closeTransition(theme, 'width'),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...handleOpen(theme),
    '& .MuiDrawer-paper': handleOpen(theme),
  }),
  ...(!open && {
    ...handleClose(theme),
    '& .MuiDrawer-paper': handleClose(theme),
  }),
}));

export default Drawer;
