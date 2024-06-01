import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo1.png";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftside">
        <a href="http://localhost:3000/"> {/* Anchor tag pointing to the root URL */}
          <img src={Logo} alt="Logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
