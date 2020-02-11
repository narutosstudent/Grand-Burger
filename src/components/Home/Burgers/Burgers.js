import React from 'react';
import FirstTopBurger from "../../../assets/BurgerPic3.jpeg"
import SecondTopBurger from "../../../assets/BurgerPic4.jpg"
import "./Burgers.css";

const Burgers = () => {
    return (
        <section className="burgers">
            <div className="common-header">
                <h1 className="common-heading">Top Burgers</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
            </div>
            <div className="top-burgers">
                <div className="top-burger">
                    <img src={FirstTopBurger} alt="burger" className="top-burger-image"/>
                    <div className="top-burger-image-description">
                    <p>Grand Mexican Burger</p>
                    <p> <strong>79.99 $</strong> </p>
                    </div>
                </div>
                <div className="top-burger">
                    <img src={SecondTopBurger} alt="burger" className="top-burger-image"/>
                    <div className="top-burger-image-description">
                    <p>Grand Chicken Burger</p>
                    <p><strong>59.99 $</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Burgers;
