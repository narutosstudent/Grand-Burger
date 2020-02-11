import React from 'react';
import AboutImage from "../../assets/BurgerPic3.jpeg"
import "./About.css"

const About = () => {
    return (
        <section className="about-section">
            <div className="about-wrapper">
                <div className="clip-wrapper">
                    <div className="about-image-wrapper">
                        <img src={AboutImage} alt="about-pic" className="about-image"/>
                    </div>
                    <div className="about-text-part">
                    <h1>About Us</h1>
                    <p>It all started back in 1998. Where Lay Trawson did not feel like the burgers back then were real burgers. So he, at the age of 21 decided to cook and sell premium burgers at university. People started liking it and after the completion of his Master's in Business Administration, he took the decision and strike. Opened restaurants after restaurants, and Grand Burger has been exploding ever since. We just hope this to continue and hopefully we can start opening restaurants not just in the United States of America and Europe, but hopefully also in Africa and Asia.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
