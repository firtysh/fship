import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


function Navigationbar() {
  let signedIn = true;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          FShip
        </Navbar.Brand>
        {!signedIn ? (
        <Nav>
          <Button variant="outline-primary">Login</Button>
        </Nav>) : (
        <Nav>
          <Navbar.Text className='mx-3'>
            Signed in as: <span className='text-light fw-bold'>John Doe</span>
          </Navbar.Text>
          <Button variant="outline-danger">Logout</Button>
        </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default Navigationbar