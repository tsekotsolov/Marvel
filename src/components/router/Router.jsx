import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginForm from '../forms/loginForm/LoginForm.jsx'
import Characters from '../containers/Characters'
import Details from '../containers/Details'
import Favorites from '../containers/Favorites'
import requester from '../../utils/requester'

const Router = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/characters' render={() => <Characters {...props} fetchData={requester.fetchAllCharacters} />} />
      <Route exact path='/character-details' component={Details} />
      <Route exact path='/favorites' render={() => <Favorites {...props} />} />
    </Switch>
  )
}

export default Router
