import React from "react";
import './index.css'
import Search from '../../images/search.png'
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import Video from '../../images/video.png'
import Time from '../../images/time.png'
import YouTube from '../../images/youtube.png'

function AppSearch() {
    return (
        <div>
            <Header />
            <div className="">
                <div className="search">
                    <div className="w75">
                        <input type="text"></input>
                    </div>
                    <div class="w20">
                        <img src={Microphone} />
                    </div>
                </div>
            </div>
            <div className="results">
                <div className="actionsTutorials">
                    <a href="#">
                        <div className="list">
                            <div className="icon">
                                <img src={YouTube} />
                            </div>
                            <div className="content">
                                Buy online from Walmart
                            </div>
                        </div>
                    </a>
                </div>
                
                <div className="actionsTutorials">
                    <a href="#">
                        <div className="list">
                            <div className="icon">
                                <img src={YouTube} />
                            </div>
                            <div className="content">
                                Walmart Grocery pickup
                            </div>
                        </div>
                    </a>
                </div>
                <div className="actionsTutorials">
                    <a href="#">
                        <div className="list">
                            <div className="icon">
                                <img src={YouTube} />
                            </div>
                            <div className="content">
                                Walmart Grocery pickup
                            </div>
                        </div>
                    </a>
                </div>
                <div className="actionsTutorials">
                    <a href="#">
                        <div className="list">
                            <div className="icon">
                                <img src={YouTube} />
                            </div>
                            <div className="content">
                                Walmart value pickup
                            </div>
                        </div>
                    </a>
                </div>
               
            </div>
            <Menu type="fixed" />
        </div>
    )
}

export default AppSearch;