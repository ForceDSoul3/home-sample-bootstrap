import {Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap'

const Header = () => {
    return (
      <Row>
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Oficina Virtual <small className="text-muted">OVAC</small></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    
                    <NavDropdown title="Más acciones" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Contacto Devs</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Reportar un problema</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">SETYTE</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Acceso Sistemas</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </Row>
    )
}

export default Header

