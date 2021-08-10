import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card"
import { CardGroup } from "react-bootstrap";
import html from "./imges/html.png";
import web from "./imges/web.png";
import javascript from "./imges/javscript.jpg";
import Col from "react-bootstrap/Col";
import groupstudy from "./imges/grpstudy.jpg";
import python from "./imges/champy.ico"
import rise from "./imges/rise sucess.jpg"
import Footer from "./footer";
import "../component/Python.css"
import Header from "./Header";

const Python = () => {
    return (
        <div className="color">
            <Header />
            <div className="pythonspace">
                <h3><img src={python} style={{ width: '70px' }} />Python is Open Source Non-Complied and Scripting Language</h3>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3>Learn Python on DJANGO Framework</h3><br />
                            <p>One of the Largest used technology for Data Science, Machine Learning & Web Programming because if its wide range of libraries, easy to learn and implement and close to machine programming. Hence widely used in Data Science field.
                                DJANGO is latest framework for Python Web Implementation which provides MVC approach to Phython & covered as part of syllabus
                                Prerequisites - None - Anyone can learn.
                            </p>
                        </Col>
                        <Col className="middle"><h3>Python Scope</h3><br />
                            <p>Use in Data Science</p>
                            <p className="data"></p>
                            <p>Machine Level Programming</p>
                            <p className="machine"></p>
                            <p>High Pay Packagese</p>
                            <p className="high"></p>
                            <p>Job Openings</p>
                            <p className="job"></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="syadiv1">
                <Container>
                    <h1 className="allBus">Syllabus</h1>
                    <p className="allBus">3 {""} Month,1{""} Week</p>
                    <Row className="row1">
                        <Col>
                            <p><b>Introduction</b><br />
                                Python Install and Configuration<br />
                                Python Tools<br />
                                Pycham<br />
                                Spyder<br />
                                Jupiter<br />
                                <b>Pragramming Basics</b><br />
                                variables<br />
                                Data Types<br />
                                User Input<br />
                                Unpacking<br />
                                Boolean Practice<br />
                                What If else and if Making<br />
                                Loops<br />
                                <b>Making sentence</b><br />
                                Branches and Function<br />
                                Using Build in function<br />
                                Oops Programming<br />
                                Modules<br />
                                Classes And Objects<br />
                                Overloading<br />
                                composition<br />
                            </p>
                        </Col>
                        <Col>
                            <p>Collections <br />
                                Dictionaries <br />
                                List <br />
                                Tuple <br />
                                Set <br />
                                Exception Handling <br />
                                SQL Database Integration <br />
                                Connecting with Database <br />
                                Select Operations <br />
                                CRUD Operations <br />
                                File IO <br />
                                Time Series Forecasting <br />
                                Time Series Data <br />
                                Trend Chart <br />
                                Moving Average <br />
                                Exponential Smoothing <br />
                                ARIMA <br />
                                GARCH</p>
                        </Col>
                        <Col>
                            <p>Data Science Libraries <br />
                                NumPy - Arrays, Functions etc. <br />
                                Pandas - Working with Different Datasources / Datasets <br />
                                Matplotlib - Data Visualization using Different Types of Charts on Multiple Datasets <br />
                                Beautiful SOAP <br />
                                Web Scrapper etc <br />
                                Mini Project - Working with Different Datasets to use above Libraries in Python</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="space2">
                <Container>
                    <Row>
                        <Col xs={4} className="row2"><p>Benefits to Our Students</p></Col>
                        <Col xs={4} className="row3"><p>Recent Added Companies For Placements</p></Col>
                    </Row>
                </Container>
                <Container className="detail">
                    <Row>
                        <Col xs={6}>Best Python Training Institute<br />

                            Hands On Training - Approx 25% Theory & 75% Practicals<br />

                            Job Oriented Course - Training on Basic to Advanced Topics<br />

                            Professional Notes & Guidance<br />

                            Interview Prepare Sessions etc.<br />

                            Live Projects / Internship / Live Case Studies<br />

                            Placements - Students Placements in IT Industry - 300+ Companies for Placements- Check Recent Placed Students on Site.<br />

                            Trainer - Highly Experienced Industry Expert - 7+ yrs exp<br />

                            Meet our Trainers - You Will Like to Enroll With Us !<br />

                            Free Demo, EMI Available, Check Live Placement Calls in Office etc.</Col>

                        <Col style={{ marginLeft: "180px" }}>
                            <p>1. Appetals Solutions Private Limited<br />
                                2. SAAR IT Resources Pvt. Ltd.<br />
                                3. ALFA KPO PRIVATE LTD<br />
                                4. eBrandz Solutions Pvt. Ltd.<br />
                                5. Collabera Technologies Pvt. Ltd.<br />
                                5. Collabera Technologies Pvt. Ltd.<br />
                                6. Qtech Software Pvt. Ltd<br />
                                7. NIIT Ltd<br />
                                8. PRIMUS Techsystems Pvt. Ltd.<br />
                            </p>
                        </Col>
                    </Row>

                </Container>
                <Container className="thirdcont">
                    <Row>
                        <Col>

                            <Col xs={6}>
                                <img src={rise} style={{ height: "250px", width: "300px" }} />
                            </Col>

                        </Col>
                        <Col>
                            <p>
                                No Fake Promises ! All our promises on paper.
                                Students Placements into IT Companies - Best Job Oriented Training Program to Help our students get Job in IT Industry

                                Unlimited Interview Calls Until You are Placed - we provide unlimited interview calls to our students as part of our free placement assistance process as and when they come to us until they are placed post completion of training and start the placement process when 80% training is complete for Quick Turnout ! Check Recent Placed Students on Placement Page.

                                Dedicated Placement Team - Overall 200+ Companies for Placements - Check Recent Added Companies on Page Below + new companies added in every week
                            </p></Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div >
    )

}

export default Python;
