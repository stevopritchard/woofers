import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Service.css'

class Service extends Component {
    render(){
        return (
            <div className="container" style={{backgroundColor: '#EFEFEF'}}>
                <Row>
                    <Col className="col" style={{padding: 30}}>
                        <h2>Service</h2>
                        <p style={{paddingTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img width={200} height={110} alt="placeholder" src="https://via.placeholder.com/200x110.png"/>
                        <p style={{paddingTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Service;
