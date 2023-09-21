import React from "react";
import "./intro.css";
import bg from "../../assets/image.jpg";
import btnImg from "../../assets/hire.png";
import {Link} from "react-scroll";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Pinto</span><br/>Computer Engineer</span>
                <p className="introPara">Graphic Designer | Full Stack Developer<br/>Research Area: NLP, IOT & Image Processing</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src= {bg} alt="profile" className="bg"/>
        </section>
    )
}

export default Intro;