import React, {useState} from "react";
import './index.css'
import { Link } from "react-router-dom";
import MenuImg from '../../images/menu.png'
import Home from '../../images/home.png'
import Call from '../../images/call.png'
import Close from '../../images/close.png';
import Back from '../../images/back.png'
import { useNavigate } from "react-router-dom";


function Header({type}) {
    let navigate = useNavigate();
    const showBackHeader = type && type=='back' 
    
    return (
        <div>
        {!showBackHeader && <div className="header">
            <>V-Assist</>
        </div>}
         {showBackHeader && <div className="headerBack">
             <div onClick={() => navigate(-1)}>
                 <img src={Back}/>
             </div>
             <div>
             <img src={Close}/>
             </div>
        </div>}
        </div>
    )
}
export default Header