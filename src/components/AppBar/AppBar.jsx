import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { Navigation } from '../Navigation/Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from '../AppBar/AppBar.styled';
// ----------------------------------- MUI
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const AppBar = ({ onClick, theme }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <CssBaseline>
      <Header>
        <Navigation />
        <IconButton sx={{ ml: 1 }} onClick={onClick}>
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        {!isLoggedIn ? <AuthNavigation /> : <UserMenu />}
      </Header>
    </CssBaseline>
  );
};
