import React, { Component } from 'react'
import Header from './Header'
import "../component/AdminProfile.css"
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import profile from "../component/imges/anime.jpg"
import Table from "react-bootstrap/Table"
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'

export class AdminProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            student: [],
            show: false,

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

    handleShow = () => {
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
            <div className="ProfileBack">
                <Header />
                <div className="layout1">
                    <Container>
                        <Row>
                            <Col xs={4} className="sideprofile1">
                                <Card style={{ width: '20rem' }} className="mt-2">
                                    <Card.Img variant="top" src={profile} className="anime1" />
                                    <input type="file" className="file" />
                                    <p className="userline1"></p>
                                    <Card.Body>
                                        <Card.Title><b>Admin Profile</b></Card.Title>
                                        <p className="userline1"></p>
                                        <Card.Text>
                                            <p>First Name :</p>
                                            <p>Last  Name :</p>
                                            <p>Phone.No :</p>
                                            <p>Email :</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={8} className="sidebar1">
                                <h3>Notification:</h3>
                                <marquee style={{color:"red"}}>Notification Institute</marquee>
                            </Col>
                        </Row>
                    </Container>
                    <div>
                        <h3 className="regStud">All Register Student Information: <button onClick={this.handleShow} className="btn-primary float-right">click here</button></h3>
                        {this.state.show ? <Table variant="dark" >
                            <thead >
                                <th>Sr.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {this.state.student.map((member, index) =>
                                    <tr key={member.id}>
                                        <td>{index + 1}</td>
                                        <td>{member.fname} </td>
                                        <td>{member.lname}</td>
                                        <td>{member.phone}</td>
                                        <td>{member.email} </td>
                                        <td>
                                            <Link > <Button onClick={() => this.deleteMember(member)}>Delete</Button></Link>
                                            <Link > <Button onClick={() => this.handleShow(member)}>Edit</Button></Link>
                                        </td>
                                    </tr>
                                )};
                                <tfoot><button className="btn-primary" onClick={this.handleHide}>Close</button></tfoot>
                            </tbody>
                        </Table> : null}

                        <h3 className="regStud">All Register Student by SignUp Information: <button onClick={this.handleShow} className="btn-primary float-right">click here</button></h3>
                        <h3 className="regStud">Data Of Fees Detail : <button onClick={this.handleShow} className="btn-primary float-right">click here</button></h3>


                    </div>
                </div>
            </div>
        )
    }
}

export default AdminProfile
