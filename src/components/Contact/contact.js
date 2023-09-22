import React from "react";
import "./contact.css";
import ResearchGate from "../../assets/researchgate.png";
import Behance from "../../assets/behance.png";
import LinkedIn from "../../assets/linkedIn.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
const Contact = () => {
    return(
        <section id="contactPage">
            <h2 className="contactTitle">Connect with Me</h2>
            <span className="contactDesc">
                Please fill out the form below to discuss any work oppourtunity.
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="email" placeholder="Your email"/>
                <textarea name="msg" className="msg" rows="5" placeholder="Your message"></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={ResearchGate} alt="Research Gate" className="link" /> 
                    <img src={Behance} alt="Behance" className="link" /> 
                    <img src={LinkedIn} alt="LinkedIn" className="link" /> 
                    <img src={Facebook} alt="Facebook" className="link" /> 
                    <img src={Instagram} alt="Instagram" className="link" /> 

                </div>
            </form>
        </section>
    )
}

export default Contact;