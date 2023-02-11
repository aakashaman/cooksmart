import React from 'react';
import './Hero.css';
import video from './vid.mp4';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="video">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <form className="search-form" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <label>
          Search your Recipe
          <input type="text" />
        </label>
      </form>
    </section>
  );
};

export default Hero;
