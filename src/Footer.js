import React, { Component } from 'react';
import { Row, Col,  } from 'react-bootstrap';
import cityandguilds from './images-footer/city&guildslogo.png'
import firstaid from './images-footer/firstaid.JPG'
import Map from './Map'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="container">
                <div id="contFooter">
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
                        <Col className="col" xs="3" sm="3" md="3" lg="3">
                            <h5 style={{textAlign: "center"}}>Contact Details</h5>
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
                            <br/>
                            <tr>
                                <td>(opposite the Mill Lane Methodist Church car park )</td>
                            </tr>
                            <p style={{fontWeight: "bold"}}>Please do not park on or block the drive as this is private access to the neighbouring houses. There is plenty of street parking available.  </p>
                        </Col>
                        <Col className="col" xs="5" sm="5" md="5" lg="5">
                            <Map/>
                        </Col>
                    </Row>
                    <Row id="footerLogos">
                        <Col className="col" xs="4" sm="4" md="4" lg="4" style={{display: "flex", flexWrap: "nowrap"}}>
                            <a href="https://www.facebook.com/WoofersBristol/">
                                <i class="fa fa-facebook-square" style={{fontSize: "24px"}}></i>
                            </a>
                            <a href="https://www.instagram.com/woofersbristol/">
                                <i class="fa fa-instagram" style={{fontSize: "24px"}}></i>
                            </a>
                        </Col>
                        <Col className="col" xs="8" sm="8" md="8" lg="8" style={{display: "flex", flexDirection: "row-reverse"}}>
                            <img alt="city&guilds" src={cityandguilds} style={{height: "65px"}}/>
                            <img alt="firstaid" src={firstaid} style={{height: "65px"}}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Footer