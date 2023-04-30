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
  console.log(searchResults);

  const logout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("email");
      setUser(null);
      navigate("/signup");
      {<SearchedMoviesCard />}
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  
    if (!searchTerm.trim()) {
      navigate(-1);
      return;
    }
  
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "2549127d548d3a2f96bb538a296a8058",
            language: "en-US",
            query: searchTerm,
            page: 1,
            include_adult: false,
          },
        }
      );
  
      setSearchResults(response.data.results);
      navigate("/searchedmoviescard");
      {<SearchedMoviesCard searchResults={searchResults} searchTerm={searchTerm} />}
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container-fluid">
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
                <Nav.Link
                  as={Link}
                  to="/account"
                  className="d-flex align-items-center mx-3 mx-sm-0"
                >
                  <FaUser />
                  <span className="ml-2">{user.email}</span>
                </Nav.Link>
              ) : (
                <Button
                  variant="outline-light"
                  as={Link}
                  to="/signin"
                  className="mx-3 mx-sm-0"
                >
                  Sign In
                </Button>
              )}
              {user && (
                <Button variant="outline-light" onClick={logout}>
                  Sign Out
                </Button>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
      {searchResults && <SearchedMoviesCard movies={searchResults} />}
    </Navbar>
  );
}

export default NetflixNavbar;