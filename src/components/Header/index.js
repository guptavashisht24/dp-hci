import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import MenuImg from '../../images/menu.png'
import Home from '../../images/home.png'
import Call from '../../images/call.png'
import Close from '../../images/close.png';
import Back from '../../images/back.png'

function Header() {
    return (
        <div className="header">
            <>V-Assist</>
        </div>
        // <div className="headerBack">
        //     <div>
        //         <img src={Back}/>
        //     </div>
        //     <div>
        //     <img src={Close}/>
        //     </div>
        // </div>
    )
}
export default Header