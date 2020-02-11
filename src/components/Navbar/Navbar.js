import React, {Fragment} from 'react';
import Sidebar from './Sidebar/Sidebar';
import "./Navbar.css"
import Navigation from './Navigation/Navigation';

const Navbar = () => {
    return (
        <Fragment>
        <div className="navbar">
        <input type="checkbox" class="checkbox" id="click" hidden />
        <Sidebar />
        <Navigation />
        </div>
        </Fragment>
    );
}

export default Navbar;
