import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu'

function SessionList() {
    return (
        <div className="menuPg">
            <Header type="back" />
            <div className="pb8">
                <div className="parentList">
                    <div className="sessionList">
                        Upcoming Session(s)
                    </div>
                    <div className="sessionItem">
                        <div className="flx">
                            <div className="w30">Topic:</div>
                            <div className="w70">Ordering Coffee via Starbucks</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Date:</div>
                            <div className="w70">12/08/2022</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Time:</div>
                            <div className="w70">05:45PM</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Link:</div>
                            <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                        </div>
                    </div>
                    <div className="sessionItem">
                        <div className="flx">
                            <div className="w30">Topic:</div>
                            <div className="w70">Ordering Coffee via Starbucks</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Date:</div>
                            <div className="w70">12/08/2022</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Time:</div>
                            <div className="w70">05:45PM</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Link:</div>
                            <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                        </div>
                    </div>
                    <div className="sessionItem">
                        <div className="flx">
                            <div className="w30">Topic:</div>
                            <div className="w70">Ordering Coffee via Starbucks</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Date:</div>
                            <div className="w70">12/08/2022</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Time:</div>
                            <div className="w70">05:45PM</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Link:</div>
                            <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                        </div>
                    </div>
                    <div className="sessionItem">
                        <div className="flx">
                            <div className="w30">Topic:</div>
                            <div className="w70">Ordering Coffee via Starbucks</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Date:</div>
                            <div className="w70">12/08/2022</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Time:</div>
                            <div className="w70">05:45PM</div>
                        </div>
                        <div className="flx">
                            <div className="w30">Link:</div>
                            <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="parentList">
                        <div className="sessionList" >
                            Existing Session(s)
                        </div>
                        <div className="sessionItem">
                            <div className="flx">
                                <div className="w30">Topic:</div>
                                <div className="w70">Ordering Coffee via Starbucks</div>
                            </div>
                            <div className="flx">
                                <div className="w30">Date:</div>
                                <div className="w70">12/08/2022</div>
                            </div>
                            <div className="flx">
                                <div className="w30">Time:</div>
                                <div className="w70">05:45PM</div>
                            </div>
                            <div className="flx">
                                <div className="w30">Link:</div>
                                <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                            </div>
                        </div>
                        <div className="sessionItem">
                        <div className = "flx">
                            <div className="w30">Topic:</div>
                            <div className="w70">Ordering Coffee via Starbucks</div>
                        </div>
                        <div className = "flx">
                            <div className="w30">Date:</div>
                            <div className="w70">12/08/2022</div>
                        </div>
                        <div className = "flx">
                            <div className="w30">Time:</div>
                            <div className="w70">05:45PM</div>
                        </div>
                        <div className = "flx">
                            <div className="w30">Link:</div>
                            <div className="w70">https://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmnhttps://zoom.us/abcdefghijklmn</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SessionList;