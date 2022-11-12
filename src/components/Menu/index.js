import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import MenuImg from '../../images/menu.png'
import Home from '../../images/home.png'
import Call from '../../images/call.png'

function Menu() {
    return (
        <div className="stickyMenu">
            <div className="menuflex">
                <div className="menuDiv">
                    <img src={Call} />
                </div>
                <div className="menuDiv">
                    <img src={Home} />
                </div>
                <div className="menuDiv">
                    <img src={MenuImg} />
                </div>
            </div>
        </div>
    )
}
export default Menu