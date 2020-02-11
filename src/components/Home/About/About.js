import React from 'react';
import "./About.css"
import FirstBurgerPic from "../../../assets/BurgerPic1.jpg"
import SecondBurgerPic from "../../../assets/BurgerPic2.jpg"
import ThirdBurgerPic from "../../../assets/BurgerPic3.jpeg"
import FourthBurgerPic from "../../../assets/BurgerPic4.jpg"
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section class="about-us">
        <div class="about-us-content">
            <h1 class="about-us-heading">About Us</h1>
            <div class="underline">
                <div class="small-underline"></div>
                <div class="big-underline"></div>
            </div>
            <h3 class="sub-heading">Grand Burger</h3>
            <p class="about-us-paragraph">We truly believe in quality. Our customers are not suppose to feel like they are even paying to eat, rather they are paying to get satifised, if you are not satifised, there is no need to pay!</p>
            <Link to="/about" class="about-us-btn">
                Read More
                <i class="fas fa-angle-double-right btn-arrow"></i>
            </Link>
        </div>

        <div class="about-us-images">
            <img src={FirstBurgerPic} class="image image-1" alt="burger" />
            <img src={SecondBurgerPic} class="image image-2" alt="burger" />
            <img src={ThirdBurgerPic} class="image image-3" alt="burger" />
            <img src={FourthBurgerPic} class="image image-4" alt="burger" />
        </div>
    </section>
    );
}

export default About;
