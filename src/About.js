import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './About.css';

class About extends Component {
    render(){
        return (
            <div className="container" style={{backgroundColor: '#EFEFEF'}}>
                <div className="contAbout">
                    <Row>
                        <Col className="col" xs="6" sm="6" md="9" lg="9" style={{height: '500px'}}>
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col className="col" xs="6" sm="6" md="3" lg="3" style={{height: '500px', justifyContent: 'center'}}>
                            <img style={{paddingTop: 40}} alt="placeholder" src="https://via.placeholder.com/200x400.png" />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default About