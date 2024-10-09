import { Collapse } from "bootstrap";
import { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

export const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="light" light expand="md">
        <NavbarBrand to="/">
          Wiki Wander
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <NavItem>
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <Nav navbar>
            {/* navbar for general users when logged in*/}
            {isLoggedIn && (
              <>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      logout();
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    )
}