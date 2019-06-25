import React, { Component } from "react";
import ImageGrid from "./ImageGrid";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <div className="preScrollable" id="contGallery">
          <ImageGrid />
        </div>
      </div>
    );
  }
}

export default Gallery;
