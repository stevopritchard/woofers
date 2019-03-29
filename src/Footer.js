import React, { Component } from 'react';
import { Row, Col,  } from 'react-bootstrap';
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="containerFooter">
                <Row style={{width: "970px"}}>
                    <Col className="col" xs="4" sm="4" md="4" lg="4">
                    <h5 style={{textAlign: "center"}}>Open Hours</h5>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>09:00-17:00</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                    </Col>
                    <Col className="col" xs="4" sm="4" md="4" lg="4">
                        <h5 style={{textAlign: "center"}}>Contact Details</h5>
                        <tr>
                            <td>[address line 1]</td>
                        </tr>
                        <tr>
                            <td>[address line 2]</td>
                        </tr>
                        <tr>
                            <td>[address line 3]</td>
                        </tr>
                        <tr>
                            <td>[address line 4]</td>
                        </tr>
                    </Col>
                    <Col className="col" xs="4" sm="4" md="4" lg="4">
                        <h5 style={{textAlign: "center"}}>Social Media</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer