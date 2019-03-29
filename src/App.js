import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import MainArea from './MainArea';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Gallery from './Gallery';
import Contact from './Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height:"100vh"}}>
        <Menu />
        <Route path="/" exact component={MainArea}/>
        <Route path="/about" component={About}/>
        {/* <Route path="/service" component={Service}/> */}
        {/* <Route path="/gallery" component={Gallery}/> */}
        {/* <Route path="/contact" component={Contact}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
