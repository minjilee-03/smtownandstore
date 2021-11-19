import React, {Component} from "react";

import HeaderLogo from "../assets/header-logo.svg";
import mypage from "../assets/mypage.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import collect from "../assets/collect.svg";

import '../css/header.css';
import '../css/index.css'

class header extends Component{
    render(){
        return (
            <div className="header-section">
                <div className="top-header">
                    <ul className="login-list">
                        <li className="login-item">
                            <a className="login-link" href="#">LOGIN</a>
                        </li>
                        <li className="login-item">
                            <a className="login-link" href="#">JOIN</a>
                        </li>
                        <li className="login-item multishop-wrap">
                            <a className="multishop-link login-link" href="#">KOR</a>
                            <ul className="multishop-list">
                                <li className="multishop-item"><a href="//en.smtownandstore.com/" >ENG</a></li>
                                <li className="multishop-item"><a href="//jp.smtownandstore.com/" >JPN</a></li>
                                <li className="multishop-item"><a href="//cn.smtownandstore.com/" >CHN</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="bottom-header">
                    <div className="bottom-header-wrap">
                        <div className="inner bottom-header-container">
                            <div className="top-menu">
                                <ul className="top-menu-list">
                                    <li className="top-menu-item">CELEB</li>
                                    <li className="top-menu-item">PRODUCT</li>
                                    <li className="top-menu-item">&PICK</li>
                                    <li className="top-menu-item">EVENT</li>
                                    <li className="top-menu-item">BRAND</li>
                                </ul>
                            </div>
                            <div className="header-logo">
                                <img className="header-logo-image" src={HeaderLogo}/>
                            </div>
                            <div className="top-member">
                                <ul className="top-member-list">
                                    <li className="top-member-item">
                                        <img src={mypage}/>
                                    </li>
                                    <li className="top-member-item">
                                        <img src={search}/>
                                    </li>
                                    <li className="top-member-item">
                                        <img src={cart}/>
                                    </li>
                                    <li className="top-member-item">
                                        <img src={collect}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default header;