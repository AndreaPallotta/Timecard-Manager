import { closeTransition, openTransition } from '@/styles/animations';
import { drawerWidth } from '@/utils/constants';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: closeTransition(theme, ['width', 'margin']),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: openTransition(theme, ['width', 'margin']),
  }),
}));

export default AppBar;
