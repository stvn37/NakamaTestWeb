import logo from '../img/nakama-logo.png'
import Image from 'next/image'
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
    return (
       
      <Navbar style={{backgroundColor:'#ededed', fontWeight:'bold'}} expand="lg"
      className='notoSansJP'>
      <Container>
        <Navbar.Brand href="#home">
        <div>
        <Image src={logo} alt="" width="150" height="48"/>
        </div>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5 text-center">
          <Link href='/' passHref><Nav.Link>Home</Nav.Link></Link>
            <Link href='/aboutus' passHref><Nav.Link>About</Nav.Link></Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Arrival</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Foods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Cart</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Link href='/faq' passHref><Nav.Link>FAQ</Nav.Link></Link>
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
  }
  