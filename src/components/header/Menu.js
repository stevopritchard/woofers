import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import woofers from "../../assets/images/header/wooferswording.png";

import "./Menu.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <Navbar
          collapseOnSelect
          fixed="top"
          // style={{ display: "flex", flexFlow: "column nowrap" }}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">
                <div style={{ padding: 0, marginTop: -31 }}>
                  <img
                    alt="Woofers"
                    src={woofers}
                    style={{
                      color: "#75a8a6",
                      width: "135px",
                      marginBottom: "0",
                      padding: "0px 15px 0px 10px"
                    }}
                  />
                </div>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="collapse navbar-collapse navHeaderCollapse">
            <Nav>
              <NavItem eventKey={1}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/about"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem eventKey={2}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/service"
                >
                  Service
                </NavLink>
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem eventKey={4}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/terms"
                >
                  T&Cs
                </NavLink>
              </NavItem>
              <div>
                <a href="tel:+447421479304">
                  <i class="fa fa-phone" style={{ fontSize: "18px" }} />
                </a>

                <a href="https://www.facebook.com/WoofersBristol/">
                  <i
                    class="fa fa-facebook-square"
                    style={{ fontSize: "18px" }}
                  />
                </a>
              </div>
              <div>
                <a href="mailto:noreply@woofersbristol.co.uk">
                  <i class="fa fa-at" style={{ fontSize: "18px" }} />
                </a>

                <a href="https://www.instagram.com/woofersbristol/">
                  <i class="fa fa-instagram" style={{ fontSize: "18px" }} />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar collapseOnSelect fixed="top">
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">
                <div style={{ padding: 0, marginTop: -31 }}>
                  <img
                    alt="Woofers"
                    src={woofers}
                    style={{
                      color: "#75a8a6",
                      width: "135px",
                      marginBottom: "0",
                      padding: "0px 15px 0px 10px"
                    }}
                  />
                </div>
                <p>Dog Grooming</p>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/about"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem eventKey={2}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/service"
                >
                  Service
                </NavLink>
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem eventKey={4}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to="/terms"
                >
                  T&Cs
                </NavLink>
              </NavItem>

              <a href="tel:+447421479304">
                <i class="fa fa-phone" style={{ fontSize: "18px" }} />
              </a>
              <a href="mailto:noreply@woofersbristol.co.uk">
                <i class="fa fa-at" style={{ fontSize: "18px" }} />
              </a>
              <a href="https://www.facebook.com/WoofersBristol/">
                <i class="fa fa-facebook-square" style={{ fontSize: "18px" }} />
              </a>
              <a href="https://www.instagram.com/woofersbristol/">
                <i class="fa fa-instagram" style={{ fontSize: "18px" }} />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default Menu;
