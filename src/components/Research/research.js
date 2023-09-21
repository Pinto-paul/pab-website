import React from "react";
import "./research.css";
import Experience from "../Experience/experience";

const Research = () => {
    return (
        <section id="research">
            <h2>Recent Publications</h2>
            <div className="publicationText">
                <div className="Conference">
                    <span>Conference Paper here</span>
                </div>
                <div className="Journal">
                    <span>Journal Paper here</span>
                </div>
                <div className="Book">
                    <span>Book Chapter here</span>
                </div>
            </div>
        </section>
    )
}

export default Experience;