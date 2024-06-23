import "./MyProjects.css";
import yellow from "../../../Images/1.jpg"
import girls from "../../../Images/2.jpeg"
import woman from "../../../Images/3.jpeg"
export function MyProjects(): JSX.Element {
    return (
        <div className="MyProjects">
            <h2 className="myproject-title">my projects</h2>
            <div className="projects-container">

                <div className="project-box">
                    <img src={yellow} alt="" />
                </div>

                <div className="project-box">
                    <img src={girls} alt="" />
                </div>

                <div className="project-box">
                    <img src={woman} alt="" />
                </div>
              
                
                

            </div>
        </div>
    );
}
