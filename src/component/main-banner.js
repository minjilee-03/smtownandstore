// import Swiper core and required modules
import React, {Component, useMemo} from "react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import "../css/main-banner.css";
import '../css/swiper.css';



import showcase_image from "../data/showcase_image.json";
import arrow from "../assets/swiper-arrow.svg";

function MainSlideFun() {
    SwiperCore.use([Navigation,Pagination,Autoplay]);

    const swiperRef = React.useRef(null);

    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}

            pagination={{el: '.swiper-pagination', clickable: true }}
            // pagination={{ clickable: true  , el: '.swiper-pagination',}}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 4500 }}
            initialSlide={1}
            ref={swiperRef}
        >
            {showcase_image.showcase_image.map(showcase =>{
                return (
                    <SwiperSlide key={showcase.id} className="main-swiper">
                        <div className="perv" onClick={() => swiperRef.current.swiper.slidePrev()}
                             style={{ backgroundImage: `url(${arrow}`}}/>
                        <div className="next" onClick={() => swiperRef.current.swiper.slideNext()}
                             style={{ backgroundImage: `url(${arrow}`}}/>
                        <div className="swiper-pagination"></div>
                        <div className="main-img-more">자세히 보기</div>
                        <div className="background-color-container" style={{backgroundColor: "#"+ showcase.BackgroundColor}}></div>
                        <div className="main-banner-wrap">
                            <div className="main-banner-ment">
                                {showcase.ment}
                                <span className="main-banner-ment-line"></span>
                            </div>
                            <img className="main-slide-image" src={"https://www.smtownandstore.com"
                            +showcase.imagePath} alt="메인 배너 이미지입니다."/>
                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


export default MainSlideFun;