import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavTemplate = props => {
  return (
    <Container>
      <Navbar>
        <NavbarBrand>Chatter</NavbarBrand>

        <Nav pills className='ml-auto'>
          <NavItem>
            <NavLink active>Add Message</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavTemplate;