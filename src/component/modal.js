import React, { useState } from 'react';
import SkyLight from "react-skylight";
import down_arrow from "../assets/down_arow.png";
import {Link} from "react-router-dom";


const Modal = () => {
    const modalRef = useState(0);
    return (
                <div>
                    <div className="header">
                        <h1>옵션 선택</h1>
                    </div>
                    <div className="content">
                        <div className="content-wrap">
                            <div className="content-container">
                                <div className="exam-iamge-wrap">
                                    <img src="https://www.smtownandstore.com/web/product/medium/202108/82bc771a53e20967f5901889bb14cf3f.jpg"
                                         className="exam-iamge"/>
                                </div>
                                <div className="content-info">
                                    <div className="content-text">
                                        <div className="content-artist">
                                            NCT 127
                                        </div>
                                        <div className="content-title">
                                            XR LIVE NCT 127 SPECIAL EVENT : THE CASTLE No. 127
                                        </div>
                                    </div>
                                    <div className="select-detail">
                                        <p>
                                            <select className="select" style={{ backgroundImage: `url(${down_arrow}`}}>
                                                <option>[필수] CELEB 선택</option>
                                                <option>My cool custon title</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div className="read-comment">
                                        위 옵션을 선택하시면 아래에 상품이 추가됩니다.
                                    </div>
                                </div>
                            </div>
                            <div className="totalPrice">
                                총 상품금액(수량) <span className="total"><em>0</em>(0개)</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <Link to="/celeb_boa" className="buy-wrap"> <span className="buy">바로 구매하기</span></Link>

                        <Link to="/celeb_exo" className="gotocart-wrap"><span className="gotocart">장바구니 담기</span></Link>
                    </div>
                </div>
    );
}

export default Modal;
