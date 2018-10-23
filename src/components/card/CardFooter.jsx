import React from 'react'
import { Link } from 'react-router-dom'

const CardFooter = (props) => {
  let toggleFavourites = () => {
    const { favArray } = props.appState

    let action
    if (favArray.includes(props.id)) {
      action = 'remove'
    } else {
      action = 'add'
    }
    props.manageFavArray(props.id, action)
  }

  return (

    <div>
      <div className='link-wrapper'>
        <Link to={`/character-details?${props.id}`}>Details</Link>
        <Link to='#' onClick={toggleFavourites}>{
          props.appState.favArray.includes(props.id)
            ? <i className='fas fa-heart' />
            : <i className='far fa-heart' />}
        </Link>
      </div>
    </div>
  )
}

export default CardFooter
