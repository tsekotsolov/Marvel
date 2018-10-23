import React from 'react'
import {Link} from 'react-router-dom'

export default function CardFooter() {

    let toggleFavourites=()=>{  

        const {favArray} = this.props.appState
        
        let action;
        if(favArray.includes(this.props.id)){
          action='remove'
        }else{
          action='add'
        }
        this.props.manageFavArray(this.props.id,action)
      }
    
  return (
    <div>
      <div className='link-wrapper'>
              <Link to={`/character-details?${this.props.id}`}>Details</Link>
              <Link to='#' onClick={this.toggleFavourites}>{
                this.props.appState.favArray.includes(this.props.id)?
                <i className="fas fa-heart"></i>:
                <i className="far fa-heart"></i>}
              </Link>
              </div>
    </div>
  )
}
