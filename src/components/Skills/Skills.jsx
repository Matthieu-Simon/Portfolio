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
    const firstTextSkills = "Voici les différents langages et outils que j'ai appris et pratiquer en réalisant les différents projets durant ma formation.";
    const secondTextSkills = "C'est la stack classique du développeur frontend avec du HTML5 & CSS3 ainsi que le langage JavaScript et sa librairie ReactJS. Pour un des projets on devait utiliser Redux pour la gestion du state. J'ai aussi appris à utiliser Figma et Git pour le versionning des projets à réaliser.";

    return(
        <section id="skills" className="skills">
            <h2 className="title-section">Skills</h2>
            <div className="skills-content">
                <div className="text-skills">
                    <p className="text-section-skills">
                        {firstTextSkills}
                    </p>
                    <p className="text-section-skills">
                        {secondTextSkills}
                    </p> 
                </div>
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