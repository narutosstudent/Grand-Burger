import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {

    const [text, setText] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        setText("");
    }
    return (
        <nav className="navigation">
        <div className="navigation-header">
            <h1 className="navigation-heading">Grand Burger</h1>
            <form className="navigation-search" onSubmit={e => onSubmit(e)}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} className="navigation-search-input" placeholder="Search..." />
                <button className="navigation-search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>

        <ul className="navigation-list">
            <li className="navigation-item">
                <Link to="/" className="navigation-link">home</Link>
            </li>
            <li className="navigation-item">
                <Link to="/about" className="navigation-link">about us</Link>
            </li>
            <li className="navigation-item">
                <Link to="/menu" className="navigation-link">menu</Link>
            </li>
            <li className="navigation-item">
                <Link to="/contact" className="navigation-link">contact</Link>
            </li>
        </ul>

        <div className="copyright">
            <p>&copy; 2020. Grand Burger. All Rights Reserved</p>
        </div>
    </nav>
    );
}

export default Navigation;
