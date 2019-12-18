import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function displayNav(){

    
    return(
        <Container>
            <Navbar bg="primary" variant="dark" className="flex-column">
                <Navbar.Brand href="/home">Austin Dober</Navbar.Brand>
                <Nav fill variant="pills" sticky="top">
                    <Nav.Item>
                        <Nav.Link href="/home">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default displayNav