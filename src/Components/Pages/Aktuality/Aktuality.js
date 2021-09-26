import React from "react";
import './Aktuality.css';
import AktualityList from "./Aktuality_list";

function Aktuality() {

    return(
        <div className="content">
            <div className="content_title">
                <h1>AKTUALITY</h1>
            </div>
            <AktualityList />
        </div>
    );
};

export default Aktuality;