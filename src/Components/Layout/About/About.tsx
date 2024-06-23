import "./About.css";
import mobileGreyCircle from "../../../Images/mobile-grey-circle.png"
import mobileOrangeCircle from "../../../Images/mobile-orange-circle.png"
import profileImage from "../../../Images/character.png"


export function About(): JSX.Element {


    return (

        <div className="About">

            <div className="about_content">
                
                <div className="text-con">

                    <p className="about_intro">Hello My Name Is <span>Tsuri<span className="point">.</span></span></p>

                    <h1 className="about_title">a full stack web developer</h1>

                    <p className="about_description">I’m passionate about Front-End, particularly React. having saying that I do backend too. I have a background in motion design and graphic design. in addition to expertise in UX/UI, client relations, and creativity.</p>

                    <button className="about-btn">My Projects</button>
                </div>

                <div className="profile-image-con">
                    <img src={profileImage} alt="" />
                </div>

            </div>

            <div className="img-cont">
                <img src={mobileOrangeCircle} alt="" className="orange-circle" />

                <img src={mobileGreyCircle} alt="" className="grey-circle" />
            </div>


        </div>

    );
}
