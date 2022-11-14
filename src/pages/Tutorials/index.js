import React, {useState, useEffect} from "react";
import './index.css'
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import YouTube from '../../images/youtube.png'
import data from "../../Data/data2.json"

const categories = [
    "Walmart",
    "Target",
    "Kroger",
    "Tom Thumb",
    "CVS Pharmacy",
    "Walgreens",
    "Medscape",
    "HEB Pharmacy",
    "Walmart Wellness",
    "Subway",
    "Whataburger",
    "Chickfila",
    "Panda Express",
    "Pizza Hut",
    "Starbucks",
    "Dunkin",
    "Joe Coffee",
    "Dunn Brothers",
    "Chase",
    "Bank of America",
    "Wells Fargo",
    "Bank of Texas",
    "Truist",
    "Instagram",
    "Whatsapp",
    "Twitter",
    "Snapchat",
    "Youtube",
    "Facebook",
    "Tik tok",
    "Uber",
    "Lyft",
    "Hitch",
    "Greyhound",
    "Redbus",
    "Amazon",
    "Bestbuy",
    "ebay",
    "Costco",
    "Ikea"
]
function AppSearch() {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState(categories);
    const [search, setSearch] = useState("");
    const [loaders, updateLoaders] = useState(false)
    const [result, updateResult] = useState([])

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
            if(search.toLowerCase() in data){
                updateLoaders(false)
                updateResult(data[search.toLowerCase()].videourl)
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
                <div key={index} className="actionsTutorials">
                    <a href={value.link}>
                        <div className="list">
                            <div className="icon">
                                <img src={YouTube} />
                            </div>
                            <div className="content">
                                {value.title}
                            </div>
                        </div>
                    </a>
                </div>
            )
        })

        return results
       } else {
        if(search.length===0){
            return <div className="failText"> Which tutorial are you looking for today ?</div>
        } else {
            return <div className="failText">Hmm, Tutorials not found :/ Try Something else</div>
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
            <div className="results">
            {loaders && renderLoaders()}
            {!loaders && renderResults()}
            </div>
            <Menu type="fixed" />
        </div>
    )
}

export default AppSearch;