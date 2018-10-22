import React from 'react'
import Auth from '../Auth/Auth'
import history from '../history'
import Navigation from './Navigation'
import requester from '../utils/requester'
import Character from './Charcter'

class Characters extends React.Component {

    state = {
      
      itmsPerFetch:20,
      offset:0,
      totalCharacters:0,
      scrolling:false,
      characters:[]
    }
  

  componentDidMount(){
    const Authenticate = new Auth();
    Authenticate.handleAuthentication(history).then(() => {
      Authenticate.getProfile().then((profile) => {
        
        this.setState({
          email: profile.email, 
          profilePicture: profile.picture
        })
      })
    })

    window.addEventListener('scroll',()=>{
      this.handleScroll()
    })
  }

  componentWillMount(){
    requester.fetchAllCharacters(this.state.offset).then((response)=>
    {
      this.setState({
        characters:[...this.state.characters,...response.data.results],
        offset:response.data.offset,
        totalCharacters:response.data.total,
        scrolling:false
      })
    }
    )
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',()=>{
      this.handleScroll()
    })
}

  handleScroll=()=>{
    
    const {totalCharacters,characters, scrolling} = this.state
    if(scrolling || characters.length >= totalCharacters)  return
    const lastElementRendered = document.querySelector('div.wrapper > a:last-child')
    if(lastElementRendered){
      const lastElementRenderedOffset = lastElementRendered.offsetTop + lastElementRendered.clientHeight    
      const pageOffset = window.pageYOffset + window.innerHeight
      const bottomOffset = 25
      if(pageOffset>lastElementRenderedOffset-bottomOffset) {
        this.loadMore()
      }
    }
  }

  loadMore = ()=>{
    this.setState(prevState=>({
      offset: prevState.offset+prevState.itmsPerFetch,
      scrolling:true
    }),()=>{
      requester.fetchAllCharacters(this.state.offset).then((response)=>
    {
      this.setState({
        characters:[...this.state.characters,...response.data.results],
        offset:response.data.offset,
        scrolling:false
      })
    }
    )
    })
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
          <div className='row justify-content-left wrapper'>
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
