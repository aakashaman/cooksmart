import React from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          COOKFOOD
        </a>
        <a role="button" className={`navbar-burger burger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>
          <a className="navbar-item" href="#">
            About
          </a>
          <a className="navbar-item" href="#">
            Contact
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="#">
                Sign up
              </a>
              <a className="button is-light" href="#">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
