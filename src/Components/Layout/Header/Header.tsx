import "./Header.css";
import { useState } from "react";
import orangeCircle from "../../../Images/orange-circle-header.png"
export function Header(): JSX.Element {

    const [menuIsDisplayed, setMenuIsDisplayed] = useState(false)

    return (
        <div className="Header">
            <img src= {orangeCircle} alt="" className="orange-circle"/>
            <p className="logo">TsuriHefer<span>.</span></p>

            <div className={`hamburger-menu ${menuIsDisplayed ? 'open' : ''}`} onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <nav className="menu-open" style={{ height: menuIsDisplayed ? "100%" : "0" }}>
                <a href="#about" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>About</a>
                <a href="#projects" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>Projects</a>
                <a href="#contact" onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}>Contact</a>
            </nav>
            <div className="blue-circle-header"></div>
        </div>
    );
}



