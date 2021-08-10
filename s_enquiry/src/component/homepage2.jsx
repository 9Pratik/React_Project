import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card"
import { CardGroup } from "react-bootstrap";
import image from "./imges/institute01.jpg";
import test from "./imges/test.png"
import web from "./imges/web.png";
import python from "./imges/lopy.png"
import sql from "./imges/data.png";
import Col from "react-bootstrap/Col";
import groupstudy from "./imges/grpstudy.jpg";
import '../component/homepage2.css'
import Footer from "./footer";
import Header from "./Header";
import java from "./imges/java.png"
import dev from "./imges/dev.jpeg"
import net from "./imges/net.png"
import aws from "./imges/aws.png"
import Machine from "./imges/machine.png"
import { BiTimeFive } from "react-icons/bi"
import html from "./imges/html.png";
import javascript from "./imges/javscript.jpg";

class Home2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    handleLink = () => {
        this.setState({
            show: true
        })
    }
    handleHide = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className="color">
                <Header />
                <div>
                    <h3 className="homehead1">Carrier Oriented Courses</h3>
                    <p className="homespace"></p>
                </div>
                <div>
                    <CardGroup>
                        <div className="row">
                        <div className="col-sm-4">
                                <Card>
                                    <Card.Body className="size">
                                        <Card.Title><img src={javascript} className="htmls2"></img><b>Javascript</b></Card.Title>
                                        <Card.Text>
                                            Searching for advanced scripting language courses to upgrade your aptitudes? On the off chance that indeed, at that point Python language is the ideal counterpart for you...
                                        </Card.Text>
                                        <Navbar>
                                            <NavLink to="/python"><button className="btn-primary">More</button></NavLink>
                                        </Navbar>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Body className="size">
                                        <Card.Title><img src={html} className="htmls2"></img><b>HTML</b></Card.Title>
                                        <Card.Text>
                                            Searching for advanced scripting language courses to upgrade your aptitudes? On the off chance that indeed, at that point Python language is the ideal counterpart for you...
                                        </Card.Text>
                                        <Navbar>
                                            <NavLink to="/python"><button className="btn-primary">More</button></NavLink>
                                        </Navbar>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Body className="size">
                                        <Card.Title><img src={python} className="htmls2"></img><b>Python</b></Card.Title>
                                        <Card.Text>
                                            Searching for advanced scripting language courses to upgrade your aptitudes? On the off chance that indeed, at that point Python language is the ideal counterpart for you...
                                        </Card.Text>
                                        <Navbar>
                                            <NavLink to="/python"><button className="btn-primary">More</button></NavLink>
                                        </Navbar>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Body className="size">
                                        <Card.Title ><img src={test} className="htmls"></img><b>Software Testing</b></Card.Title>
                                        <Card.Text>
                                            Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free.It involves execution of software/.
                                        </Card.Text>
                                        <Navbar>
                                            <NavLink to="/Testing"><button className="btn-primary">More</button></NavLink>
                                        </Navbar>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-4">
                                <Card>
                                    <Card.Body className="size">
                                        <Card.Title><img src={sql} className="htmls2"></img><b>SQL</b></Card.Title>
                                        <Card.Text>
                                            SQL can be used to share and manage data, particularly data that is found in relational database management systems, which include data organized into tables.                                         </Card.Text>
                                        <Navbar>
                                            <NavLink to="/Sql"><button className="btn-primary">More</button></NavLink>
                                        </Navbar>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <h3 className="morecourse1"><button onClick={this.handleLink}>View More</button></h3>
                        {this.state.show ?
                            <div className="row">
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title><img src={web} className="htmls"></img><b>WebDesign</b></Card.Title>
                                            <Card.Text>
                                                Web Designing training
                                                Are you creative? The web designing course is a very exciting career option for you. Our Web designing classes consists of HTML/HTML5, CSS/CSS3...
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/web"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title className="red"><img src={java} className="htmls"></img><b>JAVA</b></Card.Title>
                                            <Card.Text>
                                                Java programming language was originally developed by Sun Microsystems which was initiated by James Gosling and released in 1995 as core component of Sun Microsystems'...
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/Java"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title><img src={dev} className="htmls"></img><b>Devops</b></Card.Title>
                                            <Card.Text>
                                                DevOps methodology recognizes the interdependence of the two groups namely the Development and the Operations groups. By integrating these functions as one team or department....
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/devops"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title><img src={net} className="htmls"></img><b>Dot Net</b></Card.Title>
                                            <Card.Text>
                                                Searching for advanced scripting language courses to upgrade your aptitudes? On the off chance that indeed, at that point Python language is the ideal counterpart for you...
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/dotnet"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title><img src={aws} className="htmls"></img><b>AWS</b></Card.Title>
                                            <Card.Text>
                                                Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 165 fully featured services from data centers globally...
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/aws"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card>
                                        <Card.Body className="size">
                                            <Card.Title><img src={Machine} className="htmls"></img><b>Machine Learning</b></Card.Title>
                                            <Card.Text>
                                                DevOps methodology recognizes the interdependence of the two groups namely the Development and the Operations groups. By integrating these functions as one team or department....
                                            </Card.Text>
                                            <Navbar>
                                                <NavLink to="/machine"><button className="btn-primary">More</button></NavLink>
                                            </Navbar>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <h3 className="morecourse1"><button onClick={this.handleHide}>View Less</button></h3>

                            </div> : null}
                    </CardGroup>
                </div>
                <div>
                    <Footer />
                </div>
            </div >
        )

    }
}


export default Home2;