import ImageFigma from "../../assets/images/iconFigma.svg";
import ImageRedux from "../../assets/images/iconRedux.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

const Skills = () => {
    return(
        <section id="skills" className="skills">
            <h2 className="title-section">Skills</h2>
            <div className="skills-content">
                <div className="stack-skills">
                    <div className="icon-content">
                        <div className="icon-top">
                            <FontAwesomeIcon
                                icon={faHtml5} className="icon"
                            />
                            <FontAwesomeIcon 
                                icon={faCss3Alt} className="icon"
                            />
                            <FontAwesomeIcon 
                                icon={faSass} className=" icon"
                            />
                            <FontAwesomeIcon 
                                icon={faJs} className="icon" 
                            />
                        </div>
                        <div className="icon-bottom">
                            <FontAwesomeIcon 
                                icon={faReact} className="icon" 
                            />
                            <img src={ImageRedux} alt="Logo Redux" className="icon-skills" />
                            <img src={ImageFigma} alt="Logo Figma" className="icon-skills" />
                            <FontAwesomeIcon 
                                icon={faGitAlt} className="icon-skills"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;