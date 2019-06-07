import React from "react";
import PropTypes from "prop-types";
import App from "./App";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.images = [];
    const context = require.context("./images-gallery", true, /\.(JPG)$/);
    context.keys().forEach(filename => {
      this.images.push(context(filename));
    });

    this.state = {
      index: 0,
      isOpen: false
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  openLightbox(index) {
    this.setState({ index: index, isOpen: true });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  moveNext() {
    this.setState(prevState => ({
      index: (prevState.index + 1) % this.images.length
    }));
  }

  movePrev() {
    this.setState(prevState => ({
      index: (prevState.index + this.images.length - 1) % this.images.length
    }));
  }

  render() {
    let lightbox;
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={this.images[this.state.index]}
          nextSrc={this.images[(this.state.index + 1) % this.images.length]}
          prevSrc={
            this.images[
              (this.state.index + this.images.length - 1) % this.images.length
            ]
          }
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          onImageLoadError={App.onImageLoadError}
        />
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.images.map((img, i) => {
          return (
            <div class="image-container">
              <img
                key={i}
                class="myImage"
                alt="placeholder"
                src={img}
                srcSet={img}
                onClick={e => this.openLightbox(i)}
                style={{ width: "200px", margin: "10px 0 10px 0" }}
              />
            </div>
          );
        })}
        {lightbox}
      </div>
    );
  }
}

export default ImageGallery;
