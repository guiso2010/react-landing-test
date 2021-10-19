import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
