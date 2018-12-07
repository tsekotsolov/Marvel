import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "../components/forms/loginForm/LoginForm.tsx";
import Characters from "../components/containers/characters/Characters.tsx";
import Details from "../components/containers/details/Details.tsx";
import Favorites from "../components/containers/favourites/Favorites.tsx";
import NotFound from "../components/notfound/NotFound";
import Auth from "../auth/Auth";

const Router = props => {
  const Authenticate = new Auth();
  let isAuthenticated = Authenticate.isAuthenticated();
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/character-details" component={Details} />
      <Route exact path="/favorites" component={Favorites} />
      <Route render={() => <NotFound text={"page not found"} />} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/characters" component={Characters} />
      <Route render={() => <NotFound text={"page not found"} />} />
    </Switch>
  );
};

export default Router;
