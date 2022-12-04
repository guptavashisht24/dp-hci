import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import MenuImg from '../../images/menu.png'
import Home from '../../images/home.png'
import Call from '../../images/call.png'
import Heart from '../../images/heart.png'
import About from '../../images/about.png'
import Faq from '../../images/faq.png'



function Menu({ type }) {
    const styleClassName = (type == "fixed") ? "fixedMenu" : "fixedMenu"
    const [showMenu, toggleMenu] = useState(false)
    return (
        <div>

            {showMenu && <div className="menuBody">
                <div className="items">
                    <div><h1>Saved Videos</h1></div>
                    <div>
                        <i class="bi bi-suit-heart-fill icon-style-heart"></i>
                        {/* <img src={Heart} /> */}
                    </div>
                </div>
                <div className="items">
                    <div><h1>Volunteer Sign-in</h1></div>
                    <div>
                        <i class="bi bi-person-plus-fill icon-style-person"></i>
                        {/* <img src={Person} /> */}
                    </div>
                </div>
                <div className="items">
                    <div><h1>FAQ's</h1></div>
                    <div>
                        <i class="bi bi-question-circle-fill icon-style-faq"></i>
                        {/* <img src={Faq} /> */}
                    </div>
                </div>
                <div className="items">
                    <div><h1>About Us</h1></div>
                    <div>
                        <i class="bi bi-chat-square-text-fill icon-style-about"></i>
                        {/* <img src={About} /> */}
                    </div>
                </div>
            </div>}
            <div className={styleClassName}>
                <div className="menuflex">
                    <div className="menuDiv">
                        <Link to="/contact">
                            <i class="bi bi-headset icon-style-footer"></i>
                            {/* <img src={Call} /> */}
                        </Link>
                    </div>

                    <div className="menuDiv">
                        <Link to="/">
                            <i onClick = {()=>{toggleMenu(false)}} class="bi bi-house-door-fill icon-style-footer"></i>
                            {/* <img src={Home} /> */}
                        </Link>
                    </div>

                    <div className="menuDiv" onClick={() => { toggleMenu(!showMenu) }}>
                        <i class="bi bi-list icon-style-footer"></i>
                        {/* <img src={MenuImg} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu