import { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Switch } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import LoaderElement from '../LoaderElement/LoaderElement';
// ----------------------------------- MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

const HomeView = lazy(() => import('../../views/HomeView/HomeView'));
const ContactsView = lazy(() =>
  import('../../views/ContactsView/ContactsView'),
);
const MaterialSignUpView = lazy(() =>
  import('../../views/MaterialSignUpView/MaterialSignUpView'),
);
const MaterialLoginView = lazy(() =>
  import('../../views/MaterialLoginView/MaterialLoginView'),
);

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkTheme ? 'dark' : 'light',
        },
      }),
    [darkTheme],
  );

  const handleThemeChange = () => {
    if (darkTheme) {
      setDarkTheme(false);
      return;
    }
    setDarkTheme(true);
  };

  return (
    !isFetchingCurrentUser && (
      <ThemeProvider theme={theme}>
        <Toaster position="top-center" />
        <AppBar onClick={handleThemeChange} theme={theme} />

        <Switch>
          <Suspense
            fallback={<LoaderElement type="TailSpin" height={26} width={26} />}
          >
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/signup" restricted redirectTo={'/contacts'}>
              <MaterialSignUpView />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo={'/contacts'}>
              <MaterialLoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </ThemeProvider>
    )
  );
};

export default App;
