import React from 'react';
import './Logo.css';


const Logo = () =>{
    return (
        <Navbar >
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">ISEEYOU</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem href="#">Sign Out</NavItem>
            </Nav>
        </Navbar>
       
       
    )
}
export default Logo;