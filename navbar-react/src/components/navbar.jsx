import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./logo";

const BootstrapNavbar = () => {
    return (
        <React.Fragment>      {/* using react fragment as a wrapper */}
            <Navbar expand="lg" className=" bg-blue-300">
                <Navbar.Brand className=" ml-5" href="#home"><Logo /></Navbar.Brand>  {/* importing logo from logo.jsx on click of logo it would lead to home page*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-24">
                        <Nav.Link className="text-white" href="#home">Home</Nav.Link>  {/* links to other pages */}
                        <Nav.Link className="text-white" href="#about-us">About us</Nav.Link>
                        <Nav.Link className="text-white" href="#contact-us">Contact us</Nav.Link>
                        <NavDropdown title={<span className="text-white">Services</span>} id="basic-nav-dropdown" > {/* dropdown containing services */}
                            <NavDropdown.Item href="#web-development" className="text-xs" >Web Development</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#mobile-app-development" className="text-xs">Mobile App Development</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#machine-learning" className="text-xs">Machine Learning</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#cms-development" className="text-xs">CMS Development</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#seo" className="text-xs">SEO</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default BootstrapNavbar;