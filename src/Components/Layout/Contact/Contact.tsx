import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { faLinkedin, faSquareWhatsapp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import mobileBlueCircle from "../../../Images/mobile-blue-circle.png"
import mobileSmallGreyCircle from "../../../Images/mobile-small-grey-circle.png"


export function Contact(): JSX.Element {
    return (
        <div className="Contact">
            <h2 className="contact_title">contact</h2>

            <form action="">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Phone Number" />
                <textarea placeholder="Message"></textarea>
                <button className="send-btn">SEND</button>
            </form>

            <div className="social-icons-container">
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <img src={mobileBlueCircle} alt="" className="mobile-blue-circle" />
            <img src={mobileSmallGreyCircle} alt="" className="mobile-small-grey-circle" />

        </div>
    );
}
