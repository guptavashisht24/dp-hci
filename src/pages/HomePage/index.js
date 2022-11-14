import React, { useEffect, useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Search from '../../images/search.png'
import Video from '../../images/video.png'
import Header from '../../components/Header';
import Time from '../../images/time.png'
import Menu from '../../components/Menu'
import Onboard from "../../components/Onboard";

function HomePage() {
    const [showOnboard, toggleOnboard] = useState(false)

    useEffect(()=>{
        if(!localStorage.getItem("show")){
            setTimeout(()=>{
                toggleOnboard(true)
            }, 1000)
        }
    })
    return (
        <div>
            <Header type="noback" />
            <div className="introSection">
                <div>
                    Welcome
                </div>
                <div className="pd">
                    What can we help you with today ?
                </div>
            </div>
            {showOnboard && <Onboard hide = {toggleOnboard} />}
            <div className="mb">
                <Link to="/search">
                    <div className="actions" data-tip data-for="searchApp">
                        <div>
                            Search An App
                        </div>
                        <div>
                            <img src={Search} />
                        </div>
                    </div>
                  
                </Link>
                <div>
                    <Link to="/tutorials">
                        <div className="actions" data-tip data-for="searchVideos">
                            <div>
                                Search Tutorials
                            </div>
                            <div>
                                <img src={Video} />
                            </div>
                        </div>
                        
                    </Link>
                </div>
                <div>
                    <Link to="/user">
                        <div className="actions" data-tip data-for="searchVideos">
                            <div>
                                Schedule a Session
                            </div>
                            <div>
                                <img src={Time} />
                            </div>
                        </div>
                     
                    </Link>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default HomePage;