import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="/nike">Nike</a></li>
        <li><a href="/adidas">Adidas</a></li>
        <li><a href="/puma">Puma</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
