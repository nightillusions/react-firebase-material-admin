import { ThemeProvider } from '@material-ui/styles';
import { Redirect, Router } from '@reach/router';
import React, { ReactNode } from 'react';
import { createContainer } from 'unstated-next';
import validate from 'validate.js';
import validators from '../utils/validators';
import './App.css';
import { Account, Dashboard, Icons, NotFound, ProductList, RouteWithLayout, Settings, SignIn, SignOut, SignUp, Typography, UserList } from './components';
import useAuth from './hooks/useAuth';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import theme from './theme';
import { PATHS } from './paths';

export const Auth = createContainer(useAuth);

// Chart.controllers.bar = Chart.controllers.bar.extend(chartjs);

validate.validators = {
  ...validate.validators,
  ...validators
};

const RouterComponent = ({ children }:React.PropsWithChildren<ReactNode> ) => {
  return <>{children}</>;
}

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Auth.Provider>
        <Router primary={false} component={RouterComponent}>
          <Redirect from={PATHS.ROOT} to={PATHS.DASHBOARD} noThrow />
          <RouteWithLayout
            path={PATHS.DASHBOARD}
            layout={MainLayout}
            component={Dashboard}
          />
          <RouteWithLayout
            path={PATHS.USERS}
            layout={MainLayout}
            component={UserList}
          />
          <RouteWithLayout
            path={PATHS.PRODUCTS}
            layout={MainLayout}
            component={ProductList}
          />
          <RouteWithLayout
            path={PATHS.TYPOGRAPHY}
            layout={MainLayout}
            component={Typography}
          />
          <RouteWithLayout
            path={PATHS.ICONS}
            layout={MainLayout}
            component={Icons}
          />
          <RouteWithLayout
            path={PATHS.ACCOUNT}
            layout={MainLayout}
            component={Account}
          />
          <RouteWithLayout
            path={PATHS.SETTINGS}
            layout={MainLayout}
            component={Settings}
          />
          <RouteWithLayout
            path={PATHS.SIGN_UP}
            layout={MinimalLayout}
            component={SignUp}
            publicPath
          />
          <RouteWithLayout
            path={PATHS.SIGN_IN}
            layout={MinimalLayout}
            component={SignIn}
            publicPath
          />
          <RouteWithLayout
            path={PATHS.NOT_FOUND}
            layout={MinimalLayout}
            component={NotFound}
            publicPath
          />
          <RouteWithLayout
            path={PATHS.SIGN_OUT}
            layout={MinimalLayout}
            component={SignOut}
            publicPath
          />
        </Router>
      </Auth.Provider>
    </ThemeProvider>
  );
};

export default App;
