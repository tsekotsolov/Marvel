import  React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import LoginForm from '../forms/LoginForm.jsx'
import Characters from '../Characters.jsx'
import Details from '../Details'


const MyRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/character-details" component={Details} />
        </Switch>
    </BrowserRouter>
  );
}

export default MyRouter