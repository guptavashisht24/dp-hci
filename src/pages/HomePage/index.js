import React, { useEffect, useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Onboard from "../../components/Onboard";
import { useNavigate } from "react-router-dom";



function HomePage() {
    const [showOnboard, toggleOnboard] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("show")) {
            setTimeout(() => {
                toggleOnboard(true)
            }, 1000)
        }
    })


    const introSection = () => {
        return <div className="introSection"><div>
            Welcome
        </div>
            <div className="pd">
                What can we help you with today ?
            </div></div>

    }

    const showRecommend = () => {
            const tutorialLink = JSON.parse(localStorage.getItem("tutorials"))
            const res = tutorialLink.map((tutorialLink) => {
                return (
                    <div className="w100">
                        <div className="tutorialsHome" onClick={() => { navigate(`/tutorials?query=${tutorialLink}`) }}>
                            <div className="icon">
                                <i class="bi bi-youtube icon-style-youtube"></i>
                            </div>
                            <div className="contentLink"> {tutorialLink} Tutorials  </div>
                        </div>
                    </div>
                )
            })
        return (<div className="introSectionviewed">
            <div className="rviewed">
            Recently Viewed tutorials
        </div>
                {res}
        </div>)

    }


    const showTop = (localStorage.getItem("tutorials")) ? showRecommend() : introSection()


    return (
        <div>
            <Header type="noback" />
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" /> */}
            {showTop}
            {showOnboard && <Onboard hide={toggleOnboard} />}
            <div className="mb">
                <Link to="/search">
                    <div className="actions">
                        <div>
                            Search An App
                        </div>
                        <div>
                            <i class="bi bi-search icon-style"></i>
                            {/* <img src={Search} /> */}
                        </div>
                    </div>
                </Link>
                <div>
                    <Link to="/tutorials">
                        <div className="actions">
                            <div>
                                Search Tutorials
                            </div>
                            <div>
                                <i class="bi bi-collection-play icon-style"></i>
                                {/* <img src={Video} /> */}
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/user">
                        <div className="actions">
                            <div>
                                Schedule a Session
                            </div>
                            <div>
                                <i class="bi bi-calendar2-check icon-style"></i>
                                {/* <img src={Time} /> */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Menu contact = {"no"} home = {"yes"} />
        </div>
    )
}

export default HomePage;