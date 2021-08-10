import React, { Component } from 'react'
import student from "./imges/stu.png"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { AiOutlineMail } from "react-icons/ai"
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../component/SignUp.css"
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { FaArrowCircleLeft } from "react-icons/fa"

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            password: '',
            messag: '',
            student: []
        }
    }

    componentDidMount() {
        let self = this
        fetch("http://localhost:3004/view", {
            method: 'get'

        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad Response from Server")
            }
            return response.json()
        }).then(function (data) {
            self.setState({
                student: data
            })
        }).catch(err => {
            console.log("Caught It", err)
        })
    }

    handleSubmit = (event) => {
        let self = this
        event.preventDefault()

        var data = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }
        console.log(data)
        fetch("http://localhost:3004/insert", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            console.log(data.affectedRows)
            if (data.affectedRows == 1) {
                self.setState({
                    message: "Account Created Successfully...",
                    show: false,
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    password: ''

                })
            }
        }).catch(function (err) {
            console.log(err)
        });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div >
                <div className="back">
                    <Navbar>
                        <NavLink to="/"><p className="homepageback"><FaArrowCircleLeft />go to HomePage</p></NavLink>
                    </Navbar>
                    <h3 className="message">{this.state.message}</h3>
                    <div className="white">
                        <h1 className="logo"><img src={student} style={{ width: '70px' }} /></h1>
                        <h3 style={{ marginLeft: "38%" }}>Create a New Account</h3>
                        <div className="mod1">
                            <Container className="mod1">
                                <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col xs={4} className="mod1"><input type="text" size="30" placeholder="First Name" className="colr" name="fname" value={this.state.fname} onChange={this.handleChange} /></Col>
                                    <Col xs={4} className="mod1"><input type="text" size="30" placeholder="Last Name" className="colr" name="lname" value={this.state.lname} onChange={this.handleChange} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={4} className="mod1"><input type="text" size="30" placeholder="Gamil" className="colr" name="email" value={this.state.email} onChange={this.handleChange} /></Col>
                                    <Col xs={4} className="mod1"><input type="text" size="30" placeholder="Password" className="colr" name="password" value={this.state.password} onChange={this.handleChange} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={4} className="mod1"><input type="text" size="30" placeholder="Phone" className="colr" name="phone" value={this.state.phone} onChange={this.handleChange} /></Col>
                                </Row>
                                <button className="btn" onClick={this.handleSubmit}>Submit</button>
                                <p style={{ textAlign: "center", marginTop: 20 }}><b>Have Already Account?</b><br />
                                    <Navbar className="cent">
                                        <NavLink to="/admin">Login</NavLink>
                                    </Navbar></p>
                                </Form>
                            </Container>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
