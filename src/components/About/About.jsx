import DownloadButton from "../DownloadButton/DownloadButton";
import ImageProfil from "../../../public/images/photo.jpeg";
import "./About.css";

const About = () => {
    return(
        <section id="about" className="about">
            <h2 className="title-section">About</h2>
            <div className="about-content">
                <div className="description-about-content">
                    <h1 className="title-about">Matthieu Simon</h1>
                    <h2 className="subtitle">Développeur Front-end.</h2>
                    <p className="text-about">Bonjour, je suis Matthieu Simon, passioné par le développement web et particulièrement le développement front-end avec une spécialité en ReactJS. Aprés avoir découvert la programmation, j'ai décidé de m'y consacrer pleinement. J'ai suivi une formation d'intégrateur web avec OpenClassRooms ou j'ai pu acquérir des bases en développement web en apprenant le HTML, CSS, le langage JavaScript ainsi que sa bibliothèque ReactJS en réalisant différents projets.</p>
                    <p className="text-about">En plus de ma formation, je suis maintien une veille concernant les dernières tendances et technologies du développement web. Je continue mon apprentissage autour de l'ecosystème JavaScript.</p>
                    <p className="text-about">Je suis actuellement ouvert à de nouvelles opportunités où je pourrais contribuer, apprendre et évoluer en tant que développeur web et me perfectionner dans la création d'interfaces utilisateur dynamiques.</p>
                </div>
                <div className="link-about">
                    <img className="img-profil" src={ImageProfil} alt="Photo Profil" />
                    <div className="link-media">
                        <a 
                            href="https://www.linkedin.com/in/matthieu-simon-8a9210222/" 
                            target="_blank" 
                            rel="noreferrer">
                            <i className="bx bxl-linkedin-square social-media" />
                        </a>
                        <a href="https://github.com/Matthieu-Simon" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github social-media" />
                        </a>
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;