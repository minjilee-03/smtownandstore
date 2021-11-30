// import Swiper core and required modules
import React, {useEffect,  useState} from "react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import SkyLight from 'react-skylight';
import $ from "jquery";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.scss";
import '../css/swiper.css';

import '../css/celeb/nct.css';

import right_arrow from '../assets/weekly_arrow_right.png';
import left_arrow from '../assets/weekly_arrow_left.png';

import CartIcon from '../assets/cart.png';

import celeb_nct_weekly from "../data/celeb-nct-weeklybest.json";

import Modal from './modal'

const CelebNctWeeklyBanner = () => {
    SwiperCore.use([Navigation,Pagination,Autoplay]);

    const swiperRef = React.useRef(null);

    const modalRef = useState(0);
    const [showcaseId, setShowcaseId] = useState(null)


    //토글
    useEffect(()=>{
        $("select option[value*='Sold Out']").prop('disabled',true);
        $(document).ready(function () {
            $('.celeb_side_sub_list').hide();
            $('.celeb_side_item').click(function () {
                $(this).children('.celeb_side_sub_list').slideToggle(1500);
            });
        });


    }, []);


    useEffect(() => {
        if(showcaseId) {
            modalRef.simpleDialog.show()
        }

    }, [showcaseId])

    return(
        <div>
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
                                <div className="cart"
                                     onClick={() => {
                                         setShowcaseId(showcase.id)
                                }}>
                                    <img src={CartIcon}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <SkyLight
                hideOnOverlayClicked
                ref={ref => modalRef.simpleDialog = ref}
            >
                <Modal  showcaseId={showcaseId}/>
            </SkyLight>
        </div>
    )
}

export default CelebNctWeeklyBanner;
