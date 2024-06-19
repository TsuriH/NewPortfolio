import "./About.css";
import mobileGreyCircle from "../../../Images/mobile-grey-circle.png"
import mobileOrangeCircle from "../../../Images/mobile-orange-circle.png"
export function About(): JSX.Element {
    return (
        <div className="About">
            <p className="about_intro">Hello My Name Is <span>Tsuri<span className="point">.</span></span></p>

            <h1 className="about_title">a full stack web developer</h1>

            <p className="about_description">I’m passionate about Front-End, particularly React. having saying that I do backend too. I have a background in motion design and graphic design. in addition to expertise in UX/UI, client relations, and creativity.</p>

            <button className="about-btn">My Projects</button>
            <img src={mobileGreyCircle} alt="" className="mobile-grey-circle" />
            <img src={mobileOrangeCircle} alt="" className="mobile-orange-circle" />
        </div>
    );
}
