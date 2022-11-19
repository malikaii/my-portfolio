import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-menu">
        <Link className="navbar-item">Home</Link>
        <Link className="navbar-item">Projects</Link>
        <Link className="navbar-item">Resume/CV</Link>
        <Link className="navbar-item">Contact Me</Link>
    </div>
  )
}

export default Navbar;