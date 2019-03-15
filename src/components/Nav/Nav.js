import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import logo from './fox.png';
import './Nav.css';

const NavTemplate = props => {
  return (
    <Navbar className="mb-5 Nav">
      <Container>
        <NavbarBrand>
          <img src={logo} alt="Fox Logo" className="Logo" />
          Chatter
        </NavbarBrand>

        <Nav pills className="ml-auto">
          <NavItem>
            <NavLink
              onClick={() => props.handlePageRender('AddMessage')}
              className="Button text-white"
            >
              Add Message
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTemplate;