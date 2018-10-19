import  React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import LoginForm from '../forms/LoginForm.jsx'
import Characters from '../Characters.jsx'


const MyRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/characters" component={Characters} />
        </Switch>
    </BrowserRouter>
  );
}

export default MyRouter