import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
        <div className="navbar-menu" style={{borderBottom: "solid"}}>
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/projects" className="navbar-item">Projects</Link>
                <Link to="/resume" className="navbar-item">Resume/CV</Link>
                <Link to="/contact" className="navbar-item">Contact Me</Link>
            </div>
            <div className="navbar-end">
                <a href='https://www.linkedin.com/in/malick-ouedraogo-23b121191/' target="_blank" className="navbar-item" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                <a href='https://github.com/malikaii' className="navbar-item" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            </div>
        </div>
    </>

  )
}

export default Navbar;