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
import "../component/Sql.css"
import Header from "./Header";
const Sql = () => {
    return (
        <div className="color">
            <Header />
            <div className="spaceTest">

            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3>Learn SQL Database</h3><br />
                            <p>About Oracle 11g/12c SQL Certification Course

                                In Today's World Database is need of every Organization to manage their business.

                                Hence SQL is used to access and manage database

                                For IT Freshers or Experienced : SQL is Generally Asked in Almost All Technical Interviews, hence it is Must to know Programming Language

                                For Non - IT Freshers & Prfessionals : Learning SQL helps you get better job opportunities in creating MIS reports.

                                Prerequiste - None. Any one can learn and implement
                            </p>
                        </Col>
                        <Col className="middle"><h3>Benefits in Learning Oracle SQL</h3><br />
                            <p className="sqlp">Database Implementation in Industries</p>
                            <p className="datasql"></p>
                            <p className="sqlp">Jobs in Both IT & Non IT Fields</p>
                            <p className="machinesql"></p>
                            <p className="sqlp">Decent Pay Packages</p>
                            <p className="highsql"></p>
                            <p className="sqlp">Enterprise Application Implementations</p>
                            <p className="jobsql"></p>
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
                            <p><b>Oracle Basics</b><br />
                                Database models<br />
                                ER Model Overview<br />
                                Data types<br />
                                Understanding Test Database<br />
                                Basics Queries<br />
                                Arithmetic and String functions<br />
                                DML Operations - Insert, Update and Delete<br />
                                Data Filters Using Operators<br />
                                DISTINCT<br />
                                BETWEEN<br />
                                IN<br />
                                LIKE<br />
                                NOT<br />
                                NULL<br />
                                AND, OR, NOT etc<br />

                                Using Complex Data Filtering Techniques<br />
                                Data Sorting<br />
                                Ascending Order<br />
                                Desending Order<br />
                                Complex Sorting<br />
                                String Functions<br />
                                Lowercase<br />
                                Uppercase<br />
                                In string<br />
                                Sub String<br />
                                length<br />
                                Padding etc
                            </p>
                        </Col>
                        <Col>
                            <p>Number Functions<br />
                                number formatting<br />
                                Round<br />
                                Trunc<br />
                                Mode etc.<br />
                                currency formatting<br />
                                convert from string to number and vice versa etc.<br />
                                Date Functions<br />
                                Date Formatting<br />
                                Date difference<br />
                                last day etc<br />
                                Conversion from String to Date and vice versa etc.<br />
                                Nested Functions<br />
                                Handle Null Values :NVL, NVL2, NULLIF, COALESCE<br />
                                Conditional Expressions - Case and Decode<br />
                                Groups<br />
                                Using Grouping functions - AVG, MIN, MAX, COUNT, DISTINCT COUNT, HAVING etc<br />
                                Group Filters - HAVING<br />
                                Joins<br />
                                Cartesian Product<br />
                                Equi Joins<br />
                                Non Equi Joins<br />
                                Left Outer Join<br />
                                Right Outer Join<br />
                                Full Outer Join<br />
                                Left Outer Join<br />
                                Self Join</p>
                        </Col>
                        <Col>
                            <p>DML - Data Manipulation Language<br />
                                Insert<br />
                                Update<br />
                                Delete<br />
                                Truncate<br />
                                Advanced DML Operations<br />
                                Insert, Update & Delete using Queries & Sub Query<br />
                                Transaction Mgt (T SQL)<br />
                                Commit<br />
                                Rollback<br />
                                Read Consistency<br />
                                DDL - Create, Alter and Drop<br />
                                Tables<br />
                                Indexes<br />
                                Sequence<br />
                                Synonyms<br />
                                Constraints<br />
                                Primary Key<br />
                                Unique<br />
                                Foreign Key<br />
                                Not Null<br />
                                Check<br />
                                Foreign Key Effect<br />
                                Effect of Foreign Keys on DML & DDL Operations<br />
                                Creating Tables Using Queries<br />
                                Rolups & Cubes<br />
                                DCL - Data Control Language<br />
                                Managing Security<br />
                                Creating Users & Roles<br />
                                Manage User & Role Privileges<br />
                                Interview Prepare Session<br />
                                Project</p>
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
                            <Col xs={6} className="flex"><p style={{ border: "1px solid red " }}>hello222</p>

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

export default Sql;
