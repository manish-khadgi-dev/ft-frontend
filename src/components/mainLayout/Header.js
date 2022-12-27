import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="secondary " expand="lg">
      <Container>
        <Navbar.Brand href="/">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link to="/">Login </Link>
            <Link to="/register">Register </Link>
            <Link to="/dashboard">Dashboard </Link>
            <Link to="/">Logout </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
