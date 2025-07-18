import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Mon Portfolio</div>
            <ul className="navbar-links">
                <li><a href="#header">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#shop">Boutique</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
