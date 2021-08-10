import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card"
import { CardGroup } from "react-bootstrap";
import image from "./imges/institute01.jpg";
import log from "./imges/LOG.jpeg"
import html from "./imges/html.png";
import web from "./imges/web.png";
import javascript from "./imges/javscript.jpg";
import Col from "react-bootstrap/Col";
import groupstudy from "./imges/grpstudy.jpg";
import Footer from "./footer";
import '../component/home_page.css'
import Header from "./Header";
import python from "./imges/lopy.png"
import sql from "./imges/data.png";
import { RiAdminFill } from "react-icons/ri"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            message:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleSubmit = (event) => {
        let self=this
        event.preventDefault()
        var data = {
            email:this.state.email
        }
        console.log(data)
        fetch("http://localhost:3004/insertReg", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data.affectedRows)
            if (data.affectedRows= 1) {
                self.setState({ 
                    message: "Thanks for registering",
                    email:""
                 });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    render(){
    return (
        <div className="color">
            <Header />
            <div className="colorSpace">
                <Container>
                    <Row>
                        <Col xs={8} ><h3>Your New Career Start From Here</h3><br />
                            <h4>Sign Up to our mailing list and get free welcome pack to kick start your training empowerment your future</h4>
                            <input type="email" placeholder="Enter Your email" name='email' value={this.state.email} onChange={this.handleChange} />
                            <button className="btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                            <p style={{color:"green"}} className="mt-2">{this.state.message}</p>
                        </Col>
                        <Col >
                            <Card >
                                <Card.Img variant="top" src={image} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <h3 style={{ textAlign: "center" }}>Popular Courses</h3>
                <p className="line"></p>
                <CardGroup>
                    <Card>
                        <Card.Body className="size1">
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
                    <Card>
                        <Card.Body className="size1">
                            <Card.Title><img src={python} className="htmls2"></img><b>Python</b></Card.Title>
                            <Card.Text>
                                Searching for advanced scripting language courses to upgrade your aptitudes? On the off chance that indeed, at that point Python language is the ideal counterpart for you...
                            </Card.Text>
                            <Navbar>
                                <NavLink to="/python"><button className="btn-primary">More</button></NavLink>
                            </Navbar>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className="size1">
                            <Card.Title><img src={sql} className="htmls2"></img><b>SQL</b></Card.Title>
                            <Card.Text>
                                SQL can be used to share and manage data, particularly data that is found in relational database management systems, which include data organized into tables.                                         </Card.Text>
                            <Navbar>
                                <NavLink to="/Sql"><button className="btn-primary">More</button></NavLink>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <Navbar>
                <NavLink to="/home"><h3 ><button className="morecourse">More Courses</button></h3></NavLink>
            </Navbar>
            <div>
                <Container>
                    <Row>
                        <Col xs={8}><h3>Experiences from our Students Learners</h3><br />
                            <p>Learning experience refers to any interaction, course, program, or other experience in which
                                learning takes place, whether it occurs in traditional academic settings (schools, classrooms)
                                or nontraditional settings (outside-of-school locations, outdoor environments students learning
                                through games and interactive software applications).

                                Technological shifts that have occurred in the design and delivery of education to students,
                                and it most likely represents an attempt to update conceptions of how, when, and where learning
                                does and can take place.
                            </p>
                        </Col>
                        <Col><img src={groupstudy} className="groupstudy"></img></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}
}

export default Home;
