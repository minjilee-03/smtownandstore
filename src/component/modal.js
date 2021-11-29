import React, {useState, useRef, useEffect} from 'react';
import SkyLight from "react-skylight";
import down_arrow from "../assets/down_arow.png";
import {Link} from "react-router-dom";

import '../css/cart.css';
import '../css/modal.css';
import celeb_nct_weekly from "../data/celeb-nct-weeklybest.json";


const Modal = (props) => {


    const {showcaseId} = props || {}

    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
        alert("선택된 ===>", e.target.value)
    };


    const [period, setPeriod] = useState(null)

    const onPeriodChange = (e) => {
        const {value} = e.target
        setPeriod(value)

    }

    const nctDream = [
        {id: 0, value: "MARK"},
        {id: 1, value: "RENJUN"},
        {id: 2, value: "JENO"},
        {id: 3, value: "HEACHAN"},
        {id: 4, value: "JAEMIN"},
        {id: 5, value: "CHENLE"},
        {id: 6, value: "JISUNG"},

    ]

    const nct127 = [
        {id: 0, value: "TAEIL"},
        {id: 1, value: "JHONNY"},
        {id: 2, value: "TAEYONG"},
        {id: 3, value: "YUTA"},
        {id: 4, value: "DOYOUNG"},
        {id: 5, value: "JAEHYUN"},
        {id: 6, value: "JUNGWOO"},
        {id: 7, value: "MARK"},
        {id: 8, value: "HEACHAN"},
    ]

    const nctAll = [
        {id: 0, value: "TAEIL"},
        {id: 1, value: "JHONNY"},
        {id: 2, value: "TAEYONG"},
        {id: 3, value: "YUTA"},
        {id: 4, value: "DOYOUNG"},
        {id: 5, value: "JAEHYUN"},
        {id: 6, value: "JUNGWOO"},
        {id: 7, value: "MARK"},
        {id: 8, value: "HEACHAN"},
        {id: 9, value: "RENJUN"},
        {id: 10, value: "JENO"},
        {id: 11, value: "JAEMIN"},
        {id: 12, value: "CHENLE"},
        {id: 13, value: "JISUNG"},
    ]

    if(!showcaseId) {
        return null
    }

    if(!celeb_nct_weekly.celeb_nct_weekly[showcaseId].imagePath){
        return null
    }
    else if(!celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist){
        return "NCT"
    }
    else if(!celeb_nct_weekly.celeb_nct_weekly[showcaseId].name){
        return "빈값입니다"
    }
    else if(!celeb_nct_weekly.celeb_nct_weekly[showcaseId].price){
        return "0"
    }


    return (

        <div>
            <div className="header">
                <h1>옵션 선택</h1>
            </div>
            <div className="content">
                <div className="content-wrap">
                    <div className="content-container">
                        <div className="exam-image-wrap">
                            <img src={"https://www.smtownandstore.com"
                            + celeb_nct_weekly.celeb_nct_weekly[showcaseId].imagePath}
                                 className="exam-iamge"/>
                        </div>
                        <div className="content-info">
                            <div className="content-text">
                                <div className="content-artist">
                                    {celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist}
                                </div>
                                <div className="content-title">
                                    {celeb_nct_weekly.celeb_nct_weekly[showcaseId].name}
                                </div>
                            </div>
                            <div className="select-detail">
                                <p>
                                    <select className="select" style={{ backgroundImage: `url(${down_arrow}`}}
                                            value={period || ''}
                                            onChange={onPeriodChange}
                                        >


                                        {
                                            (function() {//시간 남으면 수정하기

                                                const nowArtist = celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist

                                                if ("NCT DREAM" === nowArtist)
                                                    return (
                                                        nctDream.map(period => {
                                                            return <option key={period.id  || ''} onChange={handleSelect}>
                                                                {period.value}
                                                            </option>
                                                        })
                                                    );

                                                if ("NCT 127" === nowArtist) return (
                                                    nct127.map(period => {
                                                        return <option key={period.id  || ''}  onChange={handleSelect} value={period.value}>
                                                            {period.value}
                                                        </option>
                                                    })
                                                );

                                                if ("NCT" === nowArtist) return (
                                                    nctAll.map(period => {
                                                        return <option key={period.id  || ''} onChange={handleSelect}>
                                                            {period.value}
                                                        </option>
                                                    })
                                                );
                                            })()
                                        }

                                    </select>
                                </p>
                            </div>
                            <div className="read-comment">
                                위 옵션을 선택하시면 아래에 상품이 추가됩니다.
                            </div>
                        </div>
                    </div>
                    <div className="totalPrice">
                        총 상품금액(수량) <span className="total"><em>{celeb_nct_weekly.celeb_nct_weekly[showcaseId].price}</em>(0개)</span>
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








