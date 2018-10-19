import React from 'react'
import {Link} from 'react-router-dom'

const Character = (props) => {
  return (
    <React.Fragment>
      <Link to={`/character${props.id}`} className='col-lg-3 col-md-3 col-sm-4 col-xs-6'>
        <img src={`${props.thumbnail.path}/portrait_fantastic.${props.thumbnail.extension}`} alt=''className='image' />
        <div>
          <div className='text'>
            <p></p>
            <p></p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default Character
