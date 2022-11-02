import React from "react";
import './HomePage.css'
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div className="bg-dark" style={{maxWidth:"400px"}}>
            <div className="section-wrapper mx-auto container bg-white">
        <div className="h-100 d-flex flex-column justify-content-between">
            <div className="header bg-primary-blue  px-2 py-2">
                <p className="mb-0 text-start">
                    V-Assist
                </p>
            </div>
            <div className="body-section mt-3 px-2">
                <h2 className="mb-5">
                    Welcome,
                </h2>
                <h2>
                    What can we help you with today ?
                </h2>
            </div>
            <div className="search-sections">
                <div className="searchApp d-flex align-items-center bg-gray mb-1">
                   <Link to="/SearchApps" style={{ textDecoration: 'none' }}> <button className="form-control bg-gray border-0 py-4" style={{fontSize:"30px", textDecoration:"none"}}>Search an App
                    <i style={{marginLeft: "100px", fontSize: "40px"}} className="bi bi-search"></i></button></Link>
                </div>
                <div classname="searchTutorials d-flex align-items-center mb-1 bg-gray">
                    <button className="form-control bg-gray border-0 py-4" style={{fontSize:"30px"}}>Search Tutorials
                    <i style={{marginLeft: "100px", fontSize: "40px"}} className="bi bi-play-btn-fill"></i></button>
                </div>
                <div className="searchSession d-flex align-items-center mb-1 bg-gray">
                    <button className="form-control bg-gray border-0 py-4" style={{fontSize:"30px"}}>Schedule Session
                    <i style={{marginLeft: "100px", fontSize: "40px"}} className="bi bi-calendar3"></i></button>
                </div>
            </div> 
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
        </div>
    )
}

export default HomePage;