import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import MenuImg from '../../images/menu.png'
import Home from '../../images/home.png'
import Call from '../../images/call.png'
import Heart from '../../images/heart.png'

function Menu({ type }) {
    const styleClassName = (type == "fixed") ? "fixedMenu" : "fixedMenu"
    const [showMenu, toggleMenu] = useState(false)
    return (
        <div>
            {showMenu && <div className="menuBody">
                <div className="items">
                    <div>Saved Videos</div>
                    <div>
                        <img src={Heart} />
                    </div>
                </div>
                <div className="items">
                    <div>Saved Videos</div>
                    <div>
                        <img src={Heart} />
                    </div>
                </div>
                <div className="items">
                    <div>Saved Videos</div>
                    <div>
                        <img src={Heart} />
                    </div>
                </div>
                <div className="items">
                    <div>Saved Videos</div>
                    <div>
                        <img src={Heart} />
                    </div>
                </div>
            </div>}
            <div className={styleClassName}>
                <div className="menuflex">
                    <div className="menuDiv">
                        <img src={Call} />
                    </div>

                    <div className="menuDiv">
                        <Link to="/">
                            <img src={Home} />
                        </Link>
                    </div>

                    <div className="menuDiv" onClick={() => { toggleMenu(!showMenu) }}>
                        <img src={MenuImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu