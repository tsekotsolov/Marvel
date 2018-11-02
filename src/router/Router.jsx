import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "../components/forms/loginForm/LoginForm";
import Characters from "../components/containers/Characters";
import Details from "../components/containers/Details";
import Favorites from "../components/containers/Favorites";
import NotFound from "../components/notfound/NotFound";
import Auth from "../auth/Auth";

const Router = props => {
  const Authenticate = new Auth();
  let isAuthenticated = Authenticate.isAuthenticated();
  return isAuthenticated ? (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/character-details" component={Details} />
        <Route exact path="/favorites" component={Favorites} />
        <Route render={() => <NotFound text={"page not found"} />} />
      </Switch>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/characters" component={Characters} />
        <Route render={() => <NotFound text={"page not found"} />} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
