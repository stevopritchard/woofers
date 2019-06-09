import React, { Component } from "react";
import { Route } from "react-router-dom";

import Menu from "./Menu";
import Footer from "./Footer";
import { MainArea } from "./pages/home";
import { About } from "./pages/about";
import { Service } from "./pages/service";
import { Gallery } from "./pages/gallery";
import { Contact } from "./pages/contact";
import { Terms } from "./pages/terms";

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
