import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/register'><li>RegistrationForm</li></NavLink>
      
      </nav>
    </div>
  )
}

export default Navbar
