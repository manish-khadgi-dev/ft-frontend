import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { json, Link } from "react-router-dom";

export const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      setUser(userObj);
    }
  }, []);

  const handleOnLogOut = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="warning " expand="lg">
      <Container>
        <Navbar.Brand href="#">Finance Tracker</Navbar.Brand>
        welcome {user.name}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            {user?._id ? (
              <>
                <Link to="/dashboard">Dashboard </Link>
                <Link to="/" onClick={handleOnLogOut}>
                  Logout{" "}
                </Link>
              </>
            ) : (
              <>
                <Link to="/">Login </Link>
                <Link to="/register">Register </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
