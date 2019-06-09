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
          <Row style={{ width: "970px" }}>
            <Col className="col" xs="4" sm="4" md="4" lg="4">
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
            <Col className="col" xs="4" sm="4" md="4" lg="4">
              <Map />
            </Col>
            <Col
              className="col"
              xs="4"
              sm="4"
              md="4"
              lg="4"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "flex-end",
                paddingTop: "30px"
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
