import React from "react";
import "./experience.css";
import rpsuLogo from "../../assets/rpsu.jpeg";
import foresight from "../../assets/ForesightIT.png";
import TenMSLogo from "../../assets/10MS.png";

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="expTitle">Experience</h2>
            <span className="expDesc">In order to create an engaging learning environment, I want to utilize my strong academic background and teaching experience. I aim to inspire students to achieve their full potential and that confidence develops their problem-solving skills and creativity. Additionally, I aspire to learn and research the latest technologies and methodologies to provide students with a proper, demonstrative, well-rounded education.</span>
            <div className="expDiv">
                <div className="expRow">
                    <img src={rpsuLogo} alt="Lecturer, RPSU" className="expImage"/>
                    <div className="expText">
                        <h3>Lecturer</h3>
                        <p><i>Department of Computer Science and Engineering<br/>Ranada Prasad Shaha University, Narayanganj - 1400<br/>September 2019 - October 2021</i></p>
                        <div className="expDet">
                            <span>
                                Responsibility:<br/># Conducted successfully different theory and lab courses and evaluated students based on their participation and merits. Prepared class lectures, slides and notes in order to deliver knowledge efficiently and visually. <br/>
                              # Attended academic meetings, seminars and workshops to learn from academic counselors and supervised 7 final year students on their undergraduate projects. <br />
                              # Trained students for programming and problem solving contests. Worked on syllabus, routine makings and other academic duties.
                            </span>
                            <span>
                                <br/>
                                <br/>
                            Courses: <br/>Structured Programming Language, Data Structure, Database Management System, Visual and Net-based Programming, E-Commerce and Web Design, Communication Engineering, Theory of Computations, Basic Graph Theory, Software Engineering and Information System Design Lab, and Artificial Intelligence.
                                <br/>
                            <br/>Additional Responsibility: ICPC Supervisor, Webinar Organizer, and G-Suite Trainer.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="expRow">
                    <img src={foresight} alt="Web Developer, Foresight IT" className="expImage"/>
                    <div className="expText">
                        <h3>Web Developer & Graphic Designer</h3>
                        <p><i>Foresight IT <br/> Mirpur, Dhaka<br/>June 2018 - September 2019</i></p>
                        <div className="expDet">
                            <span>
                                Responsibility:<br/>
                                # Attended client meetings and gathered requirements; Managed and Designed all graphic works that the company needed. Also, follow up with clients.<br/>
                                # Developed POS system and E-Commerce website by using Wordpress, PHP, JavaScript, HTML and CSS.<br />
                                # Maintain  server and websites after deployment to avoid errors.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="expRow">
                    <img src={TenMSLogo} alt="Design Intern" className="expImage"/>
                    <div className="expText">
                        <h3>Design Intern</h3>
                        <p><i>10 Minute School<br/> Dhaka<br/>September 2017 – January 2018</i></p>
                        <div className="expDet">
                            <span>
                                Responsibility:<br/>
                                # Gathered experience from the aesthetic designer of the company. Learned color theory, background impact, whitespace, and resolution of design.<br/>
                                # Also got vast resources for design essentials like fonts, templates, brushes, icons, etc.<br/>
                                # Designed YouTube thumbnails for SSC and HSC playlists.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;