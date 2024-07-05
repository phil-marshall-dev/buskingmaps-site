import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useStore } from '../store';

const Navbar = () => {
    const user = useStore(state => state.user);

    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <BootstrapNavbar.Brand>BuskingMaps</BootstrapNavbar.Brand>
                </LinkContainer>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">

                    {user ?
                        <Nav className="ms-auto"><LinkContainer to="user">
                            <Nav.Link>{user.username}</Nav.Link>
                            <LinkContainer to="logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                        </LinkContainer></Nav>
                        :
                        <Nav className="ms-auto"><LinkContainer to="login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer></Nav>}


                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;