import React, {Component, useMemo} from "react";
import MainBanner from "../component/main-contents";
import "../css/main-banner.css";
import NewItem from "../component/new-item";
import gift from "../assets/gift.png";


const MainSection1 = () => {
    return <div className="main-section-wrap">
        <div className="main-section-container">
            <MainBanner />
            <div className="gift-banner">
                <img src={gift}/>
            </div>
            <div className="new-item-section">
                <NewItem/>
            </div>
        </div>
    </div>
}


export default MainSection1;