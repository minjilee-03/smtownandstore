// import Swiper core and required modules
import React, {Component, useMemo} from "react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import '../css/swiper.css';
import '../css/celeb/nct.css';

import arrow from '../assets/swiper-arrow.svg';


import celeb_boa_main from "../data/celeb-boa-main.json";

function CelebNctBanner() {
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
            {celeb_boa_main.celeb_boa_main.map(showcase =>{
                return (
                    <SwiperSlide key={showcase.id}
                                 style={{ backgroundImage: `url(${'https://www.smtownandstore.com'+showcase.imagePath})` }}>
                        <div className="perv" onClick={() => swiperRef.current.swiper.slidePrev()}
                             style={{ backgroundImage: `url(${arrow}`}}/>
                        <div className="next" onClick={() => swiperRef.current.swiper.slideNext()}
                             style={{ backgroundImage: `url(${arrow}`}}/>
                        <div className="swiper-pagination"></div>
                        <div className="main-banner-wrap">
                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


export default CelebNctBanner;