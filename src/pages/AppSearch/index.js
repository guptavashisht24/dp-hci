import React from "react";
import './index.css'

import Header from '../../components/Header';
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import Target from '../../images/target.png'
import TomThumb from '../../images/tomthumb.png'
import Walmart from '../../images/walmart.png'

function AppSearch() {
    return (
        <div className="pb8">
            <Header />
            <div className="">
                <div className = "search">
                    <div className="w75">
                        <input type="text"></input>
                    </div>
                    <div className="w20">
                    <img src={Microphone} />  
                    </div>
                </div>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={Target} />
                </div>
                </a>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={Walmart} />
                </div>
                </a>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={TomThumb} />
                </div>
                </a>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={Target} />
                </div>
                </a>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={Walmart} />
                </div>
                </a>
            </div>
            <div className="brandsCol">
                <a link="#">
                <div>
                    <img src={TomThumb} />
                </div>
                </a>
            </div>
            <Menu type="fixed" />
        </div>
    )
}

export default AppSearch;