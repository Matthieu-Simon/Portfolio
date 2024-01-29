import "boxicons/css/boxicons.min.css";
import "./Skills.css";

const Skills = () => {
    return(
        <section id="skills" className="skills">
            <h2 className="title-section">Skills</h2>
            <div className="skills-content">
                <div className="icon-content">
                    <div className="icon-top">
                        <i className='bx bxl-html5'></i>
                        <i className='bx bxl-css3'></i>
                        <i className='bx bxl-javascript'></i>
                        <i className='bx bxl-react'></i>
                        <i className='bx bxl-redux'></i>
                    </div>
                    <div className="icon-bottom">
                        <i className='bx bxl-sass'></i>
                        <i className='bx bxl-tailwind-css'></i>
                        <i className='bx bxl-figma'></i>
                        <i className='bx bxl-github'></i>
                        <i className='bx bxl-git'></i>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;