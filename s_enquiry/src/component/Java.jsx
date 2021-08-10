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
import "../component/Java.css"
import Header from "./Header";
const Java = () => {
    return (
        <div className="color">
            <Header />
            <div className="spaceJava">

            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3>Java Certification Course Overview</h3><br />
                            <p>
                                Java is No 1 programming language in world over decades Trusted by large number of small to large MNC Organizations for its Stability, Scalability, Robustness, Security, Platform Independence etc features

                                Hence Java is used in almost all Industries to Implement Large Enterprise Level Projects

                                At fresher level Java is generally asked in most technical interview

                                Hence the syllabus is created to help you meet industry requirements & clear technical interviews

                                As part of the course you will Learn from basics to advanced job oriented topics !
                            </p>
                        </Col>
                        <Col className="middle"><h3>Java Development Opportunities</h3><br />
                            <p className="pjava">Enterprise Applications Development</p>
                            <p className="datajava"></p>
                            <p className="pjava">Mobile Applications (Android)</p>
                            <p className="machinejava"></p>
                            <p className="pjava">Decent Pay Packages for Java-J2EE Professionals</p>
                            <p className="highjava"></p>
                            <p className="pjava">Job Openings in Java</p>
                            <p className="jobjava"></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="syadivjava">
                <Container>
                    <h1 className="allBus">Syllabus</h1>
                    <p className="allBus">3 {""} Month,1{""} Week</p>
                    <Row className="row1">
                        <Col>
                            <p>Introduction to Java, JVM Compiler & JDK<br />
                                Setting Up Ecllipse<br />
                                Java Basics<br />
                                Variables<br />
                                Datatypes<br />
                                Static Variables etc<br />
                                Creating Classes, Objects & Methods<br />
                                Control Structures<br />
                                If - Else if - Else<br />
                                Do.. While<br />
                                While<br />
                                For Loops<br />
                                Adv For Loops etc.<br />
                                Arrays<br />
                                String<br />
                                String Operations<br />
                                String Buffer<br />
                                String Builder<br />
                                String Tokenizer<br />
                                Integer, Double etc class & functions<br />
                                Date<br />
                                Date functions<br />
                                Calendar Control<br />
                                DataFormat Class<br />
                                SimpleDateFormat Class<br />
                                JAVA Mutable Concept



                            </p>
                        </Col>
                        <Col>
                            <p>Logic Building Sessions - with practicals - e.g. factorial, pattern etc<br />
                                Access Modifies - Public, Private, Protected & Default<br />
                                Packages<br />
                                OOPS Concepts<br />
                                - Inheritance<br />
                                IS-A relationship<br />
                                Has-A relationship<br />
                                - Polymorphism<br />
                                Overloading<br />
                                Overriding<br />
                                - Encapsulation<br />
                                Creating Java Beans<br />
                                Java Beans as Transport Object<br />
                                - Abstraction<br />
                                Abstract Class<br />
                                Interface<br />
                                Nesting of Classes, Interface & Abstract Class<br />

                                Collection Framework & Generics<br />
                                Vectors<br />
                                Enumeration<br />
                                List Interface<br />
                                ArrayList<br />
                                LinkedList<br />
                                Using Generics & Non Generics in Collections<br />
                                Set Interface<br />
                                HashSet<br />
                                Map Interface<br />
                                HashMap</p>
                        </Col>
                        <Col>
                            <p>Exception Handling<br />
                                Using Try..Catch...Finally Block<br />
                                Collection Framework & Generics<br />
                                Vectors<br />
                                Enumeration<br />
                                List Interface<br />
                                ArrayList<br />
                                LinkedList<br />
                                Using Generics & Non Generics in Collections<br />
                                Set Interface<br />
                                HashSet<br />
                                Map Interface<br />
                                HashMap<br />
                                Using java.util.Collections Class<br />
                                Collection Sort<br />
                                Collection Shuffle<br />
                                Comparator Interface<br />
                                Lamda Experssions (Latest)<br />
                                Functional Interface<br />
                                Looping Through Collections<br />
                                Calling Methods<br />

                                File IO<br />
                                IO Streams examples<br />
                                File Input Output examples<br />
                                Serialization<br />
                                JAVA MAIL API<br />
                                Configuration<br />
                                Sending Mail Through JAVA using GMAIL</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacex">
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

export default Java;
