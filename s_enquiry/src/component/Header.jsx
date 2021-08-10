import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import log from "./imges/LOG.jpeg"
import { RiAdminFill } from "react-icons/ri"
import Form from 'react-bootstrap/Form';
import "../component/Header.css"

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <img src={log} className="corner"></img>
                    <Nav className="navfloat">
                        <a href="https://www.gmail.com/" className="space8">inquiry@gmail.com</a>
                        <NavLink to="/covid" className="space8">Covid-19 Resourses</NavLink>
                        <NavLink to="/admin" className="space8"><RiAdminFill />Admin Login</NavLink>
                    </Nav>
                </Navbar>
                <div className="backgroundStudent">
                    <div className="Green">
                        <Navbar className="home">
                            <Nav>
                                <NavLink to="/" className="space8">Home</NavLink>
                                <NavLink to="/home" className="space8">Courses</NavLink>
                                <NavLink to="/about" className="space8">About</NavLink>
                                <NavLink to="/contact" className="space8">Contact Us</NavLink>
                                <NavLink to="/sign" className="space8">Sign Up</NavLink>
                            </Nav>
                        </Navbar>
                    </div>
                    <div>
                        <h3 className="bordertext"><b>INSTITUTE FOR SOFTWARE TRAINING AND DEVELOPING CARRIER </b></h3><br />
                        <h3 className="middletext"><b>CHANGE THE WAY OF LEARNING</b></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
