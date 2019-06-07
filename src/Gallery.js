import React from "react";
import ImageGallery from "./Images";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container">
      <div className="preScrollable" id="contGallery">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Gallery;
