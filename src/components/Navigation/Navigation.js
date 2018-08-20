import React from 'react'; 
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
const Navigation = () =>{
    return(
        <Navbar >
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home"><strong>ISEEYOU</strong></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem href="#">Sign Out</NavItem>
        </Nav>
    </Navbar>
   
    );
}
export default Navigation;