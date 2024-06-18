import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header(): JSX.Element {
    return (
        <div className="Header">
            <p className="logo">TsuriHefer<span>.</span></p>
            <FontAwesomeIcon icon={faBars} className="hamburger-menu"/>
        </div>
    );
}
