import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/nav.css"

  

function NavScrollExample() {
  return (
    <Navbar bg="success" expand="lg" backgroundColor="light">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <Container fluid>
        <Navbar.Brand href="#miPhones">MI phones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#redmiphones">Redmi Phones</Nav.Link>
            <Nav.Link href="#tv">Fitness & lifestyle</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#laptops">home</NavDropdown.Item>
              <NavDropdown.Item href="#home">
                Radio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#audio">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="# search" disabled>
              Tv
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample; 
    
    
    
 