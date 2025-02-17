import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">
      <a href="/">
        <img src="../logo.png" alt="SoccerCleat Logo" /></a>
        <h1><a href="/">SoccerCleat</a></h1>
      </div>
      <div className="icons">
        <a href="/login" className="icon">🌐</a>
        <a href="/panier" className="icon">🛒</a>
      </div>
    </header>
  );
}

export default Header;
