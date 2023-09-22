import React, {useRef} from "react";
import "./contact.css";
import ResearchGate from "../../assets/researchgate.png";
import Behance from "../../assets/behance.png";
import LinkedIn from "../../assets/linkedIn.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e3duea6', 'template_pivn0xc', form.current, 'wk1zUCmkjMCcKhkZw')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email sent.");
            }, (error) => {
                  console.log(error.text);
            });
        };

    return(
        <section id="contactPage">
            <h2 className="contactTitle">Connect with Me</h2>
            <span className="contactDesc">
                Please fill out the form below to discuss any work oppourtunity.
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your email" name="your_email"/>
                <textarea className="msg" rows="5" placeholder="Your message" name="message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <h3>Social Media:</h3>
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