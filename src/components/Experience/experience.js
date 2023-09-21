import React from "react";
import "./experience.css";
import workLogo from "../../assets/work.png";

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="expTitle">Experience</h2>
            <span className="expDesc">In order to create an engaging learning environment, I want to utilize my strong academic background and teaching experience. I aim to inspire students to achieve their full potential and that confidence develops their problem-solving skills and creativity. Additionally, I aspire to learn and research the latest technologies and methodologies to provide students with a proper, demonstrative, well-rounded education.</span>
            <div className="expDiv">
                <div className="expRow">
                    <img src={workLogo} alt="Lecturer, RPSU" className="expImage"/>
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
                    <img src={workLogo} alt="Web Developer, Foresight IT" className="expImage"/>
                    <div className="expText">
                        <h3>Web Developer</h3>
                        <p><i>Foresight IT</i></p>
                        <div className="expDet">
                            <span>
                                Responsibility:<br/># Website design and development. <br/>
                              # Database Management <br />
                              # Website Maintenance
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;