import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import cityAndGuilds from "../../assets/images/footer/city_and_guilds.png";
import firstAid from "../../assets/images/footer/dog_first_aid.JPG";
import { Map } from "../map";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div id="contFooter">
          <Row>
            <Col
              className="col"
              style={{
                width: "220px",
                fontFamily: "Chewy, cursive",
                color: "#696969",
                fontWeight: "200"
              }}
            >
              <h5 style={{ textAlign: "center" }}>Address</h5>
              <tr>
                <td>38 Mill Lane</td>
              </tr>
              <tr>
                <td>Warmley</td>
              </tr>
              <tr>
                <td>Bristol</td>
              </tr>
              <tr>
                <td>BS30 8BN</td>
              </tr>
              <br />
              <tr>
                <td>(opposite the Mill Lane Methodist Church car park )</td>
              </tr>
              <p style={{ fontWeight: "bold" }}>
                Please do not park on or block the drive as this is private
                access to the neighbouring houses. There is plenty of street
                parking available.{" "}
              </p>
            </Col>
            <Col className="col">
              <Map />
            </Col>
            <Col
              className="col"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "flex-end"
              }}
            >
              <img
                alt="city&guilds"
                src={cityAndGuilds}
                style={{ height: "65px" }}
              />
              <img alt="firstaid" src={firstAid} style={{ height: "65px" }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
