import {
  Switch,
  // Route
} from 'react-router-dom';
import { useState, Suspense, lazy } from 'react';
import { AppBar } from '../AppBar/AppBar';

import LoaderElement from '../LoaderElement/LoaderElement';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

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
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const theme = React.useMemo(
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
    <>
      <ThemeProvider theme={theme}>
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
            {/* Маршруты с обычным Route, без редиректа */}
            {/* <Route exact path="/" component={HomeView} /> */}
            {/* <Route path="/signup" component={MaterialSignUpView} /> */}
            {/* <Route path="/login" component={MaterialLoginView} /> */}
            {/* <Route exact path="/contacts" component={ContactsView} /> */}
            {/* Маршруты на компоненты без MaterialUI */}
            {/* <Route path="/register" component={RegisterView} /> */}
            {/* <Route path="/login" component={LoginView} /> */}
          </Suspense>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
