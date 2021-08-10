import React, { Component } from 'react'
import { Route,Switch,Router } from 'react-router-dom'
import Home from './home_page'
import Home2 from './homepage2'
import Error from './Error'
import Contact from './Contact'
import SignUp from './SignUp'
import Login from './Admin'
import About from './About'
import WebDesign from './WebDesign'
import Java from './Java'
import MachineLearning from './MachineLearning'
import Python from './Python'
import Covid from './Covid'
import Forgot from './Forgot'
import Testing from './Testing'
import Sql from './Sql'
import Photo from './Photo'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home2} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/sign" component={SignUp} />
                    <Route exact path="/admin" component={Login} />
                    <Route exact path="/Java" component={Java} />
                    <Route exact path="/python" component={Python} />
                    <Route exact path="/machine" component={MachineLearning} />
                    <Route exact path="/Web" component={WebDesign} />
                    <Route exact path="/covid" component={Covid} />
                    <Route exact path="/forgot" component={Forgot} />       
                    <Route exact path="/Sql" component={Sql} />
                    <Route exact path="/Testing" component={Testing} />
                    <Route exact path="/photo"Component={Photo} />
                    <Route component={Error} />

                </Switch>
                
            </div>
        )
    }
}

export default Navigation
