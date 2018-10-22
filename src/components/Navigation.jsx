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
          <Link to='/' className='dropdown-item'>User Info</Link>
          <Link to='/' className='dropdown-item' onClick={() => localStorage.clear()} >Logout</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
