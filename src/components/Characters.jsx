import React from 'react'
import Auth from '../Auth/Auth'
import history from '../history'
import Navigation from './Navigation'
import requester from '../utils/requester'
import Character from './Charcter'

class Characters extends React.Component {

    state={
      email:'',
      nickname:'',
      profilePicture:'',
      characters:[]
    }
  

  componentDidMount(){
    const Authenticate = new Auth();
    Authenticate.handleAuthentication(history).then(() => {
      Authenticate.getProfile().then((profile) => {
        this.setState({
          email: profile.email, 
          profilePicture: profile.picture
        });
      })
    });

  }


  componentWillMount(){
    
    requester.fetchAllCharacters().then((response)=>
    {
      console.log(response)
      this.setState({
        characters:response.data.results
      })
    }
    )
  }

  render () {

    return (
      <React.Fragment>
        <Navigation  />      
        <section className='characters'>
        <div className='container text-center'>
          <h2  className='mb-3'>Characters</h2>
          {this.state.characters?
          <div className='row justify-content-center'>
          { this.state.characters.map((character) => {
          return <Character key={character.id} {...character} />
          })}
          </div>
          :null}
        </div>
      </section>
    </React.Fragment>
    )
  }
}

export default Characters
