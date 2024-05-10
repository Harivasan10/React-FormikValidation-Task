import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#2e3956" }}>
      <Navbar.Brand as={Link} to="/" className="text-uppercase" style={{ color: "white", marginRight: "80px" }}>
        Library Management System
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/Author" className="text-uppercase" style={{ color: "white" }}>
              <FaUserEdit /> Add Author
            </Nav.Link>
          </Nav.Item>

          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/Books" className="text-uppercase" style={{ color: "white" }}>
              <ImBook /> Add Book
            </Nav.Link>
          </Nav.Item>

          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/AuthorPage" className="text-uppercase" style={{ color: "white" }}>
              <FaUsers /> Authors Collection
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/BooksPage" className="text-uppercase" style={{ color: "white" }}>
              <ImBooks /> Books Collection
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
