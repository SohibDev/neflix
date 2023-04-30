import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./config";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { FaBell, FaGift, FaUser, FaSearch } from "react-icons/fa";

function NetflixNavbar() {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("email");
      setUser(null);
      navigate("/signup");
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/searchedmoviescard");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container">
        <Link to={"/"}>
          <Navbar.Brand className="mx-auto">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/new-popular">
              New &amp; Popular
            </Nav.Link>
            <Nav.Link as={Link} to="/my-list">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-sm-row">
            <Nav>
              <Form inline>
                <Button variant="outline-light" className="ml-3" onClick={handleSearch}>
                  <FaSearch />
                </Button>
              </Form>
              <Nav.Link
                as={Link}
                to="/notifications"
                className="d-flex align-items-center mx-3 mx-sm-0"
              >
                <FaBell />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/gifts"
                className="d-flex align-items-center mx-3 mx-sm-0"
              >
                <FaGift />
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/account"
                    className="d-flex align-items-center mx-3 mx-sm-0"
                  >
                    <FaUser />
                  </Nav.Link>
                  <Button variant="outline-light" onClick={logout} className="mx-3 mx-sm-0">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/signup" className="d-flex align-items-center mx-3 mx-sm-0">
                  Sign Up
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NetflixNavbar;
