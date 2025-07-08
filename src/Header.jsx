import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Aqua</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#homesection">Home</Nav.Link>
                        <Nav.Link href="#features">Add Details</Nav.Link>
                        <Nav.Link href="#bodysection">Added Details</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header