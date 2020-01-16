import { ThemeProvider } from "@material-ui/styles";
import { Router } from "@reach/router";
import React from "react";
import "./App.css";
import theme from "./theme";
import { Dashboard } from "./components";

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
