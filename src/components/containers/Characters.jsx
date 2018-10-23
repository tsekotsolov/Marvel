import React from 'react'
import Navigation from '../navigation/Navigation'
import Card from '../card/Card'
import withAuth from '../HOC/withAuth'
import withScroll from '../HOC/withScroll'

class Characters extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navigation />
        <section className='characters'>
          <div className='container text-center'>
            <h2>Characters</h2>
            <div className='row'>
              {this.props.state.itemsArray
                ? <div className='row justify-content-left wrapper'>
                  { this.props.state.itemsArray.map((character) => {
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
export default withScroll(withAuth(Characters))
