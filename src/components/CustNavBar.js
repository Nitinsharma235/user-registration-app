import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustNavBar() {
  return (

  <div>
    <Navbar expand="lg" className="bg-dark" variant='dark' >
        <Navbar.Brand href="/" className='fw-bold ms-2'>User Registration App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/" className="fs-10">Home</Nav.Link>
            <Nav.Link as={Link} to="/register" className="fs-10">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>


  )
}

export default CustNavBar
