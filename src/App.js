import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Fragment>
    </Router>
  );
}

export default App;
