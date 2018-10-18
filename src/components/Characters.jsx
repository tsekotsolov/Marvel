import React from 'react'
import Auth from '../Auth/Auth'
import history from '../history'
import Navigation from './Navigation'


let Characters = () => {

  const Authenticate = new Auth();
  Authenticate.handleAuthentication(history);
  Authenticate.getProfile()


  return (
    <section className=' container characters'>
    <Navigation />
    </section>
  )
}

export default Characters;