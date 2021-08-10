import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../component/Covid.css"

export class Covid extends Component {
    render() {
        return (
            <div className="Covidback">
                <h1 className="text-center">Covid-19 Guidline</h1>
                <p>
                    The safety of our students and faculty members are of paramount importance. The awakening after the COVID19 pandemic
                    outbreak, and its aftermath has brought many changes in our way of life. This document is for reference to all our
                    stakeholders and is focused on the basic guidelines to be followed by everyone religiously in order to safe guard our institute,
                    our family back home and our society as a whole.
                </p>

                <h4>Thermal Scanning</h4>
                <p> 1. All students coming for inquiry or classes, all faculty members and all housekeeping staff to compulsorily get the
                    thermal scanning done at entrance gate of Institute before entering inside premises.<br />
                    2. This process is to be strictly followed everyday by everyone<br />
                    3. Thermal Scanning team to wear all mandatory PPEs before approaching for temperature measurement.
                    4. Only persons with NO FEVER SYMPTOMS ( temperature less than 99.5 Deg.F) will be allowed to enter premises
                </p>
                <h4>Wear Mask</h4>
                <p>
                    1.All students and faculty members to strictly wear face mask. No taking out of face mask is allowed when inside class,
                    except for drinking water.<br />
                    2. All Faculty members to have tea outside class, away from students
                    3.Everyone visiting institute to carry extra pair of face mask, along with bag arrangement to dispose off the used mask.<br />
                    4.Touching of mask ( intentionally or unintentionally) to be strictly followed by handwash or use of alcohol based
                    sanitizer
                </p>
                <h4>Social Distancing</h4>
                <p>1. Each bench to  be occupied by single student. Subsequent row to be occupied by student in a diagonally opposite
                    seat. <br />
                    2. Social distancing norm to be followed in  reception area and while using washroom </p>
                <h4>Working in Office</h4>
                <p>1. No Handshake or any kind of physical contact is allowed inside institute <br />
                    2. All students and faculty members to bring only basic required items to institute ( Laptop, water bottle, notepad, pen
                    etc) in a small bag. <br />
                    3. All students and faculty members are requested to bring their own alcohol based hand sanitizer and  water
                    bottles.(Though In extreme conditions institute will make the necessary arrangement) <br />
                    4.  Students are not allowed to exchange any of their items. Incase of emergency need they should contact present
                    faculty member <br />
                    5. Protocol of handwash with sanitizer to be strictly followed after coughing, sneezing, toilet use or after touching
                    commonly used items like door handle. </p>
            </div>
        )
    }
}

export default Covid
