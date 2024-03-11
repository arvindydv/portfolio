import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { leftSideAnimation } from "../../Animation";

export const Skills = ({ name, logo }) => {
  return (
    <>
      <div className="tech-logo-container w-full">
        <div className="tech-logo w-full ">
          <motion.img
            className="w-full"
            src={logo}
            alt=""
            {...leftSideAnimation}
          />
        </div>
        <motion.p className="tech-name text-center" {...leftSideAnimation}>
          {name}
        </motion.p>
      </div>
    </>
  );
};
