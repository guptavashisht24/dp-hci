import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "react-bootstrap";

function SessionList() {


    const [startDate, setStartDate] = useState(new Date());

    const [formData,setFromData]=useState({
        firstName:"",
        lastName:"",
        time:'00:00',
        phoneNumber:"",
        password:"",
        topic:""
    })

    const [data,setData]=useState([])

    function handle(e){
      
       const {value,name}=e.target;

       setFromData(()=>{
        return{
            ...formData,
            [name]:value
        }
       })

       console.log(formData);
    }

    const addData=(e)=>{
        e.preventDefault();

        const {firstName,lastName,time,phoneNumber,password,topic}=formData

        if(firstName===""){
            alert('First Name is required')
        }
        else if(lastName===""){
            alert('Last Name is required')
        }
        else if(time===""){
            alert('Time is required')
        }
        else if(phoneNumber===""){
            alert('Phone Number is required')
        }
        else if(phoneNumber.length<10 || phoneNumber.length>10){
            alert('invalid phone number')
        }
        else if(password===""){
            alert('Password is required')
        }
        else if(topic===""){
            alert('Topic is required')
        }
        else{
            alert("Registered Successfully")
            localStorage.setItem("user",JSON.stringify([...data,formData]))
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
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Last Name</div>
                    <div className="field">
                        <input type="text" 
                                name='lastName'
                         onChange={handle}
                        />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Date</div>
                    <div className="field">
                    <DatePicker selected={startDate} 
                            name='date'
                    onChange={handle} />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Time</div>
                    <div className="field">
                        <input type="time"
                            name='time'
                        onChange={handle}
                        />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Phone Number</div>
                    <div className="field">
                        <input type="number" 
                            name='phoneNumber'
                         onChange={handle}
                        />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Password</div>
                    <div className="field">
                        <input type="password" 
                        name='password'
                        onChange={handle}
                        />
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Topic</div>
                    <div className="field">
                        <input type="text" 
                        name='topic'
                         onChange={handle}
                        />
                    </div>
                </div>
                <div className="submit">
                    <input type="button" value="SUBMIT" onClick={addData}></input>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;