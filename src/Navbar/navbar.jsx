import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
        <div className="navbar-menu" style={{borderBottom: "solid"}}>
            <div className="navbar-start">
                <Link className="navbar-item">Home</Link>
                <Link className="navbar-item">Projects</Link>
                <Link className="navbar-item">Resume/CV</Link>
                <Link className="navbar-item">Contact Me</Link>
            </div>
            <div className="navbar-end">
                <a href='https://www.linkedin.com/in/malick-ouedraogo-23b121191/' className="navbar-item"><i class="fa fa-linkedin-square"></i></a>
                <a href='https://github.com/malikaii' className="navbar-item"><i class="fa fa-github"></i></a>
        
            </div>
        </div>
        
    </>

  )
}

export default Navbar;