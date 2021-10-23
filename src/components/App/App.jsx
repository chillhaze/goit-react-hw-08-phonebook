import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { HomeView } from '../../views/HomeView/HomeView';
// import { RegisterView } from '../../views/RegisterView/RegisterView';
// import { LoginView } from '../../views/LoginView/LoginView';
import { MaterialLoginView } from '../../views/MaterialLoginView/MaterialLoginView';
import { ContactsView } from '../../views/ContactsView/ContactsView';
import { MaterialSignUpView } from '../../views/MaterialSignUpView/MaterialSignUpView';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

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
          <Route exact path="/" component={HomeView} />
          {/* <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} /> */}
          <Route exact path="/contacts" component={ContactsView} />
          <Route path="/signup" component={MaterialSignUpView} />
          <Route path="/login" component={MaterialLoginView} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
