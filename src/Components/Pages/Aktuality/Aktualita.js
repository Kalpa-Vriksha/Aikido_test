import React from "react";
import {Link} from "react-router-dom";

// const Aktualita = ({key, header, text}) => {
//     return (
//         <div>
//             <Link className="aktualita_link" to={"/aktuality/"+header}><header className="aktualita-header">{header}</header></Link>
//             <p className="aktualita-text">{text}</p>
//         </div>
//     );
// };

const Aktualita = ({key, header, text}) => {
    return (
        <div>
            <Link className="aktualita_link" to={"/aktuality/"+header}><header className="aktualita_header">{header}</header></Link>
            <div className="aktualita_text" dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
    );
};

export default Aktualita;