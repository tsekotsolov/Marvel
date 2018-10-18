import React from 'react'

import {Link} from 'react-router-dom'

let Navigation = (props) => {

  return (
      
    <nav className='navbar navbar-expand-sm fixed-top navbar-dark navbar-custom'>
        <div>
            <Link to='/characters' className='navbar-brand'>Marvel</Link>
        </div>
        <div>
            <img src={localStorage.getItem('profilePicture')} alt=""/>
        </div>
    </nav>
  )
}

export default Navigation