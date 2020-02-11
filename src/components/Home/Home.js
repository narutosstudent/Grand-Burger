import React, { Fragment } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Burgers from './Burgers/Burgers';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <Fragment>
        <Header />
        <About />
        <Burgers />
        <Testimonials />
        </Fragment>
    );
}

export default Home;
