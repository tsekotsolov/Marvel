import React from 'react'
import Navigation from '../navigation/Navigation'
import requester from '../../utils/requester'
import Card from '../card/Card'
import withAuth from '../HOC/withAuth'
import withScroll from '../HOC/withScroll'

class Characters extends React.Component {
  // state = {
  //   itemsPerFetch:20,
  //   offset:0,
  //   totalItems:0,
  //   scrolling:false,
  //   itemsArray:[],
  // }

  //   componentDidMount(){

  //     window.addEventListener('scroll',this.handleScroll,true)

  //     requester.fetchAllCharacters(this.state.offset).then((response)=>
  //     {
  //       this.setState({
  //         itemsArray:[...this.state.itemsArray,...response.data.results],
  //         offset:response.data.offset,
  //         totalItems:response.data.total,
  //         scrolling:false
  //       })
  //     }
  //     )
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener('scroll',this.handleScroll,true)
  // }

  //   handleScroll=()=>{

  //     const {totalItems,itemsArray, scrolling} = this.state
  //     if(scrolling || itemsArray.length >= totalItems)  return
  //     const lastElementRendered = document.querySelector('div.wrapper > div:last-child')
  //     if(lastElementRendered){
  //       const lastElementRenderedOffset = lastElementRendered.offsetTop + lastElementRendered.clientHeight
  //       const pageOffset = window.pageYOffset + window.innerHeight
  //       const bottomOffset = 25
  //       if(pageOffset>lastElementRenderedOffset-bottomOffset) {
  //         this.loadMore()
  //       }
  //     }
  //   }

  //   loadMore = ()=>{
  //     this.setState(prevState=>({
  //       offset: prevState.offset+prevState.itemsPerFetch,
  //       scrolling:true
  //     }),()=>{
  //       requester.fetchAllCharacters(this.state.offset).then((response)=>
  //     {
  //       this.setState({
  //         itemsArray:[...this.state.itemsArray,...response.data.results],
  //         offset:response.data.offset,
  //         scrolling:false
  //       })
  //     }
  //     )
  //     })
  //   }

  render () {
    console.log(this.props)
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
