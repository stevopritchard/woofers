import React, { Component } from "react";
import { ControlledCarousel } from "../../components/carousel";
import { Testimonials } from "../../components/testimonials";

import "./MainArea.css";

class MainArea extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <ControlledCarousel />
          <Testimonials />
        </div>
      </div>
    );
  }
}
export default MainArea;
