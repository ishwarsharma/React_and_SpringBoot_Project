import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="py-3" bg="dark" variant="dark" expand="lg">
        <div className="container">
          <div className=" col-md-10">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Navbar.Brand href="/">MyCourse</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">Add Course</Nav.Link>
                <Nav.Link href="/contact">View Course</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="col-md-2 text-center">
            <Nav className="ml-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
      <div className=" mb-3 bg-primary text-light">
        <div className="container">
          <h1 className=" mb-3">Welcome to Course Website!</h1>
          <h6 className="">
            This is the body section of my website. Here you can provide more
            details about your business, your products, or any other information
            you want to share with your visitors.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
