import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
        <div>
            <div className="navbar-start" id="navbar">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/projects" className="navbar-item">Projects</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/contact" className="navbar-item">Contact Me</Link>
                
            </div>
        </div>
    </>

  )
}

export default Navbar;