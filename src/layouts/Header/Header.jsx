import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";

const Header = () => {


    return(
        <div id="home">
            <header id="header" className="header">
                <Navbar />
                
                    <div 
                    className="burger-menu"
                    >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                
            </header>
        </div>
    )
};

export default Header;