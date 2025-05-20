import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav     style={{
      backgroundColor: '#f0f0f0',
      padding: '10px',
      display: 'flex',
      gap: '20px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '20px',
      alignItems: 'center',
      listStyle: 'none',
    }}
>
    
       <NavLink
        to="/"
        style={({ isActive, isPending }) => ({
          fontWeight: isActive ? 'bold' : '',
          color: isPending ? 'red' : 'black',
        })}
       >
        Home
      </NavLink>
    
      <NavLink
        to="/register"
        style={({ isActive, isPending }) => ({
          fontWeight: isActive ? 'bold' : '',
          color: isPending ? 'red' : 'black',
        })}
      >
        Register
      </NavLink>
</nav>

  )
}

export default Navbar
