import React from 'react';
import FirstImage from "../../assets/BurgerPic3.jpeg"
import SecondImage from "../../assets/BurgerPic4.jpg"
import "./Menu.css"

const Menu = () => {
    return (
        <section className="menu">
            <div className="menu-text">
                <h1>Menu</h1>
                <p>Welcome, these are our burgers!</p>
            </div>
            <div className="card-wrapper">
                <div className="card card-1">
                    <img
                        src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
                        alt="menu-burger"
                        className="menu-image"/>
                    <h1>Grand Cheese Burger {" "}
                        <strong>59.99$</strong>
                    </h1>
                    <ul className="menu-list">
                        <li>Fries{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Drinks{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Sauce{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Dessert{" "}
                            <i className="fas fa-check"/>
                        </li>

                    </ul>
                </div>
                <div className="card card-2">
                    <img src={SecondImage} alt="menu-burger" className="menu-image"/>
                    <h1>Grand Chicken Burger{" "}
                        <strong>69.99$</strong>
                    </h1>
                    <ul className="menu-list">
                        <li>Fries{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Drinks{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Sauce{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Dessert{" "}
                            <i className="fas fa-check"/>
                        </li>

                    </ul>
                </div>
                <div className="card card-3">
                    <img src={FirstImage} alt="menu-burger" className="menu-image"/>
                    <h1>Grand Mexican Burger{" "}
                        <strong>79.99$</strong>
                    </h1>
                    <ul className="menu-list">
                        <li>Fries{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Drinks{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Sauce{" "}
                            <i className="fas fa-check"/>
                        </li>
                        <li>Dessert{" "}
                            <i className="fas fa-check"/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Menu;
