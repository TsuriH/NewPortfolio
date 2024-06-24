import "./MyProjects.css";
import yellow from "../../../Images/1.jpg"
import girls from "../../../Images/2.jpeg"
import woman from "../../../Images/3.jpeg"
import whiteCircle from "../../../Images/white-circle-project.png"
import points from "../../../Images/points-projects.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export function MyProjects(): JSX.Element {

    return (
        <div className="MyProjects">
            <img src={whiteCircle} alt="" className="white-circle" />
            <img src={points} alt="" className="points" />
            <h2 className="myproject-title">my projects</h2>
            <div className="projects-container">
                
                <button><FontAwesomeIcon icon={faArrowRight} className="arrow left" /></button>

                <div className="project-box">
                    <div className="project-desc">
                        <h2 className="project-headline">ecommerce</h2>
                        <p className="project-sub-head">clothes shop</p>
                    </div>
                    <img src={yellow} alt="" />
                </div>

                <div className="project-box">
                    <div className="project-desc">
                        <h2 className="project-headline">social media</h2>
                        <p className="project-sub-head">clone</p>
                    </div>
                    <img src={girls} alt="" />
                </div>

                <div className="project-box">
                    <div className="project-desc">
                        <h2 className="project-headline">art</h2>
                        <p className="project-sub-head">landing page</p>
                    </div>
                    <img src={woman} alt="" />
                </div>

                <button><FontAwesomeIcon icon={faArrowRight} className="arrow right" /></button>

            </div>
        </div>
    );
}
