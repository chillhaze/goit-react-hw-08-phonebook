import { NavLink } from 'react-router-dom';
import { LinkContainer } from './AuthNavigation.styled';

//-------------------------------------
import Button from '@mui/material/Button';

export const AuthNavigation = () => {
  return (
    <LinkContainer>
      {/* <LinkWrapper>
        <NavLink to="/register">Register</NavLink>
      </LinkWrapper> */}

      <NavLink to="/login">
        <Button size="medium" variant="outlined">
          Log in
        </Button>
      </NavLink>

      <NavLink to="/signup">
        <Button size="medium" variant="outlined" sx={{ ml: 1 }}>
          Sign Up
        </Button>
      </NavLink>
    </LinkContainer>
  );
};
