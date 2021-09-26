import React, {useState, useEffect} from "react";
import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav() {

    const [toogleMenu, setToogleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toogleNav = () => {
        setToogleMenu(!toogleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeWidth)

        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [])

    // const [active_link, setActiveLink] = useState()

    // return (
    //     <nav>
    //         {(toogleMenu || screenWidth > 600) && (
    //             <ul className="nav-list" onClick={toogleNav}>
    //                 <NavLink exact to="/aikido" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Aikido</li></NavLink>
    //                 <NavLink to="/aktuality" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Aktuality</li></NavLink>
    //                 <NavLink to="/kalendar" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Kalendář</li></NavLink>
    //                 <NavLink to="/nabor" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Nábor</li></NavLink>
    //                 <NavLink to="/kontakty" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Kontakty</li></NavLink>
    //                 <NavLink to="/treneri" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Trenéři</li></NavLink>
    //                 <NavLink to="/historie" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Historie</li></NavLink>
    //                 <NavLink to="/galerie" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Galerie</li></NavLink>
    //                 <NavLink to="/odkazy" className="nav-Link" activeClassName="nav-Link-active"><li className="nav-items">Odkazy</li></NavLink>
    //             </ul>
    //         )}
    //         <button onClick={toogleNav} className="nav-button"><i className="material-icons">menu</i></button>
    //     </nav>
    // )

    return (
        <nav>
            {(toogleMenu || screenWidth > 600) && (
                <ul className="nav-list" onClick={toogleNav}>
                    <NavLink to="/aktuality" className="nav-Link" activeClassName="nav-Link-active"><li>Aktuality</li></NavLink>
                    <NavLink to="/kalendar" className="nav-Link" activeClassName="nav-Link-active"><li>Kalendář</li></NavLink>
                    <NavLink to="/nabor" className="nav-Link" activeClassName="nav-Link-active"><li>Nábor</li></NavLink>
                    <NavLink to="/treneri" className="nav-Link" activeClassName="nav-Link-active"><li>Trenéři</li></NavLink>
                    <NavLink exact to="/aikido" className="nav-Link" activeClassName="nav-Link-active"><li>Aikido</li></NavLink>
                    <NavLink to="/historie" className="nav-Link" activeClassName="nav-Link-active"><li>Historie</li></NavLink>
                    <NavLink to="/galerie" className="nav-Link" activeClassName="nav-Link-active"><li>Galerie</li></NavLink>
                    <NavLink to="/odkazy" className="nav-Link" activeClassName="nav-Link-active"><li>Odkazy</li></NavLink>
                    <NavLink to="/kontakty" className="nav-Link" activeClassName="nav-Link-active"><li>Kontakty</li></NavLink>
                </ul>
            )}
            <button onClick={toogleNav} className="nav-button"><i className="material-icons">menu</i></button>
        </nav>
    )
}

export default Nav;