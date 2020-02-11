import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="header">
        <div className="brand">
            <h3 className="home-header-heading">Grand Burger {" "} <i class="fas fa-hamburger" /> </h3>
        </div>
        <div className="banner">
            <h1 className="banner-heading">Welcome to Grand Burger {" "} <i class="fas fa-utensils" /> </h1>
            <p className="banner-paragraph">Your Place For Hunger</p>
            <Link to="/menu" className="banner-button">Check Menu <i class="fas fa-hamburger" /> </Link>
        </div>
    </header>
    );
}

export default Header;
