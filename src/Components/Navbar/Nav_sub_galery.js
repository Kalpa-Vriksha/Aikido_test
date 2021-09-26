import React, { useState } from "react";
import {NavLink} from "react-router-dom";

const NavSubGalery = () => {

    const [subNavOpen, setSubnavOpen] = useState(false);

    const showSubNav = () => {
        setSubnavOpen(!subNavOpen)
    }

    return (
        <ul className="nav-list" onClick={toogleNav}>
            <NavLink to="/galerie/2021" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2021</li></NavLink>
            <NavLink to="/galerie/2020" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2020</li></NavLink>
            <NavLink to="/galerie/2019" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2019</li></NavLink>
            <NavLink to="/galerie/2018" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2018</li></NavLink>
            <NavLink to="/galerie/2017" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2017</li></NavLink>
            <NavLink to="/galerie/2016" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2016</li></NavLink>
            <NavLink to="/galerie/2015" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2015</li></NavLink>
            <NavLink to="/galerie/2014" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2014</li></NavLink>
            <NavLink to="/galerie/2013" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2013</li></NavLink>
            <NavLink to="/galerie/2012" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2012</li></NavLink>
            <NavLink to="/galerie/2011" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2011</li></NavLink>
            <NavLink to="/galerie/2010" className="nav-sub-Link" activeClassName="nav-sub-Link-active"><li>2010</li></NavLink>
        </ul>
    )
}

export default NavSubGalery;