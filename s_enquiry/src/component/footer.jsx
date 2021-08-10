import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../component/footer.css"
import log from "./imges/LOG.jpeg"

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            course:'',
            msg:'',
        }
    }
 
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (event) => {
        let self=this
        event.preventDefault()
        var data = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            course:this.state.course,
            message:this.state.message
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
                    msg: "Data is successfully Sent",
                   
                 });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }


    render(){
    return (
        <div className="Back-color">
            <div className="space-div">
                <div className="add">
                    <p>Reach Us <br />Call / SMS / WhatsApp - +91-7609944064 <br />Mon to Sat - 10.15am to 7pm & <br />Sunday - 10.15am to 4pm <br /> Mail us - info@studyspace.co.in</p>
                </div>
                <div className="Box">
                    <p>{this.state.msg}</p>
                <center><h3>Detail Fees Detail</h3></center>
                        <Container>
                            <Row>
                                <Col xs={6} className="red">
                                    <Form className="red">
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Enter Name" className="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter Email" className="text" name="email" value={this.state.email} onChange={this.handleChange}  />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Control type="phone" placeholder="Enter Phone" className="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCourse">
                                            <Form.Control type="text" placeholder="Enter Course" className="text" name="course" value={this.state.course} onChange={this.handleChange} />
                                        </Form.Group>
                                       
                                      <button className="btn-primary" onClick={this.handleSubmit}>Submit</button>
                                    </Form>
                                </Col>
                                <Col xs={6} className="red">
                                    <Form.Group>
                                        <Form.Control as="textarea" placeholder="message" className="message-box" rows="5" name="message" value={this.state.message} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                </div>
            </div>
            <div>
                <Container>
                    <Row>

                        <Col xs={4}><h1>StudySpace</h1><img src={log} className="bordpic" /></Col>
                        <Col><b>Company</b><br /><br />
                            <p>About <br /><br />

                                Trems of Use<br /><br />

                                Careers<br /><br />

                                Blog
                            </p></Col>
                        <Col><b>Community</b> <br /><br />
                            <p>Refer a Friend <br /><br />

                                Lerner Forums<br /><br />

                                Gift Cards<br /><br />

                                Free Classes<br /><br />

                                Free Materials</p></Col>
                        <Col className="red"><b>Contact</b> <br /><br />
                            <p>info@studyspace.co.in<br /><br />

                                www.studyspace.com<br /><br />

                                26707304</p></Col>

                    </Row>
                </Container>
            </div>
            <div className="colors fotcopy">
                <div className="d-flex justify-content-center p-0">
                    <p>© 2020-2021 | Pratik Ivnathe Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
}


export default Footer;
