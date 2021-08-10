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
import proImag from "./imges/picar.jpeg"
import Col from "react-bootstrap/Col";
import groupstudy from "./imges/grpstudy.jpg";
import pic1 from './imges/photo-gallery.jpg'
import pic2 from './imges/teaching.jpeg'
import pic3 from './imges/gapic.jpg'
import pic4 from './imges/lab pics.jpg'
import pic5 from './imges/office.jpg'
import pic6 from './imges/staf.jpeg'
import eye from  './imges/vision.jpeg'
import '../component/About.css'
import Footer from "./footer";
import Header from "./Header";

const Contact = () => {
    return (
        <div className="color">
            <Header />
            <div className="divspace">
                <Container>
                    <Row>
                        <Col xs={8} >
                            <h5 className="info"><b>Established in 2011 by Anil Singh Info Academy Study Space  <br />is an online/Offline Advance Levelplatform for New Learner  <br />providing industry-level programs designed.<br /><br />

                                We differentiate ourselves by Quality of education imparted  <br />by highly experienced faculty members  and our <br /> comfortable learning environment for various software courses</b></h5>
                        </Col>
                        <Col xs={4} >
                            <img src={proImag} className="picar" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='moto'>
                <h3><img src={eye} className="eye" />
                Our Vision</h3>
                <p className="slide">The motto of the Institute is to enable the students to not only make a living but also to help them live a quality life by developing futuristic skills.
                </p>
            </div>
            <div className="space3">
              <h3 style={{textAlign:"center"}}>Gallery</h3>
              <Container>
                  <Row>
                      <Col xs={4}><img src={pic1} className="pic" /></Col>
                      <Col xs={4}><img src={pic2} className="pic" /></Col>
                      <Col xs={4}><img src={pic3} className="pic" /></Col>
                  </Row>
                  <Row>
                      <Col xs={4}><img src={pic4} className="pic" /></Col>
                      <Col xs={4}><img src={pic5} className="pic" /></Col>
                      <Col xs={4}><img src={pic6} className="pic" /></Col>
                  </Row>
                  
              </Container>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )

}

export default Contact;