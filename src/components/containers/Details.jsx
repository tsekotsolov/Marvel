import React, { Component } from 'react'
import requester from '../../utils/requester'
import Navigation from '../navigation/Navigation'
import Card from '../card/Card'
import withScroll from '../HOC/withScroll'

class Details extends Component {
  constructor (props) {
    super(props)

    this.state = {
      itemsPerFetch: 20,
      offset: 20,
      totalItems: 0,
      scrolling: false,
      itemsArray: [],
      id: this.props.location.search.substr(1),
      name: ''
    }
  }

  componentDidMount () {
    requester.fetchCharacterName(this.state.id).then((response) => {
      this.setState({
        name: response.data.results[0].name })
    })

    requester.fetchDetailCharacter(this.state.id, this.state.offset).then((response) => {
      this.setState({
        itemsArray: [...this.state.itemsArray, ...response.data.results]
      })
    })
  }

  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <Navigation />
        <section className='characters'>
          <div className='container text-center'>
            <h2>Details for {this.state.name}</h2>
            <div className='row'>
              {this.state.itemsArray
                ? <div className='row justify-content-left wrapper'>
                  { this.state.itemsArray.map((com) => {
                    return <Card key={com.id} {...com} />
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

export default Details
