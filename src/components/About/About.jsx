import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ImageProfil from "../../assets/images/photo.jpeg";
import "./About.css";

const About = () => {
    const myText = "Je suis Matthieu Simon, après 12 ans en tant que Technicien de Laboratoire j'ai décidé de changer de voie et de me reconvertir aux métiers de l'informatique et plus précisement en tant que Développeur Frontend. J'ai donc suivi une formation d'intégrateur web avec OpenClassRooms ou pendant 9 mois j'ai pu à travers différents projets apprendre les bases du métier.";
    
    return(
        <section id="about" className="about">
            <h2 className="title-section">About</h2>
            <div className="about-content">
                <p className="text-about">
                    <span className="slt-about">Salut !</span>
                    {myText}
                </p>
                <div className="link-about">
                    <img 
                        className="img-profil"
                        src={ImageProfil} alt="Photo Profil" 
                    />
                    <div className="link-media">
                        <a 
                            href="https://www.linkedin.com/in/matthieu-simon-8a9210222/" 
                            target="_blank" 
                            rel="noreferrer">
                            <FontAwesomeIcon 
                                icon={faLinkedin} className="social-media"
                            />
                        </a>
                        <a href="https://github.com/Matthieu-Simon" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                icon={faGithub} className="social-media"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;