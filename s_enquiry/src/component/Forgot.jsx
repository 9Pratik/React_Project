import React, { Component } from 'react'
import { Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import{ RiAdminFill } from "react-icons/ri"
import "../component/Forgot.css"
import { FaArrowCircleLeft } from "react-icons/fa"

export class Forgot extends Component {
    constructor(props){
        super(props)
        this.state={
            email:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="bord">
                <Navbar>
                        <NavLink to="/"><p className="homepagebackfor"><FaArrowCircleLeft />go to HomePage</p></NavLink>
                    </Navbar>
                <RiAdminFill className="admin" />
                <h1>Forgot Password</h1>
                <p className="brod"></p>
                <p>Enter your email and we will send you a link to reset your password</p>
                <input type="text" placeholder="Enter Email"  value={this.state.email} onChange={this.handleChange} /><br /><br />
                <button>Reset Password</button><br />
                 <Navbar className="bac">
                    <NavLink to="/admin">Back to Sign-In</NavLink>
                </Navbar>
                </div>
                
            </div>
        )
    }
}

export default Forgot
