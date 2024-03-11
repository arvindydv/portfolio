import React from "react";
import "./Project.css";

export const Project = ({ name, img, des, tech }) => {
  return (
    <>
      <div className="project-data">
        <div className="project-logo-container">
          <img src={img} alt="" />
        </div>

        <div className="project-des-container">
          <p className="project-title">{name}</p>

          <div className="project-des">
            <p>{des}</p>
          </div>

          <div className="tech-stack">
            {tech.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
            {/* <span>NodeJs</span>
            <span>NodeJs</span>
            <span>NodeJs</span> */}
          </div>
          <button className="source-code">Source code</button>
        </div>
      </div>
    </>
  );
};
