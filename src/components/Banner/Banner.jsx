import "./Banner.css";

const Banner = () => {
    return(
        <section className="presentation">
            <div className="content-presentation">
                <div>
                    <h1 className="title">Matthieu Simon</h1>
                    <h2 className="subtitle">Développeur Frontend</h2>
                </div>
                <a className="link-project" href="#project">Mes projets</a>
            </div>
        </section>
    )
};

export default Banner;