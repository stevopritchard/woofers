import React, { Component } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Testimonials from './Testimonials';
import image1 from "./images-carousel/IMG-0463.jpg"
import image2 from "./images-carousel/IMG-0453.JPG"
import image3 from "./images-carousel/IMG-1810.JPG"

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
      // alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
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
            <div style={{'height': '500px'}}>
            <img width={900} height={500} alt="900x500" src={image1} style={{'objectFit': 'cover'}}/>
              <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div style={{'height': '500px'}}>
            <img width={900} height={500} alt="900x500" src={image2} style={{'objectFit': 'cover'}}/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div style={{'height': '500px'}}>
            <img width={900} height={500} alt="900x500" src={image3} style={{'objectFit': 'cover'}}/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

                    <Row style={{width: "970px", textAlign: "center", paddingTop: "11px"}}>
                        <Testimonials />
                    </Row>
                    </div>
      );
    }
  }
  

  export default ControlledCarousel