import React from 'react'
import CardFooter from './CardFooter'

const Card = (props) => {
  const { name, title, thumbnail } = props
  return (
    <React.Fragment>
      <div className='col-md-3 col-sm-4 col-xs-12'>
        <div className='card'>
          <div className='card-body'>
            {name ? <p className='card-text'>{`${name}`}</p> : <p className='card-text'>{`${title}`}</p>}
          </div>
          <img className='card-img-top' src={`${thumbnail.path}.${thumbnail.extension}`} alt='Card cap' />
          {name
            ? <CardFooter {...props} />
            : null}
        </div>
      </div>
    </React.Fragment>
  )
}
export default Card
