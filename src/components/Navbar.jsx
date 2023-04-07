import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./config";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaBell, FaGift, FaUser, FaSearch } from "react-icons/fa";
import axios from "axios";
import SearchedMoviesCard from "./SearchedMoviesCard";

function NetflixNavbar() {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const logout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("email");
      setUser(null);
      navigate("/signup");
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      );
      setSearchResults(response.data.results);
      navigate("/searched-movies");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container">
        <Link to={"/"}>
          <Navbar.Brand>
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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">New &amp; Popular</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-sm-row">
            <Form
              inline
              className="my-2 my-lg-0 d-flex"
              onSubmit={handleSearch}
            >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-light" type="submit">
                <FaSearch />
              </Button>
            </Form>
            <Nav>
              <Nav.Link href="#" className="ml-3">
                <FaBell size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="ml-3">
                <FaGift size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="ml-3">
                <FaUser size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="ml-3">
                {user ? (
                  navigate("/")
                ) : (
                  <div>
                    <Button variant="danger" onClick={logout}>
                      Logout
                    </Button>
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NetflixNavbar;
