import logo from '../img/nakama-logo.png'
import Image from 'next/image'
import {Container, Navbar, NavDropdown, Nav, Button} from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
    return (
       
      <Navbar sticky="top" style={{backgroundColor:'#ededed', fontWeight:'bold'}} expand="lg"
      className='notoSansJP'>
      <Container>
        <Navbar.Brand href="#home">
        <div>
        <Image src={logo} alt="" width="150" height="48"/>
        </div>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto mx-5 text-center" >
          
            <Link href='/menu' passHref><Nav.Link>Menu</Nav.Link></Link>
            <Link href='/feedback' passHref><Nav.Link>Feedback</Nav.Link></Link>

            
          </Nav>
          <Nav className="ml-auto text-center">
          </Nav>
          
        </Navbar.Collapse>
        <Nav.Link href="#link"><Button variant="outline-secondary" id="button-addon2">
            Order
          </Button></Nav.Link>
      </Container>
    </Navbar>

    )
  }
  