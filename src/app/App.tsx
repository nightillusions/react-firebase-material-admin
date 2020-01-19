import { ThemeProvider } from "@material-ui/styles";
import { Router } from "@reach/router";
import React from "react";
import validate from "validate.js";
import "./App.css";
import { Dashboard, UserList, RouteWithLayout, Account, NotFound, ProductList } from "./components";
import theme from "./theme";
import { Main as MainLayout/*,  Minimal as MinimalLayout */ } from './layouts';
import validators from "./utils/validators";

// Chart.controllers.bar = Chart.controllers.bar.extend(chartjs);

validate.validators = {
  ...validate.validators,
  ...validators
};

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RouteWithLayout path="/" layout={MainLayout} component={Dashboard} />
        <RouteWithLayout path="/users" layout={MainLayout} component={UserList} />
        <RouteWithLayout path="/account" layout={MainLayout} component={Account} />
        <RouteWithLayout path="/products" layout={MainLayout} component={ProductList} />
        <RouteWithLayout path="/notfound" layout={MainLayout} component={NotFound} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
