import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './Contact.css'

class Contact extends Component {
        render(){
            return(
                <div className="container" style={{backgroundColor: '#EFEFEF'}}>
                    <Row>
                        <Col className="col" xs="6" sm="6" md="9" lg="9">
                            <div className="input-group center">
                                <InputGroup size="sm" style={{paddingTop: 20}}>
                                    <FormControl
                                        placeholder="Your Name"
                                        aria-label="Your Name"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Your Email"
                                        aria-label="Your Email"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Your Phone Number"
                                        aria-label="Your Phone Number"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup style={{paddingBottom: 20}}>
                                    <textarea name="message" class="form-control" placeholder="Type your message here..." aria-label="textarea"></textarea>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        }
}

export default Contact