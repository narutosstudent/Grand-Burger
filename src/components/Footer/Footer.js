import React from 'react';
import {Link} from "react-router-dom"
import FirstImage from "../../assets/BurgerPic2.jpg"
import SecondImage from "../../assets/BurgerPic3.jpeg"
import ThirdImage from "../../assets/happy-customer-2.jpg"
import FourthImage from "../../assets/happy-customer-1.jpg"
import FifthImage from "../../assets/HomeHeadingBackground.jpg"
import SixthImage from "../../assets/BurgerPic4.jpg"


import "./Footer.css"

const Footer = () => {
    return (
        <footer class="footer">
        <div class="main-part">

            <div class="footer-list-wrapper">
                <h3 class="footer-heading">Grand Burger</h3>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a href="#!" class="footer-list-link">
                            support@grandburger.com
                        </a>
                    </li>
                    <li class="footer-list-item">
                        <a href="#!" class="footer-list-link">
                            Chicago, Main Street 123
                        </a>
                    </li>
                    <li class="footer-list-item">
                        <a href="#!" class="footer-list-link">
                            Tel: +125 776 729
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-list-wrapper">
                <h3 class="footer-heading">Explore</h3>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <Link to="/" class="footer-list-link">
                            Home
                        </Link>
                    </li>
                    <li class="footer-list-item">
                        <Link to="/about" class="footer-list-link">
                            About Us
                        </Link>
                    </li>
                    <li class="footer-list-item">
                        <Link to="/menu" class="footer-list-link">
                           Menu
                        </Link>
                    </li>
                    <li class="footer-list-item">
                        <Link to="/contact" class="footer-list-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div class="gallery">
                <h3 class="footer-heading">Gallery</h3>
                <div class="gallery-images">
                <div class="image-wrapper">
                        <img src={FirstImage} class="footer-image" alt="footer-pic" />
                    </div>
                    <div class="image-wrapper">
                        <img src={SecondImage} class="footer-image" alt="footer-pic" />
                    </div>
                    <div class="image-wrapper">
                        <img src={ThirdImage} class="footer-image" alt="footer-pic" />
                    </div>
                    <div class="image-wrapper">
                        <img src={FourthImage} class="footer-image" alt="footer-pic" />
                    </div>
                    <div class="image-wrapper">
                        <img src={FifthImage} class="footer-image" alt="footer-pic" />
                    </div>
                    <div class="image-wrapper">
                        <img src={SixthImage} class="footer-image" alt="footer-pic" />
                    </div>
                </div>
            </div>
        </div>

        <div class="creator-part">
            <div class="copyright-text">
                <p>Copyright &copy; 2020. Grand Burger. All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
