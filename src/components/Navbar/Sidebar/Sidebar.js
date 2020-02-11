import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
        <label for="click">
            <div className="menu-icon">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        </label>

        <ul className="social-icons-list">
            <li>
                <a href="https://facebook.com" target="__blank" className="social-link"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
                <a href="https://twitter.com" target="__blank" className="social-link"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://google.com" target="__blank" className="social-link"><i className="fab fa-google-plus-g"></i></a>
            </li>
            <li>
                <a href="https://instagram.com" target="__blank" className="social-link"><i className="fab fa-instagram"></i></a>
            </li>
        </ul>

        <div className="year">
            <p>2020</p>
        </div>
    </div>
    );
}

export default Sidebar;
