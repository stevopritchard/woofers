import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/about/about_1.JPG";
import image2 from "../../assets/images/about/about_2.JPG";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div id="contAbout">
          <Row>
            <h2>About me...</h2>
          </Row>
          <Row>
            <Col className="col" xs="12" sm="12" md="12" lg="12">
              <p>
                Hello! I'm Kelly and I have always been a ‘dog person’ from a
                very young age. I have two Border Terriers called Doris and
                Edith (featured in my logo) and I would consider them my Furry
                Babies. I have been working in the corporate world since I
                graduated from University and whilst I’ve enjoyed meeting some
                great people I have always felt like the job was a means to an
                end. A friend suggest I should try Dog Grooming (I’m always
                covered in dog hair anyway), so I took the plunge and started a
                City & Guilds grooming course and haven’t looked back since. I
                have built my salon myself so it’s customised to be comfortable
                for your dog, its tucked away amongst the trees, its peaceful
                and clean. I often diffuse Lavender oil in the salon as I have
                found this has a remarkable relaxing effect on your Woofer. I'm
                really excited about my next venture and I can guarantee your
                dog will be in the safest of hands where butt scratches and
                cuddles come as standard.
                <br />
                Kelly x
              </p>
            </Col>
          </Row>
          <Row>
            <img alt="Kelly" src={image1} />
          </Row>
          <Row>
            <img alt="Doris & Edith" src={image2} />
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
