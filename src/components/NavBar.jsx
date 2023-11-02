import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
     <Navbar className='nav-bar d-flex justify-content-between' data-bs-theme="dark">
        <Container className='container-nav'>
          <Navbar.Brand href="#home" className='titulo-nav'>BLOG Autores-Libros</Navbar.Brand>
          <Nav>
            <Link to= '/' className='link-nav'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
