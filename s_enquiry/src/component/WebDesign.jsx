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
import '../component/WebDesign.css'
import Header from "./Header";
const WebDesign = () => {
    return (
        <div className="color">
            <Header />
            <div className="spaceweb">

            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3> Website Development Course Overview</h3><br />
                            <p>
                                First Step in Developing a Web Based Project
                                A Step By Step Instuctor Led Training will help you design a Responsive Website meaning one design for all devices like desktop, tablets, phablets, mobile etc
                                Hence, to Learn Responsive Website Development our experts have prepared best curriculum that suffice most industry requirements.
                                Curriculum Covers
                                Core Courses - HTML, CSS, Javascript
                                Advanced Courses - JQuery, Bootstrap, Media Query and Angular JS
                                Mini Project - At the End of Course
                                Training Methodology - 25% Theory & 75% Hands On
                                Who Can Learn - Both IT & Non IT People
                            </p>
                        </Col>
                        <Col className="middle"><h3>Website Development Opportunities</h3><br />
                            <p className="pweb">Web Based Project</p>
                            <p className="dataweb"></p>
                            <p className="pweb">Is it Core Technology ?</p>
                            <p className="machineweb"></p>
                            <p className="pweb">Decent Pay Packages</p>
                            <p className="highweb"></p>
                            <p className="pweb">Job Openings in Web Development</p>
                            <p className="jobweb"></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="syadiv">
                <Container>
                    <h1 className="allBus">Syllabus</h1>
                    <p className="allBus">3 {""} Month,1{""} Week</p>
                    <Row className="row1">
                        <Col>
                            <p>Web Design Overview<br />
                                About Responsive Website Designing<br />
                                HTML & HTML 5<br />
                                Table<br />
                                Types of Lists<br />
                                Forms<br />
                                Head tag & Meta tag<br />
                                Layout<br />
                                Classes and ID<br />
                                Div Tags<br />
                                Section Tags<br />
                                HTML 5 new element<br />
                                HTML 5 Validations<br />
                                Onpage SEO<br />
                                Implementing OnPage SEO<br />
                                Using Meta Tags<br />
                                Title Tag<br />
                                Description Tag<br />
                                View Port<br />
                                Page Header Tags - H1, H2, H3, H4 etc<br />

                                CSS & CSS3<br />
                                Basics<br />
                                Background Image & Colors<br />
                                Selectors<br />
                                Declaration & Types<br />
                                Fonts & Text Properties<br />
                                Text Shadow, Gradients etc.<br />
                                Overflow & Display Properties etc.<br />
                                Effects - Border Raidus, Box Shadow etc

                            </p>
                        </Col>
                        <Col>
                            <p>JavaScript<br />
                                Basics<br />
                                Variables, Operators, Data Types etc<br />
                                Control Structures - If-Else, while, Do while, For Loops<br />
                                Logic Building Sessions<br />
                                Creating Functions<br />
                                Inbuilt Functions - Dates, Strings, Numerics etc<br />
                                Arrays<br />
                                Objects<br />
                                Events<br />
                                Statements<br />
                                Regular Expressions<br />
                                HTML DOM<br />
                                Alert box<br />
                                jQuery<br />
                                Basics<br />
                                Effects<br />
                                DOM Parsing<br />
                                Form Validations<br />
                                Events<br />
                                functions<br />
                                Creating Images<br />
                                Dynamic CSS Programming<br />
                                Hide and show element<br />

                                Bootstrap<br />
                                Basics<br />
                                Grid system<br />
                                Tables<br />
                                Images<br />
                                Button<br />
                                Font Awesome & Glyphic Icons<br />
                                Pagination<br />
                                Forms
                            </p>
                        </Col>
                        <Col>
                            <p>AngularJS<br />
                                Introduction<br />
                                Expression<br />
                                Directives<br />
                                Model<br />
                                Controller<br />
                                DataBinding<br />
                                Scope<br />
                                Options<br />
                                Filters<br />
                                Validations<br />
                                Google APIs (Overview)<br />
                                Overview How to use Below :<br />
                                Note - Programming part will be covered in PHP as server side coding is required. However you will get fair idea here how to use these APIs.<br />

                                Creating Google Project<br />
                                Google MAPs Locator<br />
                                Google Captcha<br />
                                Google Places API<br />
                                IMAGE Processing (new)<br />
                                Create images for Website<br />
                                CANVA<br />
                                Pexels (for royalty free images)<br />
                                Project<br />
                                Git Hub Overview<br />
                                Registering<br />
                                How to use<br />
                                Deploy Your Website (Project) on GitHub on Internet</p>
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

export default WebDesign;
