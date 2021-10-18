import React from 'react';
import { Container,Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Header = () => {
  const {user,logOut}= useAuth();
    return (
      <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className="px-lg-5" href="#">OraCare</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button
         variant="outline-success">Search</Button>
      </Form>
    <Nav>
    {user.email && <span className="px-3">Hello {user.displayName}</span>}
                {
                    user.email ?
                        <button className="btn btn-warning px-4" onClick={logOut}>Log out</button>
                        :
                        <Nav.Link className="px-5" as={Link} to="/login">Login</Nav.Link>}
                            
    </Nav>
    </Navbar.Collapse>
  </Container>
            </Navbar>
        </div>
    );
};

export default Header;