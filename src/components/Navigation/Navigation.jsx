import { NavLink } from 'react-router-dom';
import { LinkContainer } from './Navigation.styled';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { FaLock } from 'react-icons/fa';
//-------------------------------------
import Button from '@mui/material/Button';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <LinkContainer>
      <NavLink exact to="/">
        <Button variant="outlined" sx={{ mr: 1 }}>
          Home
        </Button>
      </NavLink>

      {isLoggedIn ? (
        <NavLink exact to="/contacts">
          <Button size="medium" variant="outlined">
            Contacts
          </Button>
        </NavLink>
      ) : (
        <NavLink exact to="/contacts">
          <Button
          // variant="outlined"
          // disabled
          >
            Contacts
            <FaLock style={{ marginLeft: 5 }} />
          </Button>
        </NavLink>
      )}
    </LinkContainer>
  );
};
