import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "react-bootstrap";

let sessionsVal = 0

function SessionList() {


    const [startDate, setStartDate] = useState(new Date());



    const [formData, setFromData] = useState({
        firstName: "",
        lastName: "",
        time: '00:00',
        startDate: "",
        phoneNumber: "",
        password: "",
        topic: ""
    })

    const [data, setData] = useState([])

    function handle(e) {

        const { value, name } = e.target;

        setFromData(() => {
            return {
                ...formData,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const { firstName, lastName, time, phoneNumber, password, topic, startDate } = formData

        if (firstName === "") {
            document.getElementById('error_fname').innerHTML = "First Name is required";
        }
        else if (lastName === "") {
            document.getElementById('error_lname').innerHTML = "Last Name is required";
        }
        else if (time === "") {
            document.getElementById('error_time').innerHTML = "Time is required";
        }
        else if (phoneNumber === "") {
            document.getElementById('error_phno').innerHTML = "Phone Number is required";
        }
        else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            document.getElementById('error_phno').innerHTML = "invalid phone number";
        }
        else if (password === "") {
            document.getElementById('error_pwd').innerHTML = "Password is required";
        }
        else if (topic === "") {
            document.getElementById('error_topic').innerHTML = "Topic is required";
        }
        else {
            if (!localStorage.getItem('data')) {
                const newObject = {
                    currentUser: `${phoneNumber}`,
                    [`${phoneNumber}`]: {
                        password,
                        "sessions": [{
                            sessionid: sessionsVal + 1,
                            date: startDate,
                            topic: topic,
                            volunteer_no: 1,
                            time: time
                        }]
                    }
                }
                sessionsVal+=1
                localStorage.setItem('data', JSON.stringify(newObject))
            } else {
                const data = JSON.parse(localStorage.getItem('data'))
                if (phoneNumber in data) {
                    const f_password = data[phoneNumber].password
                    if (f_password !== password) {
                        document.getElementById('error_pwd').innerHTML = "Incorrect Password";
                        return
                    } else {
                        console.log(data[phoneNumber].sessions)
                        const updatedSessions = [...data[phoneNumber].sessions,{
                            sessionid: sessionsVal + 1,
                            date: startDate,
                            topic: topic,
                            volunteer_no: 1,
                            time: time
                        }]
                        const updatedObject = {
                            ...data,
                            currentUser : `${phoneNumber}`,
                            [`${phoneNumber}`]:{
                                ...data[phoneNumber],
                                "sessions" : updatedSessions
                            }
                        }
                        
                        sessionsVal+=1
                        localStorage.setItem('data', JSON.stringify(updatedObject))
                    
                    }
                } else {
                    const newObject = {
                        ...data,
                        currentUser: `${phoneNumber}`,
                        [`${phoneNumber}`]: {
                            password,
                            "sessions": [{
                                sessionid: sessionsVal + 1,
                                date: startDate,
                                topic: topic,
                                volunteer_no: 1,
                                time: time
                            }]
                        }
                    }
                    sessionsVal+=1
                    localStorage.setItem('data', JSON.stringify(newObject))
                }
            }
        }

    }

    return (
        <div className="menuPg">
            <Header type="back" />
            <div className="inputForm">
                <div className="rows">
                    <div className="label">First Name</div>
                    <div className="field">
                        <input type="text"
                            name='firstName'
                            onChange={handle}
                        />
                        <span id="error_fname" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Last Name</div>
                    <div className="field">
                        <input type="text"
                            name='lastName'
                            onChange={handle}
                        />
                        <span id="error_lname" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Date</div>
                    <div className="field">
                        {/* <input type="date"
                            name='date'
                            min="2017-01-01"
                            onChange={handle} /> */}
                             <DatePicker selected={startDate} onChange={(date) =>setStartDate(date)} />
                        <span id="error_date" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Time</div>
                    <div className="field">
                        <input type="time"
                            name='time'
                            onChange={handle}
                        />
                        <span id="error_time" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Phone Number</div>
                    <div className="field">
                        <input type="number"
                            name='phoneNumber'
                            onChange={handle}
                        />
                        <span id="error_phno" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Password</div>
                    <div className="field">
                        <input type="password"
                            name='password'
                            onChange={handle}
                        />
                        <span id="error_pwd" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Topic</div>
                    <div className="field">
                        <input type="text"
                            name='topic'
                            onChange={handle}
                        />
                        <span id="error_topic" style={{ color: 'red' }}></span>
                    </div>
                </div>
                <div className="submit">
                <Link to="/confirm"><input type="button" value="SUBMIT" onClick={addData}></input></Link> 
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;