// import Swiper core and required modules
import React, {Component, useEffect, useMemo, useState} from "react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import SkyLight from 'react-skylight';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import '../css/swiper.css';

import '../css/celeb/nct.css';
import '../css/cart.css';
import '../css/modal.css';

import right_arrow from '../assets/weekly_arrow_right.png';
import left_arrow from '../assets/weekly_arrow_left.png';
import CartIcon from '../assets/cart.png';

import celeb_nct_weekly from "../data/celeb-nct-weeklybest.json";
import {Link} from "react-router-dom";


const CelebNctWeeklyBanner = () => {

    SwiperCore.use([Navigation,Pagination,Autoplay]);

    const swiperRef = React.useRef(null);

    const modalRef = useState(0);


    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{el: '.swiper-pagination', clickable: true }}
            autoplay={{ delay: 4500 }}
            ref={swiperRef}
        >
            <div className="prev" onClick={() => swiperRef.current.swiper.slidePrev()}
                 style={{ backgroundImage: `url(${left_arrow}`}}/>
            <div className="next" onClick={() => swiperRef.current.swiper.slideNext()}
                 style={{ backgroundImage: `url(${right_arrow}`}}/>
            <div className="swiper-pagination"></div>

            {celeb_nct_weekly.celeb_nct_weekly.map(showcase =>{
                return (
                    <SwiperSlide key={showcase.id}
                                 style={{"width" : "202px"}}>
                        <img className="weekly-slide-image" src={"https://www.smtownandstore.com"
                        +showcase.imagePath} alt="nct weekly best 이미지입니다."/>
                        <div className="weekly-best-info">
                            <div className="weekly-best-txt">
                                <div className="artist">
                                    {showcase.artist}
                                </div>
                                <div className="weekly-best-name">
                                    {showcase.name}
                                </div>
                                <div className="price">
                                    {showcase.price}
                                </div>
                            </div>
                            {/*<div className="cart">*/}
                            <div className="cart" onClick={() => modalRef.simpleDialog.show()}>
                                <img src={CartIcon}/>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            <SkyLight
                hideOnOverlayClicked
                ref={ref => modalRef.simpleDialog = ref}
            >
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
                                <div className="content-artist">
                                    NCT 127
                                </div>
                                <div className="content-title">
                                    XR LIVE NCT 127 SPECIAL EVENT : THE CASTLE No. 127
                                </div>
                                <div className="select-detail">
                                    <p>
                                        <select>
                                            <option>- [필수] CELEB 선택 -</option>
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
            </SkyLight>
        </Swiper>
    )
}

export default CelebNctWeeklyBanner;
