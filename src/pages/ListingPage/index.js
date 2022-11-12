// import React from "react";
// import './index.css'
// import { Link } from "react-router-dom";
// import Header from '../../components/Header';
// import Microphone from '../../images/microphone.png'
// import Target from '../../images/target.png'
// import TomThumb from '../../images/tomthumb.png'
// import Walmart from '../../images/walmart.png'
// // import Menu from '../../components/Menu'



// function HomePage() {
//     return (
//         <div>
//             <Header />
// {/* <div className="search">
//     <form>
//         <input type="text">
//         </input>
//     </form>
//     <div>
//         <img src={Microphone} />
//     </div>
// </div> */}
//             <div>
//                 <div className="brands">
//                     <img src={Target} />
//                 </div>
//             </div>
//             <div>
//                 <div className="brands">
//                     <img src={Walmart} />
//                 </div>
//             </div>
//             <div>
//                 <div className="brands">
//                     <img src={TomThumb} />
//                 </div>
//             </div>
//             <div>
//                 <div className="brands">
//                     <img src={Target} />
//                 </div>
//             </div>
//             <div>
//                 <div className="brands">
//                     <img src={Walmart} />
//                 </div>
//             </div>
//             <div>
//                 <div className="brands">
//                     <img src={TomThumb} />
//                 </div>
//             </div>
//             {/* <Menu /> */}
//         </div>
//     )
// }

// export default HomePage;
import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import Search from '../../images/search.png'
import Video from '../../images/video.png'
import Header from '../../components/Header';
import Time from '../../images/time.png'
import Menu from '../../components/Menu'
import Microphone from '../../images/microphone.png'
import Target from '../../images/target.png'
import TomThumb from '../../images/tomthumb.png'
import Walmart from '../../images/walmart.png'

function HomePage() {
    return (
        <div>
            <Header />
            <div className="">
                <div className = "search">
                    <div className="w75">
                        <input type="text"></input>
                    </div>
                    <div class="w20">
                    <img src={Microphone} />  
                    </div>
                </div>
            </div>
            <div className="brandsCol">
                <div>
                    <img src={Target} />
                </div>
            </div>
            <div className="brandsCol">
                <div className="brands">
                    <img src={Walmart} />
                </div>
            </div>
            {/* <div className="brandsCol">
                <div className="brands">
                    <img src={TomThumb} />
                </div>
            </div> */}
            <div className="brandsCol">
                <div className="brands">
                    <img src={Target} />
                </div>
            </div>
            <div className="brandsCol">
                <div className="brands">
                    <img src={Walmart} />
                </div>
            </div>
            {/* <div className="brandsCol">
                <div className="brands">
                    <img src={TomThumb} />
                </div>
            </div> */}
            <Menu type="fixed" />
        </div>
    )
}

export default HomePage;