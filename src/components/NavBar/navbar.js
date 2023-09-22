import React, {useState} from "react";
import "./navbar.css";
import logo from "../../assets/rsz_logo_me.jpg";
import menuLogo from "../../assets/menu.png";
import contactImg from "../../assets/contact.png";
import {Link} from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
                <Link activeClass="active" to="research" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Publication</Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contactPage").scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </button>


            <img src={menuLogo} alt="Menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="mobNavMenu" style={{display: showMenu? "flex":"none"}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Experience</Link>
                <Link activeClass="active" to="research" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Publication</Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;