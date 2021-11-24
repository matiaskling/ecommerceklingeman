import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Curso de React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Lista de Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Categoría 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Categoría 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Categoría 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Categoría 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;