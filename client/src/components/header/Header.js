import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './header.css'

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >MERN</Navbar.Brand>
      <Nav >
        <NavLink className="navlink" to="/">ADD-USER</NavLink>
        <NavLink className="navlink" to="/alluser">ALL-USER</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}
