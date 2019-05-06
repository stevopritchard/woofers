import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import image1 from "./images-about/IMG-0458.JPG"
import image2 from "./images-about/B3C77DC0-6896-42C1-9DF4-6529C47D6125.JPG"
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="container">
                <div id="contAbout">
                    <Row>
                        <h2>About</h2>
                    </Row>
                    <Row>
                        <Col className="col" xs="12" sm="12" md="12" lg="12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>
                    <Row>
                        <img alt="Kelly" src={image1}/>
                    </Row>
                    <Row>
                        <img alt="Doris & Edith" src={image2}/>
                    </Row>
                </div>
            </div>
        )
    }
};

export default About