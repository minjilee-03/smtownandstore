import React, {useState} from "react";
import Banner from '../component/celeb-exo-banner';
import Header from '../component/header';
import Weekly from '../component/celeb-exo-weeklybest-banner';
import AllProduct from '../component/allProductNct';
import '../css/header.css';
import '../css/celeb/nct.css'


function Celeb_exo() {
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
                            EXO
                        </div>
                        <div className="celeb_side_menu">
                            <ul className="celeb_side_list">
                                <li className="celeb_side_item"onClick={()=>toggleMenu()}>
                                    MUSIC
                                    <span className="sub_arrow"></span>
                                    <ul
                                        className={isOpen ? "active" : "celeb_side_sub_list"}>
                                        <li className="celeb_side_sub_item">CD<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">DVD<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">etc.<span className="move"></span></li>
                                    </ul>
                                </li>
                                <li className="celeb_side_item"onClick={()=>toggleMenu()}>
                                    DANCE
                                    <span className="sub_arrow"></span>
                                    <ul
                                        className={isOpen ? "active" : "celeb_side_sub_list"}>
                                        <li className="celeb_side_sub_item">SS<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">FF<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">HHH.<span className="move"></span></li>
                                    </ul>
                                </li>
                                <li className="celeb_side_item"onClick={()=>toggleMenu()}>
                                    TEST
                                    <span className="sub_arrow"></span>
                                    <ul
                                        className={isOpen ? "active" : "celeb_side_sub_list"}>
                                        <li className="celeb_side_sub_item">GSDFGSD<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">FSDFDS<span className="move"></span></li>
                                        <li className="celeb_side_sub_item">ETWE.<span className="move"></span></li>
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
                            <AllProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Celeb_exo;



