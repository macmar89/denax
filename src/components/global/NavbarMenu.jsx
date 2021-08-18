import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand>Denax</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/one">
              Úloha 1
            </NavLink>
            <NavLink className="nav-link" to="/two">
              Úloha 2
            </NavLink>
            <NavLink className="nav-link" to="/three">
              Úloha 3
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
