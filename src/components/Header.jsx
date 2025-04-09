import React from "react";
import src from "../assets/fevicon.png";

const Header = () => {
  return (
    <div className="header-section">
      <ul className="header-content">
        <li>
          <a
            href="https://github.com/Akshaymalwey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={src}
              alt="fevicon"
              href="https://www.instagram.com/akshaymalweyy/"
            />
          </a>
        </li>
        <li className="header-items">
          <a href="#hero">Home</a>
        </li>
        <li className="header-items">
          <a href="#about">About</a>
        </li>
        <li className="header-items">
          <a href="#projects">Projects</a>
        </li>
        <li className="header-items">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
