import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import Search from '../../images/search.png'
import Header from '../../components/Header';


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
            <div>
                <div className="actions">
                    <div>
                        Search An App
                    </div>
                    <div>
                        <img src={Search} />
                    </div>
                </div>
                <div>
                    <div className="actions">
                        <div>
                            Search An App
                        </div>
                        <div>
                            <img src={Search} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="actions">
                        <div>
                            Search An App
                        </div>
                        <div>
                            <img src={Search} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage;