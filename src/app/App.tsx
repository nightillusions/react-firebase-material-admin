import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import "./App.css";
import theme from "./theme";
import { Router, Link } from "@reach/router";

const App: React.FC<any> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
