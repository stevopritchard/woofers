import React, { Component } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Contact.css";
import FormErrors from "./FormErrors";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      formErrors: { name: "" },
      nameValid: false,
      emailValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? "" : " name required";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.nameValid && this.state.emailValid
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ name: "", email: "" });

    const { name, email } = this.state;
    document.getElementById("response").innerHTML =
      "Your message has been sent!";
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email}`);
  };

  render() {
    return (
      <div className="container">
        <div id="contContact">
          <Row>
            <h2>Get in touch...</h2>
          </Row>
          <Row>
            <Col className="col" xs="12" sm="12" md="12" lg="12">
              <div className="input-group center">
                <form onSubmit={this.handleSubmit}>
                  <InputGroup id="inputName" size="sm">
                    <FormControl
                      id="validationDefault01"
                      name="name"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      aria-describedby="inputGroup-sizing-sm"
                      value={this.state.name}
                      onChange={event => this.handleUserInput(event)}
                    />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      aria-describedby="inputGroup-sizing-sm"
                      value={this.state.email}
                      onChange={event => this.handleUserInput(event)}
                    />
                    <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} />
                    </div>
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <FormControl
                      name="phone"
                      placeholder="Your Phone Number"
                      aria-label="Your Phone Number"
                      aria-describedby="inputGroup-sizing-sm"
                      value={this.state.phone}
                      onChange={event => this.handleUserInput(event)}
                    />
                  </InputGroup>
                  <br />
                  <InputGroup style={{ paddingBottom: 20 }}>
                    <textarea
                      name="message"
                      class="form-control"
                      placeholder="Type your message here..."
                      aria-label="textarea"
                      value={this.state.message}
                    />
                  </InputGroup>
                </form>
              </div>
              <button
                id="submitButton"
                class="btn btn-primary"
                href="#"
                type="submit"
                disabled={!this.state.formValid}
                onClick={this.handleSubmit}
              >
                Send Message
              </button>
            </Col>
          </Row>
          <br />
          <p id="response" />
        </div>
      </div>
    );
  }
}

export default Contact;
