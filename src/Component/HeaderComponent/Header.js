/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Bootstrap/Bootstrap.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Creatella HR</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          <Link to="/home">Add Product</Link>
          <Link to="/update">Update Product</Link>
          <Link to="/login">Login Product</Link>
          <Link to="/register">Register Product</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
