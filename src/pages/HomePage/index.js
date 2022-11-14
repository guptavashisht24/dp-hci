import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import Search from '../../images/search.png'
import Video from '../../images/video.png'
import Header from '../../components/Header';
import Time from '../../images/time.png'
import Menu from '../../components/Menu'
import ReactTooltip from "react-tooltip";


function HomePage() {
    return (
        <div>
            <Header />
            <div className="introSection">
                <div>
                    Welcome
                </div>
                <div className="pd">
                    What can we help you with today ?
                </div>
            </div>
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
                    <ReactTooltip id="searchApp" place="top" effect="solid">
                        Click here to search apps for a particular tasks
                    </ReactTooltip>
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
                        <ReactTooltip id="searchVideos" place="top" effect="solid">
                        Click here to search video tutorials for common apps
                    </ReactTooltip>
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
                        <ReactTooltip id="searchVideos" place="top" effect="solid">
                         Schedule a session with volunteers for understanding how apps work
                    </ReactTooltip>
                    </Link>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default HomePage;