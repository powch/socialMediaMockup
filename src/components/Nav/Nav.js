import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavTemplate = props => {
  return (
    <Navbar color='light' className='mb-3'>
      <Container>
        <NavbarBrand href='/'>Chatter</NavbarBrand>

        <Nav pills className='ml-auto'>
          <NavItem>
            <NavLink active href='/message'>Add Message</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavTemplate;