import React from "react";
import "./Experince.css";
import { motion } from "framer-motion";
import { rightSideAnimation } from "../../Animation";

export const Experince = ({ orgnization, logo, startDate, endDate, job }) => {
  return (
    <>
      <div className="experince">
        <motion.div className="org-logo-container" {...rightSideAnimation}>
          <img src={logo} alt="" />
        </motion.div>

        <motion.div className="org-des" {...rightSideAnimation}>
          <div className="name-duration-container">
            <div className="org-name">
              <p>{orgnization}</p>
            </div>
            <div className="duration">
              <p className="start">{startDate}</p>
              <p className="end">{endDate}</p>
            </div>
          </div>
          <p className="role">{job}</p>
        </motion.div>
      </div>
    </>
  );
};
