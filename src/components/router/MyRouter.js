import  React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginForm from '../forms/LoginForm'
import About from '../About';

const MyRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/callback" component={About} />
        </Switch>
    </BrowserRouter>
  );
}

export default MyRouter