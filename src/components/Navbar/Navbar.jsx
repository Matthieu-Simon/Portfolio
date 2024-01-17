import "./Navbar.css";

const NavBar = () => {
    return(
        <div className="navbar">
            <nav className="nav-header">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Mes Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* Partie Menu Mobile */}
            <nav className="nav-header-mobile mobile-menu">
                <ul>
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#project">
                            Mes Projets
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;