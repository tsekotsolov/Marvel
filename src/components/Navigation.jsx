import React from 'react'

import {Link} from 'react-router-dom'

let Navigation = (props) => {
  return (

    <nav className='navbar navbar-expand-sm fixed-top navbar-dark navbar-custom'>
      <div>
        <Link to='/characters' className='navbar-brand'>Marvel</Link>
      </div>
      <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          <img src={localStorage.getItem('profilePicture')} alt='' />
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <a className='dropdown-item' href='#'>User Info</a>
          <a className='dropdown-item' href='#'>Logout</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
