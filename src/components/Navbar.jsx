import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './config';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaBell, FaGift, FaUser, FaSearch } from "react-icons/fa";
import { useState } from 'react';

function NetflixNavbar() {
    const [user, setUser] = useState(auth.currentUser);
    const navigate = useNavigate();

    const logout = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('email');
            setUser(null);
            navigate('/signup');
        });
    }
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <div className="container">
                <Navbar.Brand href="#">
                    <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Netflix logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">New &amp; Popular</Nav.Link>
                        <Nav.Link href="#">My List</Nav.Link>
                    </Nav>
                    <div className="d-flex flex-column flex-sm-row">
                        <Form inline className="my-2 my-lg-0 d-flex">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">
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
                                {user ? navigate('/') : (
                                    <div>
                                        <Button variant="danger" onClick={logout} className="">
                                            Logout
                                        </Button>

                                    </div>
                                )
                                }
                            </Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
}

export default NetflixNavbar;
