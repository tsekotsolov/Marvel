import React, { Component } from 'react'
import requester from '../../utils/requester'
import Navigation from '../navigation/Navigation'
import Card from '../card/Card'


class Details extends Component {
  constructor (props) {
    super(props)

    this.state = {
      itemsPerFetch: 20,
      offset: 0,
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
        itemsArray:[...this.state.itemsArray,...response.data.results],
        offset:response.data.offset,
        totalItems:response.data.total,
        scrolling:false
      })
    })

    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }

  handleScroll = () => {
    const {totalItems,itemsArray, scrolling} = this.state
    if(scrolling || itemsArray.length >= totalItems)  return
    const lastElementRendered = document.querySelector('div.wrapper > div:last-child')
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
      offset: prevState.offset+prevState.itemsPerFetch,
      scrolling:true
    }),()=>{
      requester.fetchDetailCharacter(this.state.id,this.state.offset).then((response)=>
    {
      this.setState({
        itemsArray:[...this.state.itemsArray,...response.data.results],
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
