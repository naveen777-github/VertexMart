import React from "react";
import "./Hero_Section.css";
const Hero_Section = ({ title, subtitle, link, image }) => {
  return (
    <section className="hero_section">
      <div className="align-center hero-content">
        <h1 className="hero_title">{title}</h1>
        <p className="hero_subtitle">{subtitle}</p>
        <a href={link} className="hero_link">
          Shop Now
        </a>
      </div>
      <div className="hero-image">
        <img src={image} alt="Hero" className="hero_image" />
      </div>
    </section>
  );
};

export default Hero_Section;
