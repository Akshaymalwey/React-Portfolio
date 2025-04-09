import React from "react";
import src4 from "../assets/about-img1.jpeg";
import src2 from "../assets/about-img2.jpeg";
import src3 from "../assets/about-img3.jpg";
import src1 from "../assets/about-img4.jpeg";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-img">
        <img src={src1} alt="" />
        <img src={src2} alt="" />
        <img src={src3} alt="" />
        <img src={src4} alt="" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About</h2>
        <p className="about-para">
        Born in Bhopal, becoming in Jammu — I’m Akshay, a storyteller at heart and a seeker by soul. ‘Sangam was a thought, now it’s a voice’ — a magazine I started to share the stories that often go unheard. Surrounded by mountains, I’ve grown to love the silence between peaks and the paths that lead somewhere unknown. I build, I write, I wander — always chasing moments, always collecting memories.
        </p>
      </div>
    </div>
  );
};

export default About;
