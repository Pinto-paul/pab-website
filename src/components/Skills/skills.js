import React from "react";
import "./skills.css";
import gdLogo from "../../assets/graphic_designer.png";
import wdLogo from "../../assets/web_developer.png";
import research from "../../assets/research.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">
               What I <b>DO!</b> 
            </span>
            <span className="skillDescription">
                Self-learnt graphic designer, also have an Intership from 10 Minute School. Professionally, I am a Full Stack Developer, have 2 years of experience in this field. From September, 2019 to October, 2021, I was employed as a Lecturer in the Department of Computer Science and Engineering at Ranada Prasad Shaha University, Narayanganj. I also have some research works on different fields of Computer Science like NLP, IoMT and Image Processing.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={gdLogo} alt="Graphic Designer" className="skillBarImage"/>
                    <div className="skillBarText">
                        <h2>Graphic Designer</h2>
                        <p>Started in 2016. This journey gives me confidence to learn new things by own and believe in succeess comes after hardwork</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={wdLogo} alt="Web Developer" className="skillBarImage"/>
                    <div className="skillBarText">
                        <h2>Developer</h2>
                        <p>Software developing is like challenging thyself to build and design new system that gives a satisfaction</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={research} alt="Research" className="skillBarImage"/>
                    <div className="skillBarText">
                        <h2>Research</h2>
                        <p>Let's talk less about it. It is more than emotional damage kinda thing! Peace!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;