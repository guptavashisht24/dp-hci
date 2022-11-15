import React, { useEffect, useState } from "react";
import './index.css'

import Header from '../../components/Header';
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import Target from '../../images/target.png'
import TomThumb from '../../images/tomthumb.png'
import Walmart from '../../images/walmart.png'
import data from "../../Data/data1.json"

const categories = ["Grocery", "Pharmacy", "Restaurant", "Coffee Shops", "Bank", "Social Media", "Transport", "Online Shopping"]

function AppSearch() {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState(categories);
    const [search, setSearch] = useState("");
    const [loaders, updateLoaders] = useState(false)
    const [result, updateResult] = useState([])

    const SpeechRecognitionWorks = window.SpeechRecognition || window.webkitSpeechRecognition;

    const GetSpeech = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        let recognition = new SpeechRecognition();
        recognition.onstart = () => {
            console.log("started");
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

    useEffect(()=>{
        if(!display && search)
            fetchData()
    }, [display, search])

    const renderLoaders = () => {
        return(
            <div>
                <div className="loaderDiv">

                </div>
                <div className="loaderDiv">

                </div>
                <div className="loaderDiv">

                </div>
            </div>
        )
    }


    const fetchData = () => {
        setDisplay(false)
        updateLoaders(true)
        setTimeout(()=>{
            console.log(search)
            if(search.toLowerCase() in data){
                updateLoaders(false)
                updateResult(data[search.toLowerCase()])
            } else {
                updateLoaders(false)
                updateResult([])
            }
        },2000)
    }

    const renderResults = () =>{
       if(result.length>0){
        const results = result.map((value, index)=>{
            return (
                <div key = {index} className="brandsCol">
                <a href={value.weburl}>
                    <div className="parent">
                        <img className="brand" src={value.img} />
                    </div>
                </a>
            </div>
            )
        })

        return results
       } else {
        if(search.length===0){
            return <div className="failText"> What are you looking for today ?</div>
        } else {
            return <div className="failText">Hmm, Apps not found :/, Try Something else</div>
        }
       }
    }

    return (
        <div className="pb8">
            <Header />
            <div className="">
                <div className="search" onClick={() => setDisplay(!display)}>
                    <div className="w75">
                        <form onSubmit={(e)=>{e.preventDefault();fetchData()}}>
                        <input type="text" placeholder="Type Something" value={search} onChange={event => setSearch(event.target.value)}></input>
                        </form>
                    </div>
                    {SpeechRecognitionWorks && <div className="w20" onClick={()=>{GetSpeech()}}>
                    <i class="bi bi-mic-fill icon-style-microphone"></i>
                        {/* <img src={Microphone} /> */}
                    </div>}
                </div>
                {display && <div className="autoContainer">
                    {options.filter((name) => {
                        return name.toLowerCase().indexOf(search.toLowerCase()) > -1
                    })
                        .map((value, i) => {
                            return (
                                <div
                                    onClick={() => { setSearch(value); setDisplay(false);}}
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
            {loaders && renderLoaders()}
            {!loaders && renderResults()}
            <Menu type="fixed" />
        </div>
    )
}

export default AppSearch;