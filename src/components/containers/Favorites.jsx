import React from 'react'
import Navigation from '../navigation/Navigation'
import Card from '../card/Card'
import requester from '../../utils/requester'

class Favorites extends React.Component {

    state = { 
        itemsArray:[]
    }

    componentDidMount(){
        let favArray=this.props.appState.favArray
        let itemsArray=[]

        for (const characterId of favArray) {   
            requester.fetchCharacterName(characterId).then((response)=>{
                itemsArray.push(response.data.results[0])
                this.setState({
                    itemsArray
                })
            })
        }
    }
  render () {
      
    return (
      <React.Fragment>
        <Navigation />
        <section className='characters'>
          <div className='container text-center'>
            <h2>Favorites</h2>
            <div className='row'>
              {this.state.itemsArray
                ? <div className='row justify-content-left wrapper'>
                  { this.state.itemsArray.map((character) => {
                    return <Card key={character.id} {...character} manageFavArray={this.props.manageFavArray} appState={this.props.appState} />
                  })}
                </div>
                : null}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
export default Favorites