import { ThemeProvider } from "@material-ui/styles";
import { Router } from "@reach/router";
import React from "react";
import validate from "validate.js";
import "./App.css";
import { Dashboard, UserList } from "./components";
import theme from "./theme";
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
        <Dashboard path="/" />
        <UserList path="/users" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
