import { ThemeProvider } from "@material-ui/styles";
import { Router } from "@reach/router";
import React from "react";
import validate from "validate.js";
import "./App.css";
import { Dashboard, UserList, RouteWithLayout } from "./components";
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
        <RouteWithLayout path="/" layout={MainLayout} component={UserList} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
