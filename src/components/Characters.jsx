import React from 'react'
import Auth from '../Auth/Auth'
import history from '../history'
import Navigation from './Navigation'
import requester from '../utils/requester'
import Character from './Charcter'

class Characters extends React.Component {

    state = {
      email:'',
      nickname:'',
      profilePicture:'',
      itmsPerFetch:20,
      offset:'',
      totalCharacters:0,
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
        characters:response.data.results,
        offset:response.data.offset
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
        <h2>Characters</h2>
          <div className="row">
          {this.state.characters?
          <div className='row justify-content-left'>
          { this.state.characters.map((character) => {
          return <Character key={character.id} {...character} />
          })}
          </div>
          :null}
          </div>
        </div>
      </section>
    </React.Fragment>
    )
  }
}
export default Characters
