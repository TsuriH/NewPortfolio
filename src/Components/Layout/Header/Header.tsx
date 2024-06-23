import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Header(): JSX.Element {

    const [menuIsDisplayed, setMenuIsDisplayed] = useState(false)

    return (
        <div className="Header">
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
        </div>
    );
}



