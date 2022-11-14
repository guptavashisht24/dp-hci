import React, { useEffect, useState } from "react";
import './index.css'

import Header from '../../components/Header';
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import Target from '../../images/target.png'
import TomThumb from '../../images/tomthumb.png'
import Walmart from '../../images/walmart.png'

const categories = ["Grocery", "Pharmacy", "Restaurant", "Coffee Shops", "Bank", "Social Media", "Transport", "Online Shopping"]

function AppSearch() {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState(categories);
    const [search, setSearch] = useState("");

    const GetSpeech = () => {
        console.log("clicked microphone");
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        let recognition = new SpeechRecognition();
        recognition.onstart = () => {
            console.log("starting listening, speak in microphone");
        }
        recognition.onspeechend = () => {
            console.log("stopped listening");
            recognition.stop();
        }
        recognition.onresult = (result) => {
            setSearch(result.results[0][0].transcript);
            setDisplay(false)
        }

        recognition.start();
    }

    return (
        <div className="pb8">
            <Header />
            <div className="">
                <div className="search" onClick={() => setDisplay(!display)}>
                    <div className="w75">
                        <input type="text" placeholder="Type Something" value={search} onChange={event => setSearch(event.target.value)}></input>
                    </div>
                    <div className="w20" onClick={()=>{GetSpeech()}}>
                        <img src={Microphone} />
                    </div>
                </div>
                {display && <div className="autoContainer">
                    {options.filter((name) => {
                        return name.toLowerCase().indexOf(search.toLowerCase()) > -1
                    })
                        .map((value, i) => {
                            return (
                                <div
                                    onClick={() => { setSearch(value); setDisplay(false) }}
                                    className="option"
                                    key={i}
                                    tabIndex="0"
                                >
                                    <span>{value}</span>
                                </div>
                            );
                        })}
                </div>}
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