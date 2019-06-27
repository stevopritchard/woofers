import React, { Component } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import FormErrors from "./FormErrors";

const API_PATH = "http://localhost:3000/woofers/src/contact.php";

// // register account on owners name and replace api key and api secret
// // mail jet allowed 6000 email per month with max 10 per hour.
// const mailJet = require("node-mailjet").connect(
//   "97b8e742c8afcdfcc39e7d40035e0aec", //api key
//   "ac784792379758544c2230980cf2db9b" //api secret
// );

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
      emailValid: false,
      mailSent: false,
      error: null
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

    // const { name, email, phone, message } = this.state;

    // axios({
    //   method: "post",
    //   url: `${API_PATH}`,
    //   headers: { "content-type": "application/json" },
    //   data: this.state
    // })
    //   .then(result => {
    //     this.setState({
    //       mailSent: result.data.sent
    //     });
    //   })
    //   .catch(error => this.setState({ error: error.message }));

    // const textPart = `Name: ${name},\nPhone: ${phone},\n\nMessage: ${message} `;

    // const request = mailJet.post("send", { version: "v3.1" }).request({
    //   Messages: [
    //     {
    //       From: { Email: email, Name: name },
    //       To: [{ Email: "shashankkushwah@gmail.com" }],
    //       Subject: "Inquiry",
    //       TextPart: textPart
    //     }
    //   ]
    // });

    // request
    //   .then(result => {
    //     // email sent
    //     document.getElementById("response").innerHTML =
    //       "Your message has been sent!";
    //     alert(`Your state values: \n
    //       name: ${name} \n
    //       email: ${email} \n
    //       phone: ${phone} \n
    //       message: ${message} \n`);
    //     this.setState({ name: "", email: "", phone: "", message: "" });
    //   })
    //   .catch(err => {
    //     // error sending email
    //     alert(`ERROR: \n
    //       ${err}`);
    //     console.log(err.statusCode);
    //   });
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
                <form
                  onSubmit={this.handleSubmit}
                  action="/contact.php"
                  method="POST"
                >
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
                      onChange={event => this.handleUserInput(event)}
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
