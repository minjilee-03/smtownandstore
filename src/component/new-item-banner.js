// import Swiper core and required modules
import React, {Component, useMemo, useState} from "react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import "../css/main-banner.css";
import '../css/swiper.css';

import new_items from "../data/new-items.json";

function NewItemBanner() {
    SwiperCore.use([Navigation,Pagination,Autoplay]);

    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
        >
            {new_items.new_items.map(new_item =>{
                return (
                    <SwiperSlide key={new_item.id}>
                        <div className="new-items-slide-wrap">
                            <img className="new-items-slide-image" src={"https://www.smtownandstore.com/"
                            +new_item.imagePath} alt="new items 배너 이미지입니다."/>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        
    )
}

export default NewItemBanner;
