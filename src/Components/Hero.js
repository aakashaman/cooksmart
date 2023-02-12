import React from 'react';
import '../Hero.css';
import video from '../vid.mp4';
import image from '../search-bar.png';

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
          <input class="search-bar" type="text" placeholder="Search Your items here to find awesome receipe...."  />
          <img src={image} className="searchicon" />
        </label>
      </form>
    </section>
  );
};

export default Hero;
