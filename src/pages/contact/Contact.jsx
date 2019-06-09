import React, { Component } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div id="contContact">
          <Row>
            <h2>Contact</h2>
          </Row>
          <Row>
            <Col className="col" xs="12" sm="12" md="12" lg="12">
              <div className="input-group center">
                <InputGroup id="inputName" size="sm">
                  <FormControl
                    placeholder="Your Name"
                    aria-label="Your Name"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <FormControl
                    placeholder="Your Phone Number"
                    aria-label="Your Phone Number"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
                <InputGroup style={{ paddingBottom: 20 }}>
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="Type your message here..."
                    aria-label="textarea"
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
