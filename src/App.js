import React from "react";
import { Auth, notAuth } from "./routerConfig";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const { isAuth } = useSelector((state) => state.user);
 
  const RenderRouters = () =>
    (isAuth ? Auth : notAuth).map((element) => (
      <Route
        key={element.path}
        exact={true}
        component={element.component}
        path={element.path}
      />
    ));
  return (
    <Router>
      <Switch>{RenderRouters()}</Switch>
    </Router>
  );
}

export default App;
