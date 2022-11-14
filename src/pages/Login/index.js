import React,{useState} from "react";
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

        const getuserArr=localStorage.getItem("user")
        console.log(getuserArr);

        const {phoneNumber,password}=formData

       if(phoneNumber===""){
            alert('Phone Number is required')
        }
        else if(password===""){
            alert('Password is required')
        }
        else{
          if(getuserArr && getuserArr.length){
            const userdata=JSON.parse(getuserArr)
            const userlogin=userdata.filter((el,k)=>{
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
               
                <div className="submit">
                    <input type="button" value="SUBMIT" onClick={addData}></input>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;