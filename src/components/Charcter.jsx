import React from 'react'
import {Link} from 'react-router-dom'

const Character = (props) => {

  
  return (
    <React.Fragment>
      <Link to={`/character-details?${props.id}`} className='col-md-3 col-sm-4 col-xs-12'>
        <div className='card'>
          <div className='card-body'>
          {props.name?<p className='card-text'>{`${props.name}`}</p>:<p className='card-text'>{`${props.title}`}</p>}
          </div>
          <img className='card-img-top' src={`${props.thumbnail.path}/portrait_fantastic.${props.thumbnail.extension}`} alt='Card cap' />
        </div>
      </Link>
    </React.Fragment>
  )
}

export default Character
