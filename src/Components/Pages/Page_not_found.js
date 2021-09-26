import React from "react";
import {useHistory} from "react-router-dom";

const Page_not_found = () => {

    let history = useHistory();

    return (
        <div className="content">
            <div className="content_title">
                <h1>404 - Page Not Found</h1>
            </div>
            <div className="content_content">
                <h3>Don´t know how exactly you get there, but let me show you the way back to our home page - the safe areas of web. :-)</h3>
                <br />
                <p onClick={() => {history.push("/");}}><u>Odkaz na home page</u></p>
            </div>
        </div>
    );
};

export default Page_not_found;