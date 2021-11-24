import React, {useState, useEffect} from "react";
import Banner from '../component/celeb-nct-banner';
import Header from '../component/header';
import Weekly from '../component/celeb-nct-weeklybest-banner';
import '../css/header.css';
import '../css/celeb/nct.css'


function Celeb_nct() {
    // 토글
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    return (
        <div className="wrap">
            <Header/>
            <div className="celeb-nct-section">
                <div className="celeb-nct-banner">
                    <Banner/>
                </div>
                <div className="celeb-nct-content">
                    <div className="side-menu-container">
                        <div className="side-menu-title">
                            NCT
                        </div>
                        <div className="celeb_side_menu">
                            <ul className="celeb_side_list">
                                <li className="celeb_side_item"onClick={()=>toggleMenu()}>
                                    MUSI
                                    <span className="sub_arrow"></span>
                                    <ul
                                        className={isOpen ? "active" : "celeb_side_sub_list"}>
                                        <li className="celeb_side_sub_item">CD<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">DVD<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">etc.<span className="move"></span></li>
                                    </ul>
                                </li>
                            </ul>
                    </div>
                </div>
                    <div className="contents_product">
                        <div className="content-slider-wrap">
                            <div className="content-slider-title">
                                Weekly Best
                            </div>
                            <div className="content-slider-banner-wrap">
                                <Weekly/>
                            </div>
                        </div>
                        <div className="content_all_product">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Celeb_nct;



