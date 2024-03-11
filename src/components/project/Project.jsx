import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { bottomAnimation } from "../../Animation";

export const Project = ({ name, img, des, tech }) => {
  return (
    <>
      <div className="project-data">
        <motion.div className="project-logo-container" {...bottomAnimation}>
          <img src={img} alt="" />
        </motion.div>

        <motion.div className="project-des-container" {...bottomAnimation}>
          <p className="project-title">{name}</p>

          <div className="project-des">
            <p>{des}</p>
          </div>

          <div className="tech-stack">
            {tech.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>
          <button className="source-code">Source code</button>
        </motion.div>
      </div>
    </>
  );
};
