import React from "react";
import react from '../assets/react.svg'
import html from '../assets/html5.svg'
import js from '../assets/javascript.svg'
import css from '../assets/css.svg'
import node from '../assets/nodedotjs.svg'
import express from '../assets/express.svg'
import cpp from '../assets/cplusplus.svg'
import py from '../assets/python.svg'

const Projects = () => {
  return (
    <div className="project-section" id="projects">
      <div className="project-content">
        <h2>Projects</h2>
        <p>
          Each project here is a little window into how I think, build, and
          express. From playful experiments to purposeful builds, I enjoy
          creating things that feel simple, intuitive, and human. Whether it's a
          game, a portfolio, or a quiet idea turned into code — these are pieces
          of me, shared one line at a time.
        </p>
        <h2 className="techstack-title">Tech-Stacks Known:</h2>
        <div className="techstacks">
          <img src={react} alt="" />
          <img src={html} alt="" />
          <img src={js} alt="" />
          <img src={css} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={cpp}/>
          <img src={py} alt="" />
        </div>
      </div>

      <div className="project-cards">
        
        <div className="card1">
          <h2>Chat Application</h2>
          <div className="project-desciption">
            <p>
              Built a real-time chat app using React, Node.js, Express, and MongoDB, with Socket.io for instant messaging. Implemented user authentication (cron-based), dark/light mode using daisyUI, and a clean, responsive UI.
            </p>
            <a href="https://github.com/Akshaymalwey/full-stack-chat-application" target="_blank"
            rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>
        
        <div className="card1">
          <h2>Pokemon App</h2>
          <div className="project-desciption">
            <p>
              A React-powered Pokémon App built with Axios to fetch and display
              Pokémon stats in a clean, card-style UI.
            </p>
            <a href="https://github.com/Akshaymalwey/Pokemon-App" target="_blank"
            rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>

        <div className="card1">
          <h2>25 React Projects (WIP)</h2>
          <div className="project-desciption">
            <p>
              A growing collection of 25 mini React projects, each crafted to
              explore and understand a new concept — one component at a time.
            </p>
            <a href="https://github.com/Akshaymalwey?tab=repositories" target="_blank"
            rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>

        <div className="card1">
          <h2>Whack A Mole</h2>
          <div className="project-desciption">
            <p>
              A classic Whack-a-Mole game built with HTML, CSS, and JavaScript —
              a fun way to revise the fundamentals through clicks and chaos.
            </p>
            <a href="https://github.com/Akshaymalwey/Whack-a-mole" target="_blank"
            rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>

        <div className="card1">
          <h2>Sangam</h2>
          <div className="project-desciption">
            <p>
              An official digital home for Sangam, designed to showcase the
              heart and hustle of IIT Jammu’s magazine — built with simplicity
              and soul.
            </p>
            <a href="https://github.com/Akshaymalwey/Sangam-2" target="_blank"
            rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
