import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <div>
  <Navbar>
    <Container>
      <Navbar.Brand href="#home">MyEcommerce</Navbar.Brand>
        <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Catalogos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Catalogo 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Catalogo 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Catalogo 3</NavDropdown.Item>
            </NavDropdown>
        </Nav>
          <Navbar.Text>
          <CartWidget/> 
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
</Navbar>
    </div>
  );
};
export default NavBar;