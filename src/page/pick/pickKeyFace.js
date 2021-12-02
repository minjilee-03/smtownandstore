import React from "react";
import Header from "../../component/blackHeader/aftetLoginBlackHeader";
import "../../css/pickKey.css";
import pick from "../../assets/pick_title.png";
import imageSection1 from "../../assets/pick/key/keyImageSection1.jpg";
import imageSection2 from "../../assets/pick/key/keyImageSection2.jpg";
import imageSection3 from "../../assets/pick/key/keyImageSection3.jpg";

import Keface1 from "../../assets/pick/key/KEYFACE1.gif";
import Keface2 from "../../assets/pick/key/KEYFACE2.gif";
import Keface3 from "../../assets/pick/key/KEYFACE3.gif";
import Keface4 from "../../assets/pick/key/KEYFACE4.gif";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const pickKeyFace = () => {
  return (
    <div>
      <Header />
      <div className="pickKeySection">
        <div>
          <div>
            <div>
              <h2 className="title">
                <img src={pick} className="title-image" />
              </h2>
            </div>
            <div className="Section">
              <img src={imageSection1} className="imageSection" />
              <a
                href="https://www.smtownandstore.com/product/list.html?cate_no=1434"
                className="more-product"
              />
              <div className="vedioContainer">
                <ReactPlayer
                  className="keyVedio"
                  url="https://youtu.be/Nfab0xebvzA"
                  playing
                  controls
                />
              </div>
            </div>
            <div className="Section">
              <img src={imageSection2} className="imageSection" />
              <div className="making_gif_container">
                <img src={Keface1} className="keface keface1" />
                <img src={Keface2} className="keface keface2" />
                <img src={Keface3} className="keface keface3" />
                <img src={Keface4} className="keface keface4" />
              </div>
                <a
                    href="https://www.smtownandstore.com/product/list.html?cate_no=1434"
                    className="more-product-section2"
                />
                <a
                    href="https://www.smtownandstore.com/product/list.html?cate_no=1434"
                    className="more-product-section2"
                />
                <a
                    href="https://www.smtownandstore.com/product/list.html?cate_no=1434"
                    className="more-product-section2"
                />
            </div>
            <div className="Section">
              <img src={imageSection3} className="imageSection" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pickKeyFace;
