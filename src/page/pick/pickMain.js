import React from "react";
import Header from "../../component/header";
import {Link} from "react-router-dom";



const pickMain = () => {
    return(
        <div>
            <Link to="/pickKey" className="sub-menu-link">
                <span>테스트입니다</span>
            </Link>
        </div>
    );
}

export default pickMain;