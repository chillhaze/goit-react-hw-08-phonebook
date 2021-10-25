import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...privateRouteProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...privateRouteProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
