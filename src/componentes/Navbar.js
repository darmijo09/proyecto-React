import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../Styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/category/electronics" className="nav-link">Electronics</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/clothing" className="nav-link">Clothing</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/home" className="nav-link">Home & Kitchen</Link>
            </li>
          </ul>
          <CartWidget />
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
