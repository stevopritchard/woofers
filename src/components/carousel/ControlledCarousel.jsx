import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import image1 from "../../assets/images/carousel/carousel_1.jpeg";
import image2 from "../../assets/images/carousel/carousel_2.jpeg";
import image3 from "../../assets/images/carousel/carousel_3.jpeg";
import image4 from "../../assets/images/carousel/carousel_4.jpeg";
import image5 from "../../assets/images/carousel/carousel_5.jpeg";

class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });

    console.log(this.state.index);
    console.log(this.state.direction);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.cycle(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  cycle() {
    if (this.state.index < 4) {
      this.setState({
        index: this.state.index + 1,
        direction: "next"
      });
    } else {
      this.setState({
        index: 0,
        direction: "next"
      });
    }
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <div style={{ height: "500px" }}>
              <img
                width={900}
                height={500}
                alt="900x500"
                src={image1}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: "500px" }}>
              <img
                width={900}
                height={500}
                alt="900x500"
                src={image2}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: "500px" }}>
              <img
                width={900}
                height={500}
                alt="900x500"
                src={image3}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: "500px" }}>
              <img
                width={900}
                height={500}
                alt="900x500"
                src={image4}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: "500px" }}>
              <img
                width={900}
                height={500}
                alt="900x500"
                src={image5}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ControlledCarousel;
