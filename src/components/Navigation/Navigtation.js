import React, {Component} from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
 render() {
   return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Navbar.Brand href="#home">Ma3ak</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
     <Navbar.Collapse id="responsive-navbar-nav">
     <Nav>
       <Nav.Link href="#deets">More deets</Nav.Link>
       <Nav.Link eventKey={2} href="#Sign">
       Sign In
     </Nav.Link>
     </Nav>
     </Navbar.Collapse>
     </Navbar>
   )
 }
}

export default Navigation;