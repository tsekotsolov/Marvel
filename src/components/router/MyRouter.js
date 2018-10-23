import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import LoginForm from '../forms/LoginForm.jsx'
import Characters from '../containers/Characters'
import Details from '../containers/Details'
import Favorites from '../containers/Favorites'
import requester from '../../utils/requester'

const MyRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/characters' render={() => <Characters {...props} fetchData={requester.fetchAllCharacters} />} />
        <Route exact path='/character-details' component={Details} />
        <Route exact path='/favorites' render={() => <Favorites {...props} />} />
        {/* <Route exact path='/character-details' render={() => <Details {...props} fetchData={requester.fetchDetailCharacter} />} /> */}

      </Switch>
    </BrowserRouter>
  )
}

export default MyRouter
