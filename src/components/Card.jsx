import React from 'react'
import {Link} from 'react-router-dom'

class Card extends React.Component{

  toggleFavourites=()=>{  
    
    let action;
    if(this.props.appState.favArray.includes(this.props.id)){
      action='remove'
    }else{
      action='add'
    }
    this.props.manageFavArray(this.props.id,action)
  }

  render(){

    return (
      <React.Fragment>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='card'>
            <div className='card-body'>
            {this.props.name?<p className='card-text'>{`${this.props.name}`}</p>:<p className='card-text'>{`${this.props.title}`}</p>}
            </div>
            <img className='card-img-top' src={`${this.props.thumbnail.path}/portrait_fantastic.${this.props.thumbnail.extension}`} alt='Card cap' />
            {this.props.name?
              <div className='link-wrapper'>
              <Link to={`/character-details?${this.props.id}`}>Details</Link>
              <Link to='#' onClick={this.toggleFavourites}>{
                this.props.appState.favArray.includes(this.props.id)?
                <i className="fas fa-heart"></i>:
                <i className="far fa-heart"></i>}
              </Link>
              </div>:
            null}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Card
