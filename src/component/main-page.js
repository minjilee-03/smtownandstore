import React, {Component, useMemo} from "react";
import Header from "../component/header";
import MainBanner from "../component/main-contents";
import "../css/main-banner.css";
import NewItem from "./new-item";
import BackgroundColor from "../data/showcase_image.json";
import gift from "../assets/gift.png";



const Main = () => {
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

export default Main;