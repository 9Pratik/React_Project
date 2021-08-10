import React, { Component } from 'react'
import student from "./imges/stu.png"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import { TiSocialInstagram } from "react-icons/ti"
import { AiFillTwitterCircle } from "react-icons/ai"
import '../component/Admin.css'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { FaArrowCircleLeft } from "react-icons/fa"

export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        var data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        fetch("http://localhost:3006/api/insert", {
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
            if (data == "success") {
                this.setState({ msg: "Thanks for registering" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    render() {
        return (
            <div >
                <div className="back">
                    <Navbar>
                        <NavLink to="/"><p className="homepageback"><FaArrowCircleLeft />go to HomePage</p></NavLink>
                    </Navbar>
                    <div className="white">
                        <h1 className="logo"><img src={student} style={{ width: '70px' }} /></h1>
                        <h3 style={{ marginLeft: "44%" }}>Admin Login</h3>
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}

                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Label style={{ float: "right" }}>
                                    <Navbar>
                                        <NavLink to="/forgot">Forgot Password?</NavLink>
                                    </Navbar>
                                </Form.Label><br />
                                <button className="midle btn-primary" type="submit">
                                    Login
                                </button>
                            </Form>
                        </div>
                        <div className="dark">
                            <p><b>OR Sign Up Using </b></p>
                            <a href="https://www.facebook.com/"><FaFacebook className="ions1" /></a>
                            <a href="https://www.instagram.com/"><TiSocialInstagram className="ions2" /></a>
                            <a href="https://twitter.com/login"> <AiFillTwitterCircle className="ions3" /></a><br /><br />
                            <p><b>Have Not Account Yet? <br />
                                <Navbar className="cent">
                                    <NavLink to="/sign">SignUp</NavLink>
                                </Navbar></b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin
