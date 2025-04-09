import React from "react";

const Contact = () => {
  return (
    <div className="contact-section" id="contacts">
      <h1>Let's Work Together!</h1>
      <a
       href="mailto:akshaymalwey2025@gmail.com?subject=Hello Akshay&body=I came across your portfolio and..."
        target="_blank"
        rel="noopener noreferrer">
        <button>Say Hi!</button>
      </a>
    </div>
  );
};

export default Contact;
