import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    NavbarText
  } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ExtraCode.dev</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>                    
                    <NavItem>
                        <NavLink href="#">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/poomwarawat">GitHub</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <Button outline color="info">Sign In</Button>
                </NavbarText>
                <NavbarText>
                    <Button className="ml-2" color="info">Sign Up</Button>
                </NavbarText>
                </Collapse>
            </Navbar>
            </div>   
        </div>
    )
}

export default Header
