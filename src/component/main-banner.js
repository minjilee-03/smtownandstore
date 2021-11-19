// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import "../css/main-banner.css";
import '../css/swiper.css';

import showcase_image from "../data/showcase_image.json";


function MainSlideFun() {
    SwiperCore.use([Navigation,Pagination,Autoplay]);
    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000 }}
        >

            {showcase_image.showcase_image.map(showcase =>{
                return (
                    <SwiperSlide>
                        <div className="main-banner-wrap">
                            <div className="main-banner-ment">
                                {showcase.ment}
                            </div>
                            <img className="main-slide-image" src={"https://www.smtownandstore.com"
                            +showcase.imagePath} alt="메인 배너 이미지입니다."/>
                        </div>
                        {/*<div className="background-color-container"
                             style={{backgroundColor: showcase.backgroung_color}}>
                            &nbsp
                        </div>*/}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


export default MainSlideFun;







// import React, {Component} from "react";
//
// import '../css/main-banner.css';
// import sticker from '../assets/sticker-main-banner.jpg'
//
// class MainSlide extends Component{
//     render(){
//         return (
//             <div className="main-banner-slide">
//                 <img src={sticker}/>
//             </div>
//         );
//     }
// }
// export default MainSlide;


