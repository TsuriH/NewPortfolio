import "./Header.css";
import { useState } from "react";
import orangeCircle from "../../../Images/orange-circle-header.png"
export function Header(): JSX.Element {

    const [menuIsDisplayed, setMenuIsDisplayed] = useState(false)

    return (
        <div className="Header">

            <div className="logo-wrapper">
                <p className="logo">TsuriHeffer<span>.</span></p>
            </div>
            {/* mobile menu */}
            <nav className="menu-open" style={{ height: menuIsDisplayed ? "140%" : "0" }}>
                <a href="#about" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>About</a>
                <a href="#projects" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>Projects</a>
                <a href="#contact" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>Contact</a>
            </nav>

            <div className="nav_circles">
                <img src={orangeCircle} alt="" className="orange-circle" />
                <div className="blue-circle-header"></div>
            </div>

            {/* mobile-menu-button */}
            <div className={`hamburger-menu ${menuIsDisplayed ? 'open' : ''}`} onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>


        </div>
    );
}



