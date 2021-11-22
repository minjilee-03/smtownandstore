import React, {Component} from "react";

import NewItemBanner from "./new-item-banner";
import "../css/new-item.css";
import '../css/index.css';

function NewItem() {
    return (
        <div className="new-item-container">
            <div className="new-item-title">
                New Items
            </div>
            <div className="title-point"></div>
            <div className="new-item-banner-container">
                <NewItemBanner/>
            </div>
        </div>
    );
}

export default NewItem;