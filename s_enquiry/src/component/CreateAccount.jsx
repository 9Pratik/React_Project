import React, { Component } from 'react'
import "../component/StudentLogin.css";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaTrashAlt, FaPen, FaClipboardList } from "react-icons/fa";

export class CreateAccount extends Component {
    render() {
        return (
            <div className="backgrd">
                <div className="form">
                    <div className="size">
                        <div className="imgback"></div>
                        <h1 className="head">Student Login</h1>
                    </div>
                    <div className="adjust">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                        <div><FaTrashAlt /> <Form.Control type="email" placeholder="Enter email" className="formLength" /></div>   

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="formLength" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>

            </div>

        )
    }
}

export default CreateAccount;
