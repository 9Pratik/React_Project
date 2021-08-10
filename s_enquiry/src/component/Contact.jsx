import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card"
import { CardGroup } from "react-bootstrap";
import image from "./imges/institute01.jpg";
import html from "./imges/html.png";
import web from "./imges/web.png";
import javascript from "./imges/javscript.jpg";
import Col from "react-bootstrap/Col";
import groupstudy from "./imges/grpstudy.jpg";
import '../component/Contact.css'
import Footer from "./footer";
import Header from "./Header";

const Contact = () => {
    return (
        <div className="color">
            <Header />
            <div className="contact">
                <h1 className="head1">Contact Us</h1>
                <p className="tag"></p>
            </div>
            <div className="space7">
                <div className="address">
                    <p>Study Space Amber Institute,<br />
                        East, Pune 411 006.<br />
                        Maharashtra, INDIA<br />
                        Telephones : 020-26513200, 020-26513207<br />
                        Fax : 020-26513284<br />
                        E-mail : <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">academic@space.in</a> (Admission related  queries)<br />
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">registrar@space.in</a> (General Information)<br />
                        Website :<a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> www.amberpune.ac.in OR www.study24@.ac.in</a> <br />
                    </p>
                </div>
            </div>
            <a href="https://www.google.co.in/maps">
            <div className="location"> </div>
            </a>
            <div>
                <Footer />
            </div>
        </div >
    )

}

export default Contact;