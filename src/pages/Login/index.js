import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SessionList() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('00:00');
    return (
        <div className="menuPg">
            <Header type="back" />
            <div className="inputForm">
                <div className="rows">
                    <div className="label">First Name</div>
                    <div className="field">
                        <input type="text" />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Last Name</div>
                    <div className="field">
                        <input type="text" />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Date</div>
                    <div className="field">
                    <DatePicker selected={startDate} onChange={(date) =>setStartDate(date)} />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Time</div>
                    <div className="field">
                        <input type="time"/>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Phone Number</div>
                    <div className="field">
                        <input type="number" />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Password</div>
                    <div className="field">
                        <input type="password" />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Topic</div>
                    <div className="field">
                        <input type="text" />
                    </div>
                </div>
                <div className="submit">
                    <input type="button" value="SUBMIT"></input>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;