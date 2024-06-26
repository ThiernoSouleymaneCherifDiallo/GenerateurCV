import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none text-black">Générateur de CV</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="mx-2 text-decoration-none text-black">Accueil</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
