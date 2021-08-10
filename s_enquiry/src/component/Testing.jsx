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
import '../component/Testing.css'
import Header from "./Header";


class Testing extends React.Component{
    render(){
        return(
        <div className="color">
            <Header />
            <div className="SqlSpace">

            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3> About Software Testing Certification Course</h3><br />
                            <p>

                                Software Testing is highly specialized and amongst the most sought fields in the IT Industry to make your application bug free

                                Mainly Two Types - Manual Testing & Automation Testing

                                Modules Covered

                                Core Software Testing Concepts
                                Advanced Software Testing Concepts
                                ISTQB Certification Syllabus
                                Mobile APPs & Web Application Testing With Live Projects on Both Bugzilla Defect Tracking Tooletc
                                Prequisites - None ! Anyone can learn & Implement Manual Testing as no programming required !
                            </p>
                        </Col>
                        <Col className="middle"><h3>Software Testing in IT Industry</h3><br />
                            <p className="testp">Enterprise Applications Implementation</p>
                            <p className="datatest"></p>
                            <p className="testp">Easy to Learn Manual Testing</p>
                            <p className="machinetest"></p>
                            <p className="testp">Good Pay Packages</p>
                            <p className="hightest"></p>
                            <p className="testp">Enterprise Application Implementations</p>
                            <p className="jobtest"></p>
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
                            <p>ITesting Fundamentals<br />
                                Quality Control<br />
                                Quality Assurance<br />
                                Functional Tests<br />
                                Non Functional Tests<br />
                                Performance Testing<br />
                                Usability Testing<br />
                                Reliability Testing<br />
                                Security Testing<br />
                                Life Cycles<br />
                                SDLC - Software Development Life Cycle<br />
                                STLC - Software Testing life Cycle<br />
                                Difference between SDLC & STLC<br />
                                Testing Types<br />
                                Black Box Testing<br />
                                White Box Testingm<br />

                                Test Design Techniques<br />
                                Static testing<br />
                                Review Process<br />
                                Roles and Responsibilities of Review Process<br />
                                Test Case Preparation<br />
                                Boundary Value Analysis<br />
                                Equivalence Partitioning<br />
                                Software Verification<br />
                                Software Validation<br />
                                Stress Testing<br />
                                Load Testing<br />
                                Endurance Testing<br />
                                Testing Metrics


                            </p>
                        </Col>
                        <Col>
                            <p>Regression Testing<br />
                                Addition of Modules<br />
                                Testing on Addition of Modules<br />
                                Database Testing<br />
                                UAT - User Acceptance Testing<br />
                                Alpha Testing<br />
                                Beta Testing<br />
                                ISTQB Certification Exam Preparation - 100% Passing Result Till Date<br />
                                Multiple Live Project Testing on - Static Websites, Dynamic Web Appication and Mobile APP<br />

                                Software Testing Models<br />
                                WaterFall Model<br />
                                V Model<br />
                                Agile Methodology<br />
                                Iterative Model<br />
                                RAD Model<br />
                                Agile Testing
                                Advantages of Models<br />
                                Dis-advantages of Models<br />
                                Test Cases<br />
                                Understanding Project<br />
                                Writing Test Cases in Excel<br />
                                Executing Test Cases<br />
                                Form Based<br />
                                Mobile APP Based<br />
                                Module Based<br />
                                Integration Based<br />
                                Full Project Based<br />
                                Defect Logging & Management in Excel

                            </p>
                        </Col>
                        <Col>
                            <p>Testing Tool Support<br />
                                Database Testing<br />
                                SQL Concepts<br />
                                Database Testing Process<br />
                                SQL Queries<br />
                                Select<br />
                                Insert<br />
                                Update<br />
                                Delete<br />
                                etc.<br />
                                Risk Analysis<br />
                                Bugzilla Defect Management Tool<br />
                                Introduction<br />
                                Installation & Configuration<br />
                                Creating Account<br />
                                Creating Project<br />
                                Writing Test Cases<br />
                                File a Bug<br />
                                Generate Reports<br />
                                Graph Report<br />
                                Line Report<br />
                                Pie Report<br />
                                Multiple Live Projects Included
                            </p>
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
}

export default Testing;
