import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Logo from  '../logo.png';
import Avatar from '../avatar/profile-avatar.svg'
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src ={Logo} className ="logo-theme"  /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto me-5" navbar>
            <NavItem>
              <NavLink href="/test1" className = "mx-3 nav-item-theme">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className = "mx-3 nav-item-theme">Quizzes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className = "mx-3 nav-item-theme">Practice</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className = "nav-item-theme">
                Vaibhav <img src={Avatar} className= "nav-item-profile-image" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  MyTests
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  MyProfile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;