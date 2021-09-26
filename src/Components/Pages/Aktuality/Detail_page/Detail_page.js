import React from "react";
import {useParams} from "react-router-dom";

function Detail_page () {

    let {id} = useParams();

    // useEffect(() => {
    //     Axios.get("/api/")
    // }, [])

    return (
        <div className="content">
            <div className="content_title">
                {/* <h1>{header}</h1> */}
            </div>
            {/* <p className="aktualita-text">{text}</p> */}

            Detail Page
            <p>This is link to detail {id}</p>
        </div>
    );
};

export default Detail_page;