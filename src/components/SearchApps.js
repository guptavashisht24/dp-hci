import React from "react"
import './SearchApps.css'
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function SearchApps(props){
    // const [formData,setFormData]=React.useState(
    //     {
    //       title:"Walmart",
    //       img:""
    //     }
    //   )
    //   const [appsList,setAppsList]=React.useState(props.apps)
    //   function handle(){
    //     setFormData(prevData=>prevData)
    //   }
    //   function searchAppList(){
    //     let d=props.apps.filter((app)=>{
    //         return (formData.title.length?app.title.toLowerCase().includes(formData.title.toLowerCase()):true)
    //     })
    //     setAppsList(d)
    //   }
    //   React.useEffect(() => {
    //     searchAppList()
    //   }, [formData.title])
    const [modalShow, setModalShow] = React.useState(false);
    
    return(
        <div style={{maxWidth:"400px"}}>
            <div className="d-flex justify-content-between header">
                <button><i className="bi bi-backspace"></i></button>
                <div style={{paddingTop:"10px"}}>V-Assist</div> 
            </div>
            <div className="d-flex flex-column">
                <div className="p-2">
                <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Apps"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    //onChange={handle}
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
                {/* {appsList.length>0?
                appsList.map((app)=>(
                    <div>{app.title}</div>
                ))
                :<div>No app available</div>
                }
                     */}

                <div className="d-flex flex-column">
                     <div className="d-flex justify-content-center">
                     <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./walmart.jpeg"/>
                        <div className="card-body">
                        <p className="card-text">Walmart</p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
      </div>
      <div className="modal-body">
        This is a grocery store
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                     <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./target.jpeg" alt="Card image cap"/>
                        <div className="card-body">
                        <p className="card-text">Target</p>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                     <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./tom-thumb.png" alt="Card image cap"/>
                        <div className="card-body">
                        <p className="card-text">Tom Thumb</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer bg-primary-blue py-3">
                <div>
                    <ul className="list-unstyled d-flex align-items-center  justify-content-around mb-0">
                        <li>
                            <button><i style={{fontSize: "33px"}} className="bi bi-telephone-plus-fill"></i></button>
                        </li>
                        <li>
                          <Link to="/"><i style={{fontSize: "33px"}} className="bi bi-house-door-fill"></i></Link> 
                        </li>
                        <li>
                          <Link to="/menu"><i style={{fontSize: "33px"}} className="bi bi-list"></i></Link>
                        </li>                
            </ul>
                </div>
            </div>
            
            </div>
            
    )
}

export default SearchApps