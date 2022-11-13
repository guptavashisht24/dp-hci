import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu'

function HomePage() {
    return (
        <div className="menuPg">
            <Header type="back" />
            <div className="userOptions">
                <div className="choice">
                    <div >
                        New Session
                    </div>
                </div>
                <div>
                    <div className="choice">
                        <div >
                            Existing Session
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default HomePage;