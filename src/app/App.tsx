import { ThemeProvider } from '@material-ui/styles';
import { Router, Redirect } from '@reach/router';
import React from 'react';
import validate from 'validate.js';
import './App.css';
import {
  Dashboard,
  UserList,
  RouteWithLayout,
  Account,
  NotFound,
  ProductList,
  Typography,
  Icons,
  Settings,
  SignUp,
  SignIn
} from './components';
import theme from './theme';
import { Main as MainLayout /*,  Minimal as MinimalLayout */ } from './layouts';
import validators from '../utils/validators';

// Chart.controllers.bar = Chart.controllers.bar.extend(chartjs);

validate.validators = {
  ...validate.validators,
  ...validators
};

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Redirect from="/" to="/dashboard" />
        <RouteWithLayout
          path="/dashboard"
          layout={MainLayout}
          component={Dashboard}
        />
        <RouteWithLayout
          path="/users"
          layout={MainLayout}
          component={UserList}
        />
        <RouteWithLayout
          path="/products"
          layout={MainLayout}
          component={ProductList}
        />
        <RouteWithLayout
          path="/typography"
          layout={MainLayout}
          component={Typography}
        />
        <RouteWithLayout path="/icons" layout={MainLayout} component={Icons} />
        <RouteWithLayout
          path="/account"
          layout={MainLayout}
          component={Account}
        />
        <RouteWithLayout
          path="/settings"
          layout={MainLayout}
          component={Settings}
        />
        <RouteWithLayout
          path="/sign-up"
          layout={MainLayout}
          component={SignUp}
        />
        <RouteWithLayout
          path="/sign-in"
          layout={MainLayout}
          component={SignIn}
        />
        <RouteWithLayout
          path="/sign-in"
          layout={MainLayout}
          component={SignIn}
        />
        <RouteWithLayout
          path="/notfound"
          layout={MainLayout}
          component={NotFound}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
