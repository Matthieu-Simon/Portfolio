import ImageKasa from "../../assets/images/Kasa.png";
import ImageArgentBank from "../../assets/images/argentBankLogo.png";
import ImageBluel from "../../assets/images/sophie-bluel.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";

const Projects = () => {
    return(
        <section id="project" className="project">
            <h2 className="title-section">Projets</h2>
            <div className="content-project">
                <p className="text-content-project">TEST</p>
                <div className="list-project">
                    <div className="card">
                        <img 
                            className="img-project" 
                            src={ImageBluel} alt="Image du projet" 
                        />
                        <div className="card-content">
                            <h3 className="title-card-content">Sophie Bluel</h3>
                            <div className="description-content"></div>
                            <div className="card-links">
                                <a href="https://github.com/Matthieu-Simon/Portfolio-Architecte" className="card-link" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon 
                                    icon={faGithub} className="icon-card"
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img 
                            className="img-project kasaLogo" 
                            src={ImageKasa} alt="Image du projet" 
                        />
                        <div className="card-content">
                            <h3 className="title-card-content">Kasa</h3>
                            <div className="description-content"></div>
                            <div className="card-links">
                                <a href="https://github.com/Matthieu-Simon/Kasa" className="card-link" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon 
                                    icon={faGithub} className="icon-card"
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img 
                            className="img-project argentBankLogo" 
                            src={ImageArgentBank} alt="Image du projet"
                        />
                        <div className="card-content">
                            <h3 className="title-card-content">Argent Bank</h3>
                            <div className="description-content"></div>
                            <div className="card-links">
                                <a href="https://github.com/Matthieu-Simon/ArgentBank-website" className="card-link" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon 
                                        icon={faGithub} className="icon-card"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;