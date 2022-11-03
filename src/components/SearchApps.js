import React from "react"
import './SearchApps.css'
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function SearchApps(props){
    const [formData,setFormData]=React.useState(
        {
          title:"",
          img:"",
          desc:""
        }
      )
      const [appList,setAppList]=React.useState(props.apps)
      function handle(e){
        const {name,value}=e.target
        setFormData(prevData=>{
            return{
                ...prevData,
                [name]:value,
            } 
        })
      }
      function searchedAppList(){
        let d=props.apps.filter((app)=>{
            return (formData.title.length?app.title.toLowerCase().includes(formData.title.toLowerCase()):true)
        })
        console.log("d= ",d)
        setAppList(d)
      }
      React.useEffect(() => {
        searchedAppList()
      }, [formData.title])
    

   
    
    return(
        <div style={{maxWidth:"400px",marginLeft:"500px",borderStyle:"solid",height:"100%"}}>
            <div className="d-flex justify-content-between header">
               <Link to="/"> <button><i className="bi bi-arrow-left"></i></button></Link>
                <div style={{paddingTop:"10px"}}>V-Assist</div> 
            </div>
            <div className="d-flex flex-column">
                <div className="p-2">
                <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Apps"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handle}
                    name="title"
                />
                <DropdownButton
                    variant="outline-secondary"
                    title="Recents"
                    id="input-group-dropdown-1"
                >
          <Dropdown.Item >CVS</Dropdown.Item>
          <Dropdown.Item >Burger King</Dropdown.Item>
        </DropdownButton>
        <Button><i className="bi bi-mic"></i></Button>
      </InputGroup>
                </div>

                <div className="d-flex flex-column">
                    {appList.length>0?
                    appList.map((app)=>(
                      <div className="d-flex flex-column" style={{height:"80px"}}>
                      <div className="d-flex flex-row justify-content-around">
                        <div>{app.title}</div>
                        <div className="img-thumbnail" >
                          <img src={app.img} style={{height:"30px" ,width:"30px"}}/>
                        </div>
                         <Popup trigger={<button className="btn btn-primary">More Info</button>} position="right center">
                                   <div>{app.desc}</div>
                              </Popup> 
                      </div>
                      </div>
                    )):<div style={{height:"100vh"}}></div>
                     
}
                </div>
                </div>
                <div className="footer bg-primary-blue py-3">
                <div>
                    <div className="list-unstyled d-flex align-items-center  justify-content-around mb-0">
                        <li>
                            <button><i style={{fontSize: "33px"}} className="bi bi-telephone-plus-fill"></i></button>
                        </li>
                        <li>
                          <Link to="/"><i style={{fontSize: "33px"}} className="bi bi-house-door-fill"></i></Link> 
                        </li>
                        <li>
                          <Link to="/menu"><i style={{fontSize: "33px"}} className="bi bi-list"></i></Link>
                        </li>                
            </div>
                </div>
            </div>
            
            </div>
            
    )
}

export default SearchApps