import React from "react";
import src from "../assets/portfolio art.png";

const Hero = () => {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content">
        <h2 className="helloworld">Hello World!</h2>
        <h2 className="akshay-malwey-font">I'm Akshay Malwey</h2>
        <div className="hero-btn">
          <a
            href="https://drive.google.com/file/d/1N33v-xC-50_7k9NziZMQldB65OYBOAdM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="left-btn">View Resume</button>
          </a>
          <a
            href="https://www.instagram.com/akshaymalweyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="right-btn">Socials</button>
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={src} alt="me" />
      </div>
    </div>
  );
};

export default Hero;
