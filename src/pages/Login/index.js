import React,{useState} from "react";
import {Link} from "react-router-dom"
import './index.css'
import Header from '../../components/Header';
import Menu from '../../components/Menu'


function SessionList() {

    const [formData,setFromData]=useState({
        phoneNumber:"",
        password:""
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

        const getuserArr=localStorage.getItem("data")
    //    console.log(getuserArr);
        

        const {phoneNumber,password}=formData

       if(phoneNumber===""){
            document.getElementById('error_phno').innerHTML="Phone Number is required";
        }
        else if(password===""){
          
            document.getElementById('error_pwd').innerHTML="Password is required";
        }
        else{
          if(getuserArr && getuserArr.length){
            const user=JSON.parse(getuserArr.userData.sessions.info)
            console.log(user)
            const arr=user.userData
            const userlogin=arr.filter((el,k)=>{
                return el.phoneNumber===phoneNumber && el.password===password
            })
            if(userlogin.length===0){
                alert("invalid details")
            }
            else{
                alert("user login successfull");
            }
          }
        }
       
    }

    return (
        <div className="menuPg">
            <Header type="back" />
            <div className="inputForm">
               
                <div className="rows">
                    <div className="label">Phone Number</div>
                    <div className="field">
                        <input type="number" 
                            name='phoneNumber'
                         onChange={handle}
                        />
                        <span id="error_phno" style={{color:'red'}}></span>
                    </div>
                </div>
                <div className="rows">
                    <div className="label">Password</div>
                    <div className="field">
                        <input type="password" 
                        name='password'
                        onChange={handle}
                        />
                        <span id="error_pwd" style={{color:'red'}}></span>
                    </div>
                </div>
               
                <div className="submit">
                  <Link to="/sessions"> <input type="button" value="SUBMIT" onClick={addData}></input></Link> 
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;