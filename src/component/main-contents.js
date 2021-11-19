import React, {Component} from "react";

import Banner from './main-banner';

import '../css/main-banner.css';

class MainContentsSection extends Component{
    render(){
        return (
            <div className="main-banner-slide-section">
                <Banner/>
            </div>
        );
    }
}
export default MainContentsSection;
