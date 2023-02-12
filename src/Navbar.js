import React from 'react';
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
    
        <a className="navbar-logo" href="#">
          COOKSMART
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
            Recipes
          </a>
          <a className="navbar-item" href="#">
            About          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="buttonnav" href="#">
                Sign up
              </button>
              <button className="buttonnav" href="#">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
