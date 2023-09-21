import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/Portfolio1.jpg";
import Portfolio2 from "../../assets/Portfolio2.jpg";
import Portfolio3 from "../../assets/Portfolio3.jpg";
import Portfolio4 from "../../assets/Portfolio4.jpg";
import Portfolio5 from "../../assets/Portfolio5.jpg";
import Portfolio6 from "../../assets/Portfolio6.jpg";
import Portfolio7 from "../../assets/Portfolio7.jpg";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="portTitle">My Portfolio</h2>
            <span className="portDesc">I always want to consider every small details in designing. I am experienced in Logo design, Vector, Image retouching and etc. Here are some of my artworks.</span>
            <div className="portImages">
                <img src={Portfolio1} alt="" className="portImg"/>
                <img src={Portfolio2} alt="" className="portImg"/>
                <img src={Portfolio3} alt="" className="portImg"/>
                <img src={Portfolio4} alt="" className="portImg"/>
                <img src={Portfolio5} alt="" className="portImg"/>
                <img src={Portfolio6} alt="" className="portImg"/>
                <img src={Portfolio7} alt="" className="portImg"/>
            </div>
            <button className="portBtn">See More...</button>
        </section>
    )
}

export default Portfolio;