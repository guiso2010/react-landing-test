import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default App;
