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
import '../component/OnlinePayment.css'
import Footer from "./footer";
import Header from "./Header";
import pay1 from "./imges/Paytm.jpeg"
import pay2 from "./imges/phonepy.png"
import pay3 from "./imges/Bhim.png"
import Modal from "react-bootstrap/Modal"


class OnlinePayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show1: false,
            show2:false,
            count:0
        }
    }

    handleClose1 = () => {
        this.setState({
            show1: false
        })
    }
    handleClose2 = () => {
        this.setState({
            show2: false
        })
    }
    handleShow1 = () => {
        this.setState({
            show1: true
        })
    }
    handleShow2 = () => {
        this.setState({
            show2: true
        })
    }
    handleCheck=()=>{
    this.setState({
        count:1
    })  
    
    alert("please check box")
    
   }

    render() {
        return (
            <div className="color">
                <Header />
                <div className="contact">
                    <Container>
                        <Row>
                            <h1 className="head">Online Payment</h1>
                        </Row>
                    </Container>
                </div>
                <div className="space7">
                    <div className="payment">
                        <p><b>Privacy Policy</b>
                            <span className="read1"><button onClick={this.handleShow1}>Read</button></span><p className="payborder"></p>
                        </p>
                        <p><b>Terms & Condtions</b>
                            <span className="read2"><button onClick={this.handleShow2}>Read</button></span><p className="payborder"></p>
                        </p>
                        <p className="check"><b><input type="checkbox" className="checknav" />I Fully  Understood and agree with all  above mentioned statements. </b></p>
                        <button type="submit" className="btn-primary" value={this.state.check} onClick={this.handleCheck} >Submit</button>

                    </div>
                    <Container className="three">

                        <img src={pay1} className="pay" />
                        <img src={pay2} className="pay" />
                        <img src={pay3} className="pay" />

                    </Container>
                </div>

                <Modal show={this.state.show1} onHide={this.handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Privacy Policy</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>A privacy policy is a statement or legal document (in privacy law) that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data.[1] Personal information can be anything that can be used to identify an individual, not limited to the person's name, address, date of birth, marital status, contact information, ID issue, and expiry date, financial records, credit information, medical history, where one travels, and intentions to acquire goods and services.[2] In the case of a business, it is often a statement that declares a party's policy on how it collects, stores, and releases personal information it collects. It informs the client what specific information is collected, and whether it is kept confidential, shared with partners, or sold to other firms or enterprises.[3] Privacy policies typically represent a broader, more generalized treatment, as opposed to data use statements, which tend to be more detailed and specific.
                        The exact contents of a certain privacy policy will depend upon the applicable law and may need to address requirements across geographical boundaries and legal jurisdictions. Most countries have their own legislation and guidelines of who is covered, what information can be collected, and what it can be used for. In general, data protection laws in Europe cover the private sector, as well as the public sector. Their privacy laws apply not only to government operations but also to private enterprises and commercial transactions.[4] </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.show2} onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Terms and Condtions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        What are Terms and Conditions Agreements?

                        A Terms and Conditions agreement acts as legal contracts between you (the company) who has the website or mobile app, and the user who accesses your website/app.

                        Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).

                        Your Terms and Conditions agreement will be uniquely yours. While some clauses are standard and commonly seen in pretty much every Terms and Conditions agreement, it's up to you to set the rules and guidelines that the user must agree to.

                        You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, where you maintain your legal rights against potential app abusers, and so on.

                        Terms and Conditions agreements are also known as Terms of Service or Terms of Use agreements. These terms are interchangeable, practically speaking.

                        Check out our Terms and Conditions FAQ for more helpful insight into these important agreements.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    <Footer />
                </div>
            </div >
        )
    }
}




export default OnlinePayment;