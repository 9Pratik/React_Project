import React, { Component } from 'react'
import Header from './Header'
import "../component/UserProfile.css"
import { Container, Table } from 'react-bootstrap'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import profile from "../component/imges/anime.jpg"

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="layout">
                    <Container>
                        <Row>
                            <Col xs={4} className="sideprofile">
                                <Card style={{ width: '20rem' }} className="mt-2">
                                    <Card.Img variant="top" src={profile} className="anime" />
                                    <input type="file" className="file" />
                                    <p className="userline"></p>
                                    <Card.Body>
                                        <Card.Title><b>User Profile</b></Card.Title>
                                        <p className="userline"></p>
                                        <Card.Text>
                                          <p>First Name :</p>
                                          <p>Last  Name :</p>
                                          <p>Phone.No :</p>
                                          <p>Email :</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={8} className="sidebar">
                                <p>DashBoard</p>
                                <marquee>New Notification</marquee>
                                <h4>Time table:</h4>
                                <Table>
                                    <thead>
                                        <th></th>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        )
    }
}

export default UserProfile
