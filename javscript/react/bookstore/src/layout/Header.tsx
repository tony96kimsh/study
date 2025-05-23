import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
          <Navbar bg="primary" variant="dark">
              <Container>
              <Navbar.Brand as={Link} to="/">BookStore</Navbar.Brand>
                  <Nav className='me-auto'>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/product">Product</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>      
        </>
    )
}

export default Header