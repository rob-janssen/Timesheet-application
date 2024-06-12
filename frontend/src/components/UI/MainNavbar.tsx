import { Navbar, Container, Nav } from "react-bootstrap";
type Props = {};

const MainNavbar = (props: Props) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary mb-4"
    >
      <Container>
        <Navbar.Brand href="/dashboard">Timesheets</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/timesheets">Timesheets</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/profile">
              <img
                src="https://ui-avatars.com/api/?size=32&rounded=true&background=D5B942&name=Rob+Janssen"
                alt="User"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
