import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div className="bg-dark" style={{maxWidth:"400px",marginLeft:"500px"}}>
            <div className="section-wrapper mx-auto container bg-white">
        <div className="h-100 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between header">
               <Link to="/"> <button><i className="bi bi-arrow-left"></i></button></Link>
                <div style={{paddingTop:"10px"}}>V-Assist</div> 
            </div>
            <div className="search-general-info">
                <div className="searchApp d-flex align-items-center flex-column py-4 bg-gray mb-1 px-2">
                    <div className="form-control bg-gray border-0 text-center text-capitalize">Saved videos</div>
                    <i className="bi bi-heart-fill"></i>
                </div>
                <div className="searchTutorials d-flex align-items-center flex-column py-4 mb-1 px-2 bg-gray">
                    <div className="form-control bg-gray border-0 text-center text-capitalize" > Volunteer sign-in</div>
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="searchSession d-flex align-items-center flex-column py-4 px-2 bg-gray mb-1">
                    <div className="form-control bg-gray border-0 text-center text-uppercase" > faq</div>
                    <i className="bi bi-question-square-fill"></i>
                </div>
                <div className="searchSession d-flex align-items-center flex-column py-4 px-2 bg-gray">
                    <div className="form-control bg-gray border-0 text-center text-capitalize" > about us</div>
                    <i className="bi bi-info-square"></i>
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
                          <Link to="/"><i style={{fontSize: "33px"}} className="bi bi-list"></i></Link>
                        </li>                
            </ul>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Menu