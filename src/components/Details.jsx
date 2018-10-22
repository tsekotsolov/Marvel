import React, { Component } from 'react'
import requester from '../utils/requester'
import Navigation from './Navigation'
import Card from './Card'

 class Details extends Component {

    constructor (props) {
        super(props)

        this.state={
            offset:20,
            commics:[], 
            id:this.props.location.search.substr(1),
            name:''
        }
      }

      componentDidMount(){

        requester.fetchCharacterName(this.state.id).then((response)=>{
            this.setState({
                name:response.data.results[0].name})
          })

          requester.fetchDetailCharacter(this.state.id,this.state.offset).then((response)=>{
            this.setState({
                commics:[...this.state.commics,...response.data.results],
              })
        })
      }


  render() {
      return (
        <React.Fragment>
          <Navigation  />      
          <section className='characters'>
          <div className='container text-center'>
          <h2>Details for {this.state.name}</h2>
            <div className="row">
            {this.state.commics?
            <div className='row justify-content-left wrapper'>
            { this.state.commics.map((com) => {
            return <Card key={com.id} {...com} />
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

export default Details

