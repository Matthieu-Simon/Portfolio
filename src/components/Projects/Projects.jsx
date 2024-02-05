import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageKasa from "../../../public/images/projets/Kasa.png";
import ImageArgentBank from "../../../public/images/projets/argentBankLogo.png";
import ImageBluel from "../../../public/images/projets/sophie-bluel.png";
import { db, collection, getDocs } from "../../firebase/firebase";
import "boxicons/css/boxicons.min.css";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const projectImages = {
        "Kasa": ImageKasa,
        "Argent Bank": ImageArgentBank,
        "Portfolio - Sophie Bluel": ImageBluel
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const projectsCollection = await getDocs(collection(db, "Projects"));
            const projectsData = projectsCollection.docs.map((doc) => doc.data());
    
            setProjects(projectsData);
        } catch (error) {
            console.error("Error fetching projects: ", error);
        }
    };

    return(
        <section id="project" className="project">
            <h2 className="title-section">Projets</h2>
            <div className="content-project">
                <div className="list-project">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <img 
                            className="img-project" 
                            src={projectImages[project.title]} alt={`Image du projet ${project.title}`} 
                        />
                        <h3 className="title-card-content">{project.title}</h3>
                        <a 
                            href={project.link} className="card-link"
                            target="_blank" rel="noreferrer"
                        >
                            <i className='bx bxl-github icon-card'></i>
                        </a>
                        <div>
                            <p className="description-project">{project.description}</p>
                            <ul className="list-skills-content">
                                {project.technologies && Array.isArray(project.technologies) && (project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex} className="list-skills">
                                        <i className={tech.icon}></i> {tech.name}
                                    </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
                <Link to="Admin" className="link-add-project">
                    Ajouter un projet
                </Link>
            </div>
        </section>
    )
};

export default Projects;