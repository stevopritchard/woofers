import React, { Component } from "react";
import { Route } from "react-router-dom";

import Menu from "./Menu";
import MainArea from "./MainArea";
import Footer from "./Footer";
import About from "./About";
import Service from "./Service";
import Gallery from "./Gallery";
import Terms from "./Terms";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Menu />
        <div style={{ paddingTop: "70px" }}>
          <Route path="/" exact component={MainArea} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Footer />
        </div>
      </div>
    );
  }
  static onImageLoadError(imageSrc, _srcType, errorEvent) {
    console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
  }
}

export default App;
