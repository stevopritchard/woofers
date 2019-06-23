import React, { Component } from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";

class Map extends Component {
  render() {
    return (
      <div
        style={{
          height: "190px",
          width: "280px",
          position: "relative"
        }}
      >
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default Map;
