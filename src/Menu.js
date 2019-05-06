import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Menu.css'
import woofers from './wooferswording.jpg'

class Menu extends Component {
    render(){
        return(
            <Navbar collapseOnSelect fixed="top">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <div style={{padding:0, margin:-7}}>
                                <img alt="Woofers" src={woofers} style={{color: "#75a8a6", width:'135px',marginBottom: '0',padding: '0px 15px 0px 10px'}}></img>
                            </div>
                            <p>Dog Grooming</p>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/service">
                            Service
                        </Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="/gallery">
                            Gallery
                        </Link> 
                    </NavItem>
                    <NavItem eventKey={4}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default Menu;