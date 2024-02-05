import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return(
        <div className={`header ${isSticky ? "sticky" : ""}`}>
            <nav className="nav-header">
                <a href="https://github.com/Matthieu-Simon" className="icon-github-nav"><i className='bx bxl-github'></i></a>
                <ul>
                    <li>
                        <Link to="/" onClick={scrollToTop}>
                            Home
                        </Link>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {isMobileMenuOpen && (
                <div className="nav-header-mobile mobile-menu">
                    <ul>
                        <li><a href="#home" onClick={scrollToTop}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#project">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
            <div 
            className={`burger-menu ${isMobileMenuOpen ? "change" : ""}`}
            onClick={toggleMobileMenu}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
};

export default Header;