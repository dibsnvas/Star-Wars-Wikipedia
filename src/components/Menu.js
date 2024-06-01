import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    // Update the active button state based on the current location
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <div className="menu-container">
      <div className="menu">
        <Link to="/films">
          <button className={`menu-button ${activeButton === '/films' ? 'active' : ''}`}>Films</button>
        </Link>
        <Link to="/planets">
          <button className={`menu-button ${activeButton === '/planets' ? 'active' : ''}`}>Planets</button>
        </Link>
        <Link to="/people">
          <button className={`menu-button ${activeButton === '/people' ? 'active' : ''}`}>People</button>
        </Link>
        <Link to="/starships">
          <button className={`menu-button ${activeButton === '/starships' ? 'active' : ''}`}>Starships</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
